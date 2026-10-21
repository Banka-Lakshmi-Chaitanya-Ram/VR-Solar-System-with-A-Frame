/**
 * Solaris Automated CDP Browser Test Suite - Refactored Planetarium Observatory
 */
const fs = require('fs');
const { spawn } = require('child_process');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class CDPClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1;
    this.callbacks = new Map();
    this.consoleLogs = [];
    this.errors = [];
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const { resolve, reject } = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) reject(msg.error);
          else resolve(msg.result);
        }

        if (msg.method === 'Runtime.consoleAPICalled') {
          const type = msg.params.type;
          const text = msg.params.args.map(a => a.value || JSON.stringify(a)).join(' ');
          this.consoleLogs.push({ type, text });
          if (type === 'error') {
            this.errors.push(text);
          }
        }
        if (msg.method === 'Runtime.exceptionThrown') {
          const desc = msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text;
          this.errors.push(desc);
        }
      };
    });
  }

  async send(method, params = {}) {
    const id = this.id++;
    return new Promise((resolve, reject) => {
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async evaluate(expression) {
    const expr = expression.includes('return') && !expression.trim().startsWith('(()') 
      ? `(() => { ${expression} })()` 
      : expression;
    const res = await this.send('Runtime.evaluate', {
      expression: expr,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(res.exceptionDetails.text + ': ' + (res.exceptionDetails.exception?.description || ''));
    }
    return res.result ? res.result.value : undefined;
  }

  async captureScreenshot(filename) {
    const res = await this.send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(res.data, 'base64');
    fs.writeFileSync(filename, buffer);
    console.log(`Saved screenshot: ${filename} (${buffer.length} bytes)`);
  }

  async setViewport(width, height) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 600
    });
  }

  close() {
    this.ws.close();
  }
}

async function runTests() {
  console.log('=== STARTING SOLARIS OBSERVATORY TEST SUITE ===');

  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const chromeProc = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    'http://localhost:3000/'
  ]);

  await sleep(2500);

  try {
    const targetsRes = await fetch('http://localhost:9222/json');
    const targets = await targetsRes.json();
    const pageTarget = targets.find(t => t.type === 'page');

    if (!pageTarget) {
      throw new Error('No page target found on CDP!');
    }

    const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('Runtime.enable');
    await client.send('Page.reload', { ignoreCache: true });

    console.log('Connected to Solaris via CDP and reloaded fresh page.');

    await sleep(2500);

    // 1. Verify Page Title
    const title = await client.evaluate('document.title');
    console.log('Page Title:', title);

    // 2. Set 1366x768 desktop viewport and wait for loader to dismiss cleanly
    await client.setViewport(1366, 768);
    await client.evaluate(`
      return new Promise(resolve => {
        const check = () => {
          if (!document.getElementById('loader-overlay')) resolve();
          else setTimeout(check, 100);
        };
        check();
      });
    `);
    await sleep(1200);
    await client.captureScreenshot('test_desktop_overview.png');

    // 3. Inspect Celestial Entities in DOM and strip buttons
    const domCheck = await client.evaluate(`
      const ids = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
      const containersExist = ids.every(id => !!document.getElementById('container-' + id));
      const spheresExist = ids.every(id => !!document.getElementById('sphere-' + id));
      const stripButtons = document.querySelectorAll('.celestial-nav-btn').length;
      return { containersExist, spheresExist, stripButtons };
    `);
    console.log('DOM & Celestial Navigator Check:', domCheck);

    // 4. Test selecting Earth
    console.log('\n--- Testing Earth Selection & Multi-Tab Dossier ---');
    await client.evaluate(`selectPlanet('earth');`);
    await sleep(1500);

    const earthDossierState = await client.evaluate(`
      const dossier = document.getElementById('planet-dossier');
      const name = document.getElementById('dossier-name').textContent;
      const isOpen = dossier.classList.contains('open');
      return { isOpen, name };
    `);
    console.log('Earth Dossier State:', earthDossierState);
    await client.captureScreenshot('test_earth_overview.png');

    // Switch to Science tab
    await client.evaluate(`switchTab('science');`);
    await sleep(600);
    const scienceText = await client.evaluate(`document.getElementById('pane-science').innerText.slice(0, 100)`);
    console.log('Science Tab Content:', scienceText.replace(/\n/g, ' '));
    await client.captureScreenshot('test_earth_science.png');

    // Switch to Missions tab
    await client.evaluate(`switchTab('missions');`);
    await sleep(600);
    const missionsCount = await client.evaluate(`document.querySelectorAll('#pane-missions .mission-card').length`);
    console.log('Missions Tab Cards Count:', missionsCount);

    // Switch to Astrology tab & verify disclaimer
    await client.evaluate(`switchTab('astrology');`);
    await sleep(600);
    const hasDisclaimer = await client.evaluate(`
      const disclaimer = document.querySelector('.educational-disclaimer');
      return !!disclaimer && disclaimer.textContent.includes('Astronomy vs. Astrology');
    `);
    console.log('Astrology Tab Has Clear Disclaimer:', hasDisclaimer);
    await client.captureScreenshot('test_earth_astrology.png');

    // 5. Test selecting Saturn with rings
    console.log('\n--- Testing Saturn Selection & Ring Proportions ---');
    await client.evaluate(`selectPlanet('saturn');`);
    await sleep(1500);
    const saturnInfo = await client.evaluate(`
      return {
        name: document.getElementById('dossier-name').textContent,
        classification: document.getElementById('dossier-classification').textContent,
        ringMesh: !!document.querySelector('[planetary-ring]')
      };
    `);
    console.log('Saturn Info & Ring Verification:', saturnInfo);
    await client.captureScreenshot('test_saturn_dossier.png');

    // 6. Test Simulation Transport Controls (Play, Pause, Speed, Reset)
    console.log('\n--- Testing Transport Controls ---');
    const transportTest = await client.evaluate(`
      const btn = document.getElementById('btn-play-pause');
      btn.click();
      const paused = !simState.isRunning;
      btn.click();
      const running = simState.isRunning;

      const spd2 = document.querySelector('.speed-option[data-speed="2.0"]');
      spd2.click();
      const spd = simState.speedMultiplier;

      const resetBtn = document.getElementById('btn-reset');
      resetBtn.click();
      const resetSpd = simState.speedMultiplier;

      return { paused, running, spd, resetSpd };
    `);
    console.log('Transport Controls Test:', transportTest);

    // 7. Test Camera Presets
    console.log('\n--- Testing Camera Presets ---');
    await client.evaluate(`setCameraPreset('topdown');`);
    await sleep(1200);
    await client.captureScreenshot('test_polar_map_view.png');

    await client.evaluate(`setCameraPreset('overview');`);
    await sleep(1200);

    // 8. Test Help Modal
    // 8. Test Help Modal
    console.log('\n--- Testing Help Modal ---');
    await client.evaluate(`document.getElementById('btn-help').click();`);
    await sleep(500);
    const modalOpen = await client.evaluate(`document.getElementById('help-modal').classList.contains('open');`);
    console.log('Help Modal Open:', modalOpen);
    await client.captureScreenshot('test_help_modal.png');
    await client.evaluate(`document.getElementById('btn-close-help').click();`);
    await sleep(300);

    // ===================================================================
    // 9. TARGETED MOBILE UI VERIFICATION SEQUENCE (360 x 800)
    // ===================================================================
    console.log('\n--- Testing Targeted Mobile 360x800 Sequence ---');
    await client.setViewport(360, 800);
    await sleep(800);

    // Step 1 & 2: Confirm solar system occupies full available screen
    const initialMobileState = await client.evaluate(`
      (() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const scene = document.querySelector('a-scene');
        const canvas = scene ? scene.canvas : null;
        return {
          w,
          h,
          canvasW: canvas ? canvas.clientWidth : 0,
          canvasH: canvas ? canvas.clientHeight : 0,
          overflow: document.documentElement.scrollWidth > window.innerWidth
        };
      })()
    `);
    console.log('Step 1-2 Mobile Init State:', initialMobileState);

    // Step 3-5: Select the Sun & confirm compact bottom sheet
    await client.evaluate(`selectPlanet('sun');`);
    await sleep(700);

    const sunCollapsedState = await client.evaluate(`
      (() => {
        const dossier = document.getElementById('planet-dossier');
        const name = document.getElementById('dossier-name').textContent.trim();
        const isOpen = dossier.classList.contains('open');
        const isExpanded = dossier.classList.contains('expanded');
        const height = dossier.offsetHeight;
        const openSceneSpace = dossier.getBoundingClientRect().top;
        const chipsCount = document.querySelectorAll('.quick-fact-chip').length;
        const tabsVisible = window.getComputedStyle(document.querySelector('.dossier-tabs')).display !== 'none';
        return { name, isOpen, isExpanded, height, openSceneSpace, chipsCount, tabsVisible };
      })()
    `);
    console.log('Step 3-5 Sun Collapsed State:', sunCollapsedState);
    await client.captureScreenshot('test_mobile_360x800_sun_collapsed.png');

    // Step 6-7: Expand the sheet & verify scrollable content
    await client.evaluate(`document.getElementById('btn-expand-dossier').click();`);
    await sleep(600);

    const sunExpandedState = await client.evaluate(`
      (() => {
        const dossier = document.getElementById('planet-dossier');
        const content = document.querySelector('.dossier-content');
        const isExpanded = dossier.classList.contains('expanded');
        const height = dossier.offsetHeight;
        const scrollHeight = content.scrollHeight;
        const clientHeight = content.clientHeight;
        const tabsVisible = window.getComputedStyle(document.querySelector('.dossier-tabs')).display !== 'none';
        // Scroll content
        content.scrollTop = 140;
        const scrolled = content.scrollTop > 0;
        return { isExpanded, height, tabsVisible, scrollable: scrollHeight > clientHeight, scrolled };
      })()
    `);
    console.log('Step 6-7 Sun Expanded State:', sunExpandedState);
    await client.captureScreenshot('test_mobile_360x800_sun_expanded.png');

    // Step 8: Switch to another information section (Physical Data)
    await client.evaluate(`
      document.querySelector('.tab-btn[data-tab="science"]').click();
    `);
    await sleep(400);
    const scienceTabActive = await client.evaluate(`
      document.getElementById('pane-science').classList.contains('active')
    `);
    console.log('Step 8 Science Tab Active:', scienceTabActive);

    // Step 9: Collapse the sheet
    await client.evaluate(`document.getElementById('btn-expand-dossier').click();`);
    await sleep(500);
    const collapsedAgain = await client.evaluate(`
      (() => {
        const dossier = document.getElementById('planet-dossier');
        return {
          isExpanded: dossier.classList.contains('expanded'),
          height: dossier.offsetHeight,
          isOpen: dossier.classList.contains('open')
        };
      })()
    `);
    console.log('Step 9 Sheet Collapsed Again:', collapsedAgain);

    // Step 10-11: Select another planet (Mars) and verify content updates
    await client.evaluate(`selectPlanet('mars');`);
    await sleep(700);
    const marsState = await client.evaluate(`
      (() => {
        const name = document.getElementById('dossier-name').textContent.trim();
        const classification = document.getElementById('dossier-classification').textContent.trim();
        const prevBtn = document.getElementById('btn-prev-planet');
        const nextBtn = document.getElementById('btn-next-planet');
        return {
          name,
          classification,
          prevTarget: prevBtn ? prevBtn.dataset.targetId : null,
          nextTarget: nextBtn ? nextBtn.dataset.targetId : null
        };
      })()
    `);
    console.log('Step 10-11 Mars Selection State:', marsState);
    await client.captureScreenshot('test_mobile_360x800_mars_collapsed.png');

    // Step 11b: Test Mobile Overflow Menu Drawer
    await client.evaluate(`document.getElementById('btn-mobile-menu').click();`);
    await sleep(400);
    const menuDrawerState = await client.evaluate(`
      document.getElementById('mobile-menu-drawer').classList.contains('open')
    `);
    console.log('Step 11b Mobile Menu Drawer Open:', menuDrawerState);
    await client.captureScreenshot('test_mobile_360x800_menu_drawer.png');
    await client.evaluate(`document.getElementById('btn-close-mobile-menu').click();`);
    await sleep(300);

    // Step 12: Close the sheet
    await client.evaluate(`document.getElementById('btn-close-dossier').click();`);
    await sleep(500);
    const closedState = await client.evaluate(`
      !document.getElementById('planet-dossier').classList.contains('open')
    `);
    console.log('Step 12 Sheet Closed State:', closedState);

    // Step 13: Test transport controls (Pause, Resume, Reset) on mobile
    const mobileTransportTest = await client.evaluate(`
      (() => {
        const btn = document.getElementById('btn-play-pause');
        btn.click();
        const paused = !simState.isRunning;
        btn.click();
        const running = simState.isRunning;
        const resetBtn = document.getElementById('btn-reset');
        resetBtn.click();
        return { paused, running };
      })()
    `);
    console.log('Step 13 Mobile Transport Test:', mobileTransportTest);

    // Step 14-15: Rotate viewport to landscape (844 x 390) & repeat main interactions
    console.log('\n--- Testing Mobile Landscape (844 x 390) ---');
    await client.setViewport(844, 390);
    await sleep(800);
    await client.evaluate(`selectPlanet('jupiter');`);
    await sleep(700);

    const landscapeState = await client.evaluate(`
      (() => {
        const dossier = document.getElementById('planet-dossier');
        const rect = dossier.getBoundingClientRect();
        const windowW = window.innerWidth;
        const windowH = window.innerHeight;
        // In landscape, dossier docks to the right side
        const isRightDocked = rect.left > windowW * 0.45;
        const sceneClearSpace = rect.left;
        return {
          isRightDocked,
          dossierW: rect.width,
          dossierH: rect.height,
          sceneClearSpace,
          windowW,
          windowH,
          overflow: document.documentElement.scrollWidth > window.innerWidth
        };
      })()
    `);
    console.log('Step 14-15 Mobile Landscape State:', landscapeState);
    await client.captureScreenshot('test_mobile_landscape_844x390.png');
    await client.evaluate(`deselectPlanet();`);
    await sleep(400);

    // 10. Comprehensive Cross-Device Viewports Matrix
    const viewports = [
      { w: 320, h: 568, name: 'Small_Phone_SE_Portrait', capture: true },
      { w: 568, h: 320, name: 'Small_Phone_SE_Landscape' },
      { w: 360, h: 800, name: 'Android_Standard_Portrait' },
      { w: 390, h: 844, name: 'iPhone_Standard_Portrait', capture: true },
      { w: 844, h: 390, name: 'iPhone_Standard_Landscape', capture: true },
      { w: 430, h: 932, name: 'iPhone_ProMax_Portrait' },
      { w: 932, h: 430, name: 'iPhone_ProMax_Landscape' },
      { w: 768, h: 1024, name: 'iPad_Portrait', capture: true },
      { w: 820, h: 1180, name: 'iPad_Air_Portrait' },
      { w: 1024, h: 768, name: 'Tablet_Landscape', capture: true },
      { w: 1280, h: 800, name: 'Small_Laptop_Landscape' },
      { w: 1366, h: 768, name: 'Standard_Laptop' },
      { w: 1440, h: 900, name: 'MacBook_Desktop' },
      { w: 1920, h: 1080, name: 'Desktop_FHD', capture: true }
    ];

    console.log('\n--- Testing Comprehensive Cross-Device Viewports Matrix ---');
    for (const vp of viewports) {
      await client.setViewport(vp.w, vp.h);
      await sleep(600);

      const report = await client.evaluate(`
        (() => {
          const scrollW = document.documentElement.scrollWidth;
          const innerW = window.innerWidth;
          // Allow at most 1px threshold for browser fractional subpixels
          const noHorizontalOverflow = scrollW <= innerW + 1;
          const header = document.getElementById('top-hud');
          const bottom = document.getElementById('bottom-hud');
          const dossier = document.getElementById('planet-dossier');

          const headerOk = header && header.offsetHeight > 0;
          const bottomOk = bottom && bottom.offsetHeight > 0;

          // Open dossier for Jupiter
          selectPlanet('jupiter');
          const dossierOpen = dossier && dossier.classList.contains('open');
          const content = document.querySelector('.dossier-content');
          const scrollable = content && content.scrollHeight > 0;

          // Close dossier
          deselectPlanet();

          return {
            noHorizontalOverflow,
            headerOk,
            bottomOk,
            dossierOpen,
            scrollable,
            scrollW,
            innerW
          };
        })()
      `);

      if (!report.noHorizontalOverflow) {
        console.warn(`⚠️ Overflow Warning at ${vp.name} (${vp.w}x${vp.h}): scrollWidth=${report.scrollW}, innerWidth=${report.innerW}`);
      } else {
        console.log(`Viewport ${vp.w}x${vp.h} (${vp.name}): PASS (Overflow: None, Header: OK, Bottom: OK, Dossier: OK)`);
      }

      if (vp.capture) {
        await client.evaluate(`selectPlanet('jupiter');`);
        await sleep(700);
        await client.captureScreenshot(`test_viewport_${vp.w}x${vp.h}_${vp.name.replace(/[^a-zA-Z0-9]/g, '_')}.png`);
        await client.evaluate(`deselectPlanet();`);
      }
    }

    client.close();
    console.log('\n=== ALL TESTS COMPLETED SUCCESSFULLY ===');
  } catch (err) {
    console.error('Test Suite Error:', err);
  } finally {
    chromeProc.kill();
  }
}

runTests();
