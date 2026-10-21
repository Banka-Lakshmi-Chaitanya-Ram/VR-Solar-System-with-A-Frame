/**
 * ===================================================================
 * SOLARIS — INTERACTIVE PLANETARIUM OBSERVATORY ENGINE
 * Scientific Astronomy Engine, A-Frame Components & Observatory Dossier
 * ===================================================================
 */

// Master Catalog: NASA-Verified Astronomical & Educational Data
const CELESTIAL_BODIES = [
  {
    id: 'sun',
    name: 'The Sun',
    latinName: 'Sol',
    symbol: '☉',
    order: 'Center Star',
    classification: 'Yellow Dwarf Star (Spectral Type G2V)',
    tagline: 'The Gravitational Anchor of our Solar System',
    color: '#ffb703',
    radius: 3.2,
    distance: 0,
    orbitSpeed: 0,
    rotationPeriodHours: 600, // ~25 days differential equator
    axialTiltDeg: 7.25,
    texture: 'assets/textures/sun.jpg',
    hasRings: false,
    hasMoons: false,

    overview: {
      summary: 'The Sun is the luminous heart of our solar system, containing 99.86% of all mass in the entire planetary system. A nearly perfect sphere of incandescent plasma powered by thermonuclear fusion at its core, it converts 600 million tons of hydrogen into helium every second, generating the radiant heat and light that sustains life on Earth.',
      whyInteresting: 'Its magnetic field reverses polarity roughly every 11 years, driving sunspots, coronal mass ejections, and the solar wind that sculpts space weather across billions of kilometers.'
    },

    science: {
      diameter: '1,392,700 km (109.2 × Earth)',
      mass: '1.989 × 10³⁰ kg (333,000 × Earth)',
      surfaceGravity: '274.0 m/s² (27.9 g)',
      meanDensity: '1.41 g/cm³',
      orbitVelocity: '220 km/s (Galactic Orbit)',
      orbitalPeriod: '~230 Million Years (Cosmic Year)',
      dayLength: '25.05 Days (Equator) to 34.4 Days (Poles)',
      distanceFromSun: '0 AU (0 km)',
      temperature: 'Photosphere: 5,500 °C | Core: 15,000,000 °C | Corona: ~1–3M °C',
      atmosphere: '73.46% Hydrogen, 24.85% Helium, 0.77% Oxygen, 0.29% Carbon, 0.16% Iron',
      moons: '8 Planets, 5 recognized Dwarf Planets, millions of asteroids & comets',
      ringSystem: 'None'
    },

    missions: [
      {
        name: 'Parker Solar Probe',
        agency: 'NASA',
        dates: '2018 – Present',
        status: 'Active',
        discovery: 'First spacecraft to "touch the Sun," flying through the corona at speeds exceeding 600,000 km/h to sample magnetic switchbacks.'
      },
      {
        name: 'Solar Orbiter',
        agency: 'ESA / NASA',
        dates: '2020 – Present',
        status: 'Active',
        discovery: 'Capturing the closest images ever of solar "campfires" (micro-flares) and observing polar magnetic fields out of the ecliptic.'
      },
      {
        name: 'SOHO (Solar & Heliospheric Observatory)',
        agency: 'ESA / NASA',
        dates: '1995 – Present',
        status: 'Active',
        discovery: 'Continuous 30-year observation of solar interior oscillations, space weather, and over 5,000 sun-grazing comets.'
      }
    ],

    compareWithEarth: [
      { metric: 'Volume Scale', statement: 'Approximately 1.3 million Earths could fit inside the Sun.' },
      { metric: 'Surface Gravity', statement: 'A 70 kg human would experience 1,950 kg of gravitational force at the photosphere.' },
      { metric: 'Mass Comparison', statement: 'The Sun outweighs the Earth by 333,000 times and makes up 99.86% of the solar system.' },
      { metric: 'Light Travel Time', statement: 'Light emitted from the solar photosphere reaches Earth in exactly 8 minutes and 20 seconds.' }
    ],

    facts: [
      'The core of the Sun is so dense (150 g/cm³, 15 times denser than lead) that photons take up to 100,000 years to work their way out to the surface.',
      'The solar corona is unexpectedly hundreds of times hotter than the visible surface, a phenomenon known as the coronal heating paradox.',
      'The Sun is currently in the middle of its main sequence lifetime and has enough hydrogen fuel to shine stably for another 5 billion years.'
    ],

    astrology: {
      symbol: '☉ (Circle with central seed point)',
      rulingSigns: 'Leo (♌)',
      archetype: 'The Conscious Self, Vitality, Purpose & Illumination',
      traditionalMeaning: 'In historical Western astrology, the Sun represents the conscious ego, core identity, vitality, willpower, and creative life-force. It symbolizes the light of consciousness illuminating the psyche.',
      culturalLore: 'Known as Helios and Apollo in Hellenic culture, Ra in ancient Egypt, and Surya in Vedic Jyotish (where it signifies the Atman or inner soul and royalty).'
    },

    links: [
      { title: 'NASA Solar System Exploration — Our Sun', url: 'https://science.nasa.gov/sun/' },
      { title: 'NASA Parker Solar Probe Mission Overview', url: 'https://science.nasa.gov/mission/parker-solar-probe/' },
      { title: 'Wikipedia: The Sun', url: 'https://en.wikipedia.org/wiki/Sun' }
    ]
  },
  {
    id: 'mercury',
    name: 'Mercury',
    latinName: 'Mercurius',
    symbol: '☿',
    order: '1st Planet from the Sun',
    classification: 'Terrestrial Rocky Planet',
    tagline: 'The Scorched, Cratered Iron Messenger',
    color: '#a8a8a8',
    radius: 0.38,
    distance: 6.5,
    orbitSpeed: 4.15,
    rotationPeriodHours: 1407.6, // 58.65 Earth days
    axialTiltDeg: 0.034,
    texture: 'assets/textures/mercury.jpg',
    hasRings: false,
    hasMoons: false,

    overview: {
      summary: 'Mercury is the smallest planet in our solar system and the nearest to the Sun. Only slightly larger than Earth’s Moon, Mercury possesses a gigantic metallic iron core that occupies roughly 85% of its radius. Its dark, silicate crust is heavily scarred by impact craters and vast volcanic plains.',
      whyInteresting: 'Lacking a substantial atmosphere to trap heat, Mercury endures the wildest thermal swings in the Solar System, plunging by more than 600 °C between day and night.'
    },

    science: {
      diameter: '4,879 km (0.383 × Earth)',
      mass: '3.301 × 10²³ kg (0.055 × Earth)',
      surfaceGravity: '3.70 m/s² (0.38 g)',
      meanDensity: '5.43 g/cm³ (2nd densest planet)',
      orbitVelocity: '47.36 km/s (Fastest orbital speed)',
      orbitalPeriod: '87.97 Earth Days',
      dayLength: '58.65 Earth Days (Solar Day: 176 Days)',
      distanceFromSun: '0.387 AU (57.9 Million km)',
      temperature: 'Day: +430 °C (800 K) | Night: -180 °C (93 K)',
      atmosphere: 'Trace surface-bound exosphere: 42% Oxygen, 29% Sodium, 22% Hydrogen, 6% Helium',
      moons: '0',
      ringSystem: 'None'
    },

    missions: [
      {
        name: 'MESSENGER',
        agency: 'NASA',
        dates: '2004 – 2015',
        status: 'Completed',
        discovery: 'First spacecraft to orbit Mercury; discovered water ice inside permanently shadowed polar craters and volatile organic compounds.'
      },
      {
        name: 'BepiColombo',
        agency: 'ESA / JAXA',
        dates: '2018 – Present',
        status: 'Active (En Route)',
        discovery: 'Dual-orbiter mission executing gravity-assist flybys; scheduled to enter permanent Mercury orbit in November 2026.'
      },
      {
        name: 'Mariner 10',
        agency: 'NASA',
        dates: '1973 – 1975',
        status: 'Completed',
        discovery: 'First probe to visit Mercury, capturing initial close-up photos of its Moon-like impact craters and measuring its magnetic field.'
      }
    ],

    compareWithEarth: [
      { metric: 'Diameter Comparison', statement: 'Mercury is about one-third the width of Earth (0.38 Earth diameters across).' },
      { metric: 'Surface Gravity', statement: 'A 70 kg person on Earth would weigh only 26.6 kg on Mercury.' },
      { metric: 'Orbital Speed', statement: 'Mercury speeds through space at 47 km/s, completing an entire year in just 88 Earth days.' },
      { metric: 'Atmospheric Shield', statement: 'Earth has a thick nitrogen-oxygen atmosphere; Mercury has virtually no atmosphere, exposing it to solar radiation and micro-meteorites.' }
    ],

    facts: [
      'Mercury is locked in a unique 3:2 spin-orbit resonance: it rotates exactly three times on its axis for every two orbits around the Sun.',
      'Permanently shadowed crater floors near Mercury’s north and south poles harbor pure water ice deposits despite daytime surface temperatures hot enough to melt zinc.',
      'Mercury is shrinking: as its giant iron core slowly cooled over billions of years, the planet contracted, creating dramatic cliff scarps hundreds of kilometers long.'
    ],

    astrology: {
      symbol: '☿ (Caduceus / Winged helmet)',
      rulingSigns: 'Gemini (♊) & Virgo (♍)',
      archetype: 'The Mind, Communication, Commerce & Swift Perception',
      traditionalMeaning: 'In ancient astrological traditions, Mercury governs the mental faculty, exchange of ideas, speech, writing, commerce, analysis, and travel. It represents curiosity, adaptability, and the bridging of dualities.',
      culturalLore: 'Associated with the Roman god Mercurius and Greek Hermes (messenger of the gods). In Vedic astrology, it is known as Budha (बुध), the planet of intelligence, wit, and analytical discernment.'
    },

    links: [
      { title: 'NASA Solar System Exploration — Mercury Overview', url: 'https://science.nasa.gov/mercury/' },
      { title: 'ESA BepiColombo Mission Page', url: 'https://www.esa.int/Science_Exploration/Space_Science/BepiColombo' },
      { title: 'Wikipedia: Mercury (planet)', url: 'https://en.wikipedia.org/wiki/Mercury_(planet)' }
    ]
  },
  {
    id: 'venus',
    name: 'Venus',
    latinName: 'Venus',
    symbol: '♀',
    order: '2nd Planet from the Sun',
    classification: 'Terrestrial Rocky Planet',
    tagline: 'Earth’s Scorching Greenhouse Twin',
    color: '#e0a96d',
    radius: 0.72,
    distance: 9.8,
    orbitSpeed: 1.62,
    rotationPeriodHours: -5832.5, // 243 days retrograde
    axialTiltDeg: 177.3,
    texture: 'assets/textures/venus.jpg',
    hasRings: false,
    hasMoons: false,

    overview: {
      summary: 'Venus is nearly identical to Earth in diameter, mass, and internal rock composition, earning it the title of Earth’s sister planet. However, Venus evolved along a catastrophic path into a runaway greenhouse inferno. Enveloped in reflective sulfuric acid clouds and an ultra-dense carbon dioxide atmosphere, its surface is the hottest of any planet in the solar system.',
      whyInteresting: 'Venus rotates in the opposite direction (retrograde) compared to almost all other planets, and its day lasts longer than its year.'
    },

    science: {
      diameter: '12,104 km (0.949 × Earth)',
      mass: '4.867 × 10²⁴ kg (0.815 × Earth)',
      surfaceGravity: '8.87 m/s² (0.90 g)',
      meanDensity: '5.24 g/cm³',
      orbitVelocity: '35.02 km/s',
      orbitalPeriod: '224.70 Earth Days',
      dayLength: '243.02 Earth Days (Retrograde spin)',
      distanceFromSun: '0.723 AU (108.2 Million km)',
      temperature: 'Surface: 465 °C (738 K) — Uniform globally across day and night',
      atmosphere: '96.5% Carbon Dioxide, 3.5% Nitrogen, clouds of concentrated Sulfuric Acid (Surface pressure: 92 bar / 9.2 MPa)',
      moons: '0',
      ringSystem: 'None'
    },

    missions: [
      {
        name: 'Magellan',
        agency: 'NASA',
        dates: '1989 – 1994',
        status: 'Completed',
        discovery: 'Synthetic-aperture radar mapped 98% of the Venusian surface through dense clouds, revealing shield volcanoes, lava domes, and impact craters.'
      },
      {
        name: 'Venera Series (Venera 7–14)',
        agency: 'Soviet Space Program',
        dates: '1970 – 1982',
        status: 'Completed',
        discovery: 'Historic achievements: Venera 7 was the first probe to transmit data from another planet’s surface; Venera 13 sent the first color surface panoramas.'
      },
      {
        name: 'DAVINCI & VERITAS',
        agency: 'NASA',
        dates: 'Planned for ~2029–2031',
        status: 'In Development',
        discovery: 'Atmospheric descent probe and high-resolution radar/infrared orbiter to investigate Venusian past ocean history and active volcanism.'
      }
    ],

    compareWithEarth: [
      { metric: 'Size & Mass', statement: 'Venus is 95% of Earth’s diameter and contains 82% of Earth’s mass.' },
      { metric: 'Atmospheric Pressure', statement: 'Standing on Venus’s surface is equivalent to being 900 meters (3,000 ft) underwater on Earth.' },
      { metric: 'Surface Temperature', statement: 'Earth averages +15 °C; Venus averages 465 °C—hot enough to melt lead and tin.' },
      { metric: 'Rotational Direction', statement: 'The Sun on Venus rises in the west and sets in the east, taking 117 Earth days between sunrises.' }
    ],

    facts: [
      'Venus has a day longer than its year: it takes 243 Earth days to rotate once on its axis, but only 225 Earth days to complete an orbit around the Sun.',
      'Super-rotation: Venus’s upper clouds circle the planet at over 360 km/h, completing a full circle in just four Earth days, 60 times faster than the solid planet spins.',
      'More than 85% of Venus is covered by vast volcanic plains formed by extensive basaltic lava floods.'
    ],

    astrology: {
      symbol: '♀ (Mirror of Aphrodite)',
      rulingSigns: 'Taurus (♉) & Libra (♎)',
      archetype: 'Beauty, Harmony, Affection, Aesthetics & Value',
      traditionalMeaning: 'In astrological symbolism, Venus governs relationships, aesthetic appreciation, love, social connection, artistic harmony, and pleasure. It represents the principle of attraction and peaceful equilibrium.',
      culturalLore: 'Named after the Roman goddess of love and Greek Aphrodite. Associated with Ishtar in ancient Babylon. In Vedic Jyotish, it is known as Shukra (शुक्र), mentor of discernment, elegance, and prosperity.'
    },

    links: [
      { title: 'NASA Solar System Exploration — Venus', url: 'https://science.nasa.gov/venus/' },
      { title: 'NASA DAVINCI Mission Overview', url: 'https://science.nasa.gov/mission/davinci/' },
      { title: 'Wikipedia: Venus', url: 'https://en.wikipedia.org/wiki/Venus' }
    ]
  },
  {
    id: 'earth',
    name: 'Earth',
    latinName: 'Terra',
    symbol: '⊕',
    order: '3rd Planet from the Sun',
    classification: 'Terrestrial Habitable Planet',
    tagline: 'The Blue Oasis of Life and Liquid Oceans',
    color: '#48cae4',
    radius: 0.76,
    distance: 13.8,
    orbitSpeed: 1.0,
    rotationPeriodHours: 23.934, // 23h 56m 4s sidereal
    axialTiltDeg: 23.44,
    texture: 'assets/textures/earth.jpg',
    hasRings: false,
    hasMoons: true,

    overview: {
      summary: 'Earth is our home planet and the only world in the known universe verified to harbor living ecosystems. Orbiting comfortably within the Sun’s circumstellar habitable zone, Earth features vast liquid oceans covering 70.8% of its surface, active plate tectonics that continuously recycle carbon, and a nitrogen-oxygen atmosphere shielded by a dynamic geomagnetic field.',
      whyInteresting: 'Its relatively large natural satellite, the Moon, stabilizes Earth’s 23.4° axial tilt, ensuring temperate, predictable seasonal cycles for billions of years.'
    },

    science: {
      diameter: '12,742 km (Mean Equatorial)',
      mass: '5.972 × 10²⁴ kg (1.00 M⊕ Baseline)',
      surfaceGravity: '9.807 m/s² (1.00 g Baseline)',
      meanDensity: '5.514 g/cm³ (Densest planet in Solar System)',
      orbitVelocity: '29.78 km/s (107,200 km/h)',
      orbitalPeriod: '365.256 Days (1.00 Year)',
      dayLength: '23h 56m 04s (Sidereal) | 24h 00m 00s (Solar)',
      distanceFromSun: '1.000 AU (149.6 Million km)',
      temperature: 'Global Mean: +15 °C | Coldest: -89.2 °C (Antarctica) | Hottest: +56.7 °C (Death Valley)',
      atmosphere: '78.08% Nitrogen, 20.95% Oxygen, 0.93% Argon, 0.04% Carbon Dioxide, trace water vapor',
      moons: '1 (The Moon / Luna — Diameter: 3,474 km)',
      ringSystem: 'None'
    },

    missions: [
      {
        name: 'Earth Observing System (EOS)',
        agency: 'NASA / ESA / International',
        dates: '1972 – Present',
        status: 'Active',
        discovery: 'Constellation of satellites (Terra, Aqua, Landsat, Copernicus Sentinel) measuring global ice melt, deforestation, atmospheric CO₂, and ocean currents.'
      },
      {
        name: 'International Space Station (ISS)',
        agency: 'NASA / ESA / JAXA / CSA / Roscosmos',
        dates: '1998 – Present',
        status: 'Active',
        discovery: 'Continuously crewed microgravity orbital laboratory conducting medical, biological, physical, and astronomical experiments.'
      },
      {
        name: 'Artemis Program',
        agency: 'NASA / International Partners',
        dates: '2022 – Present',
        status: 'Active',
        discovery: 'Next-generation lunar exploration architecture to land humans on the Moon and establish long-term deep-space exploration foundations.'
      }
    ],

    compareWithEarth: [
      { metric: 'Baseline Standard', statement: 'Earth serves as the fundamental scientific baseline (1.0 AU, 1.0 g, 1.0 Earth Mass) for all comparative planetary science.' },
      { metric: 'Liquid Water', statement: 'Earth is the only planet with stable bodies of liquid water on its exposed surface.' },
      { metric: 'Oxygen Abundance', statement: 'Earth’s 21% free atmospheric oxygen is continuously regenerated by biological photosynthesis.' },
      { metric: 'Plate Tectonics', statement: 'Earth is the only terrestrial planet with active subducting plate tectonics driving planetary carbon cycles.' }
    ],

    facts: [
      'Earth is the only planet in our solar system whose name does not derive from Greek or Roman mythology; the name comes from Old English "eorðe" meaning ground.',
      'Earth’s magnetic shield is generated by convective dynamo currents in its churning outer core of molten iron and nickel over 2,900 km beneath our feet.',
      'The highest mountain from base to peak is Mauna Kea in Hawaii (10,210 m total height, 4,207 m above sea level).'
    ],

    astrology: {
      symbol: '⊕ (Sun cross / Orb of the world)',
      rulingSigns: 'Grounded physical vessel for all zodiac archetypes',
      archetype: 'The Physical Incarnation, Gaia, The Crucible of Experience',
      traditionalMeaning: 'In philosophical and esoteric traditions, Earth represents the physical theater of human evolution, the meeting point of cosmic forces, material groundedness, and ecological stewardship.',
      culturalLore: 'Personified as Gaia in Greek mythology, Tellus or Terra Mater in Rome, and Prithvi (पृथ्वी) in ancient Vedic cosmology.'
    },

    links: [
      { title: 'NASA Science — Planet Earth Overview', url: 'https://science.nasa.gov/earth/' },
      { title: 'NASA Earth Observatory Imagery', url: 'https://earthobservatory.nasa.gov/' },
      { title: 'Wikipedia: Earth', url: 'https://en.wikipedia.org/wiki/Earth' }
    ]
  },
  {
    id: 'mars',
    name: 'Mars',
    latinName: 'Mars',
    symbol: '♂',
    order: '4th Planet from the Sun',
    classification: 'Terrestrial Rocky Planet',
    tagline: 'The Rust-Colored Frontier of Ancient Water',
    color: '#f77f00',
    radius: 0.48,
    distance: 18.0,
    orbitSpeed: 0.53,
    rotationPeriodHours: 24.623, // 24h 37m 22s
    axialTiltDeg: 25.19,
    texture: 'assets/textures/mars.jpg',
    hasRings: false,
    hasMoons: false,

    overview: {
      summary: 'Mars is a cold, dry desert world with a thin carbon dioxide atmosphere. Its signature rust coloration comes from widespread iron oxide mineral dust across its regolith. Although frozen today, Mars preserves abundant geological evidence of ancient rivers, vast lakes, delta deposits, and past environments that could have supported microbial life.',
      whyInteresting: 'Mars hosts the tallest volcano in the solar system, Olympus Mons, and a canyon system, Valles Marineris, that would stretch across the entire continental United States.'
    },

    science: {
      diameter: '6,779 km (0.532 × Earth)',
      mass: '6.417 × 10²³ kg (0.107 × Earth)',
      surfaceGravity: '3.72 m/s² (0.38 g)',
      meanDensity: '3.93 g/cm³',
      orbitVelocity: '24.07 km/s',
      orbitalPeriod: '686.98 Earth Days (1.88 Earth Years)',
      dayLength: '24h 37m 22s (1 Sol)',
      distanceFromSun: '1.524 AU (227.9 Million km)',
      temperature: 'Surface: -140 °C to +20 °C (Mean -63 °C)',
      atmosphere: '95.32% Carbon Dioxide, 2.6% Nitrogen, 1.9% Argon, 0.13% Oxygen (Surface pressure: 6.1 mbar ~0.6% Earth)',
      moons: '2 (Phobos and Deimos — irregularly shaped captured asteroids)',
      ringSystem: 'None (Phobos will likely break up into a ring in ~50 million years)'
    },

    missions: [
      {
        name: 'Perseverance & Ingenuity',
        agency: 'NASA',
        dates: '2021 – Present',
        status: 'Active',
        discovery: 'Exploring Jezero Crater delta, caching rock core samples for future Earth return; Ingenuity helicopter completed 72 powered flights in thin air.'
      },
      {
        name: 'Curiosity Rover',
        agency: 'NASA',
        dates: '2012 – Present',
        status: 'Active',
        discovery: 'Traversing Mount Sharp inside Gale Crater; confirmed ancient long-lived habitable freshwater lakes and complex organic molecules.'
      },
      {
        name: 'Viking 1 & 2',
        agency: 'NASA',
        dates: '1976 – 1982',
        status: 'Completed',
        discovery: 'First successful soft landers to operate on Mars, conducting the first biological metabolic tests and panoramic imaging.'
      }
    ],

    compareWithEarth: [
      { metric: 'Physical Size', statement: 'Mars is about half the diameter of Earth (53% of Earth width).' },
      { metric: 'Gravity Comparison', statement: 'A 70 kg human on Earth weighs only 26.6 kg on Mars.' },
      { metric: 'Day & Year Length', statement: 'A Martian day (Sol) is only 39 minutes longer than Earth’s, but a Martian year lasts nearly two Earth years.' },
      { metric: 'Water Inventory', statement: 'Water on Mars exists as subsurface permafrost and polar water-ice caps, not open liquid seas.' }
    ],

    facts: [
      'Olympus Mons stands 21.9 km (72,000 ft) high—roughly two and a half times taller than Mount Everest—and covers an area the size of the state of Arizona.',
      'Valles Marineris is over 4,000 km long, 200 km wide, and up to 7 km deep, dwarfing Earth’s Grand Canyon.',
      'Mars experiences massive planet-encircling dust storms that can obscure the entire surface from telescopes for months at a time.'
    ],

    astrology: {
      symbol: '♂ (Shield and spear of Mars)',
      rulingSigns: 'Aries (♈) & historically Scorpio (♏)',
      archetype: 'Drive, Courage, Initiative, Assertion & Passion',
      traditionalMeaning: 'In ancient astrological symbolism, Mars represents the active, courageous masculine principle, vitality, assertiveness, ambition, and the instinct to overcome obstacles. It embodies focus, boundary defense, and pioneering willpower.',
      culturalLore: 'Identified with the Roman god of war Mars, Greek Ares, and Vedic Mangala (मङ्गल), who symbolizes auspicious action, energetic vigor, and warrior spirit.'
    },

    links: [
      { title: 'NASA Mars Exploration Program Overview', url: 'https://science.nasa.gov/mars/' },
      { title: 'NASA Mars 2020 Perseverance Mission Page', url: 'https://science.nasa.gov/mission/mars-2020-perseverance/' },
      { title: 'Wikipedia: Mars', url: 'https://en.wikipedia.org/wiki/Mars' }
    ]
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    latinName: 'Iuppiter',
    symbol: '♃',
    order: '5th Planet from the Sun',
    classification: 'Jovian Gas Giant',
    tagline: 'The King of Planets and Gravitational Shield',
    color: '#bc6c25',
    radius: 1.95,
    distance: 24.5,
    orbitSpeed: 0.22,
    rotationPeriodHours: 9.925, // 9h 55m 30s
    axialTiltDeg: 3.13,
    texture: 'assets/textures/jupiter.jpg',
    hasRings: false,
    hasMoons: false,

    overview: {
      summary: 'Jupiter is the undisputed colossus of the solar system, holding more than two and a half times the combined mass of every other planet combined. A majestic gas giant composed primarily of hydrogen and helium, Jupiter lacks any distinct solid surface. Its deep atmosphere is carved into swirling counter-rotating jet streams and anticyclonic storms.',
      whyInteresting: 'Its iconic Great Red Spot is an enormous high-pressure storm larger than the entire Earth that has raged continuously for centuries.'
    },

    science: {
      diameter: '139,820 km (10.97 × Earth)',
      mass: '1.898 × 10²⁷ kg (317.8 × Earth)',
      surfaceGravity: '24.79 m/s² (2.53 g at 1-bar cloud deck)',
      meanDensity: '1.33 g/cm³',
      orbitVelocity: '13.07 km/s',
      orbitalPeriod: '11.86 Earth Years (4,333 Days)',
      dayLength: '9h 55m 30s (Fastest rotation of any planet)',
      distanceFromSun: '5.204 AU (778.5 Million km)',
      temperature: '1-bar Cloud Deck: -110 °C | Core Boundary: ~24,000 °C',
      atmosphere: '89.8% Hydrogen, 10.2% Helium, trace Methane, Ammonia, Water vapor',
      moons: '95 recognized moons (4 Galilean giant moons: Io, Europa, Ganymede, Callisto)',
      ringSystem: 'Faint 4-part dust ring system (Halo, Main ring, Gossamer rings)'
    },

    missions: [
      {
        name: 'Juno',
        agency: 'NASA',
        dates: '2016 – Present',
        status: 'Active',
        discovery: 'Polar orbiting probe measuring deep atmospheric water content, magnetic field anomalies, and discovering massive 3D cyclone clusters at both poles.'
      },
      {
        name: 'Galileo',
        agency: 'NASA',
        dates: '1989 – 2003',
        status: 'Completed',
        discovery: 'First spacecraft to orbit Jupiter; dropped an atmospheric descent probe and provided the first strong evidence for a subsurface saltwater ocean on Europa.'
      },
      {
        name: 'JUICE & Europa Clipper',
        agency: 'ESA / NASA',
        dates: '2023 / 2024 – En Route',
        status: 'Active',
        discovery: 'Flagship missions dedicated to assessing the habitability of Jupiter’s ocean-bearing icy moons Europa, Ganymede, and Callisto.'
      }
    ],

    compareWithEarth: [
      { metric: 'Volume Capacity', statement: 'More than 1,300 Earths could fit inside Jupiter.' },
      { metric: 'Equatorial Diameter', statement: '11 Earths placed side-by-side would stretch across Jupiter’s equator.' },
      { metric: 'Mass & Gravity', statement: 'Jupiter contains 318 times Earth’s mass; a 70 kg human would weigh 177 kg at the 1-bar cloud deck.' },
      { metric: 'Rotation Speed', statement: 'Despite its colossal size, Jupiter spins more than twice as fast as Earth, completing a day in under 10 hours.' }
    ],

    facts: [
      'Ganymede, Jupiter’s largest moon, is larger than the planet Mercury and Pluto, and is the only moon in the solar system with its own internally generated magnetic field.',
      'Io is the most volcanically active body in the solar system, with hundreds of volcanoes continuously spewing sulfur plumes up to 400 km into space.',
      'Jupiter acts as a cosmic gravitational vacuum cleaner, deflecting comets and asteroids that might otherwise impact the inner rocky planets.'
    ],

    astrology: {
      symbol: '♃ (Stylized lightning bolt / Greek Zeta)',
      rulingSigns: 'Sagittarius (♐) & historically Pisces (♓)',
      archetype: 'Wisdom, Expansion, Prosperity, Optimism & Philosophical Vision',
      traditionalMeaning: 'In ancient astrological symbolism, Jupiter is known as the "Greater Benefic," representing growth, higher learning, generosity, ethical vision, opportunity, and optimism. It symbolizes expanding boundaries of consciousness.',
      culturalLore: 'Named after Jupiter, king of the Roman pantheon, and Greek Zeus. In Vedic astrology, it is known as Brihaspati (बृहस्पति) or Guru (गुरु)—the divine spiritual teacher and preceptor of wisdom.'
    },

    links: [
      { title: 'NASA Solar System Exploration — Jupiter', url: 'https://science.nasa.gov/jupiter/' },
      { title: 'NASA Juno Mission Overview', url: 'https://science.nasa.gov/mission/juno/' },
      { title: 'Wikipedia: Jupiter', url: 'https://en.wikipedia.org/wiki/Jupiter' }
    ]
  },
  {
    id: 'saturn',
    name: 'Saturn',
    latinName: 'Saturnus',
    symbol: '♄',
    order: '6th Planet from the Sun',
    classification: 'Jovian Gas Giant',
    tagline: 'The Crown Jewel of the Solar System',
    color: '#e9c46a',
    radius: 1.50,
    distance: 32.0,
    orbitSpeed: 0.12,
    rotationPeriodHours: 10.56, // 10h 33m 38s
    axialTiltDeg: 26.73,
    texture: 'assets/textures/saturn.jpg',
    hasRings: true,
    ringInner: 1.85,
    ringOuter: 3.35,
    hasMoons: false,

    overview: {
      summary: 'Saturn is the sixth planet from the Sun and the second largest in our solar system. Famous for its dazzling, intricate ring system spanning up to 282,000 kilometers across, Saturn is a gas giant composed predominantly of hydrogen and helium. It holds the lowest mean density of any planet, being less dense than liquid water.',
      whyInteresting: 'Saturn boasts the largest family of moons in the solar system (146 confirmed), including giant Titan with dense hydrocarbon lakes and Enceladus with active ice geysers.'
    },

    science: {
      diameter: '116,460 km (9.14 × Earth)',
      mass: '5.683 × 10²⁶ kg (95.2 × Earth)',
      surfaceGravity: '10.44 m/s² (1.06 g at 1-bar level)',
      meanDensity: '0.687 g/cm³ (Less dense than water)',
      orbitVelocity: '9.68 km/s',
      orbitalPeriod: '29.46 Earth Years (10,759 Days)',
      dayLength: '10h 33m 38s',
      distanceFromSun: '9.582 AU (1.433 Billion km)',
      temperature: '1-bar Cloud Deck: -140 °C',
      atmosphere: '96.3% Hydrogen, 3.25% Helium, trace Methane, Ammonia',
      moons: '146 recognized moons (Titan contains 96% of the mass orbiting Saturn)',
      ringSystem: 'Main rings: C, B, Cassini Division (4,800 km wide gap), A, and faint F ring'
    },

    missions: [
      {
        name: 'Cassini-Huygens',
        agency: 'NASA / ESA / ASI',
        dates: '1997 – 2017',
        status: 'Completed',
        discovery: 'Historic 13-year orbital mission; Huygens probe landed on Titan; discovered hydrothermal vents spraying water ice from Enceladus’s global ocean.'
      },
      {
        name: 'Voyager 1 & 2',
        agency: 'NASA',
        dates: '1980 – 1981 (Flybys)',
        status: 'Completed',
        discovery: 'Revealed thousands of delicate ringlets, ring spokes, and discovered complex atmospheric dynamics and new moons.'
      },
      {
        name: 'Dragonfly Mission',
        agency: 'NASA',
        dates: 'Planned Launch: 2028',
        status: 'In Development',
        discovery: 'Rotorcraft lander designed to fly across multiple sites on Titan to sample prebiotic chemistry in prebiotic organic dunes.'
      }
    ],

    compareWithEarth: [
      { metric: 'Equatorial Diameter', statement: 'Saturn’s sphere is over 9 Earths wide; with its main rings, it spans over 22 Earths across.' },
      { metric: 'Relative Gravity', statement: 'Despite being 95 times more massive than Earth, surface gravity at the cloud tops is only 6% greater than Earth’s.' },
      { metric: 'Density Comparison', statement: 'Earth is 5.5 g/cm³; Saturn is 0.69 g/cm³. Saturn is the only planet that would float in a giant ocean.' },
      { metric: 'Orbital Period', statement: 'Saturn takes almost 30 Earth years to complete a single journey around the Sun.' }
    ],

    facts: [
      'While Saturn’s main ring system spans roughly 282,000 km across, the rings are astonishingly thin—typically only 10 to 30 meters thick.',
      'Enceladus sprays plumes of water ice, simple organic molecules, and salts into space from "tiger stripe" fractures, feeding Saturn’s E ring.',
      'At Saturn’s north pole lies an enigmatic, persistent hexagonal cloud pattern roughly 30,000 km across with a central hurricane.'
    ],

    astrology: {
      symbol: '♄ (Sickle of Saturn / Scythe of Time)',
      rulingSigns: 'Capricorn (♑) & historically Aquarius (♒)',
      archetype: 'Structure, Discipline, Boundaries, Mastery & Father Time',
      traditionalMeaning: 'In ancient astrological symbolism, Saturn represents the reality principle, maturity, endurance, patience, structure, and karma. It signifies building solid foundations through sustained effort and time.',
      culturalLore: 'Associated with the Roman god of agriculture Saturn and Greek Kronos (deity of harvest and time). In Vedic Jyotish, it is revered as Shani (शनि), the stern arbiter of justice, patience, and karmic integrity.'
    },

    links: [
      { title: 'NASA Solar System Exploration — Saturn', url: 'https://science.nasa.gov/saturn/' },
      { title: 'NASA Cassini Legacy Archive', url: 'https://science.nasa.gov/mission/cassini/' },
      { title: 'Wikipedia: Saturn', url: 'https://en.wikipedia.org/wiki/Saturn' }
    ]
  },
  {
    id: 'uranus',
    name: 'Uranus',
    latinName: 'Uranus',
    symbol: '♅',
    order: '7th Planet from the Sun',
    classification: 'Ice Giant',
    tagline: 'The Sideways Tilted Azure World',
    color: '#90e0ef',
    radius: 1.05,
    distance: 39.5,
    orbitSpeed: 0.065,
    rotationPeriodHours: -17.24, // 17h 14m retrograde
    axialTiltDeg: 97.77,
    texture: 'assets/textures/uranus.jpg',
    hasRings: true,
    ringInner: 1.28,
    ringOuter: 1.55,
    hasMoons: false,

    overview: {
      summary: 'Uranus is the seventh planet from the Sun and the first planet discovered using a modern telescope (by William Herschel in 1781). Classified as an ice giant, the bulk of its mass is composed of dense supercritical fluid "ices"—water, methane, and ammonia—above a rocky core. Methane in its upper atmosphere absorbs red light, giving Uranus its pristine aquamarine cyan appearance.',
      whyInteresting: 'Uranus rotates with an extraordinary axial tilt of 97.8°, essentially rolling along its orbital path on its side.'
    },

    science: {
      diameter: '50,724 km (3.98 × Earth)',
      mass: '8.681 × 10²⁵ kg (14.5 × Earth)',
      surfaceGravity: '8.69 m/s² (0.89 g at 1-bar level)',
      meanDensity: '1.27 g/cm³',
      orbitVelocity: '6.80 km/s',
      orbitalPeriod: '84.01 Earth Years (30,687 Days)',
      dayLength: '17h 14m 24s (Retrograde; tilted 97.8°)',
      distanceFromSun: '19.22 AU (2.871 Billion km)',
      temperature: '1-bar Cloud Deck: -195 °C | Coldest atmospheric layer: -224 °C (Record in Solar System)',
      atmosphere: '82.5% Hydrogen, 15.2% Helium, 2.3% Methane, trace Hydrogen Deuteride',
      moons: '28 known moons (Named after characters of Shakespeare and Alexander Pope)',
      ringSystem: '13 known narrow, dark rings (Inner nine, middle two, outer two)'
    },

    missions: [
      {
        name: 'Voyager 2',
        agency: 'NASA',
        dates: 'Flyby in January 1986',
        status: 'Completed',
        discovery: 'The only spacecraft to visit Uranus up close; discovered 10 new moons, two new rings, and measured its tilted, offset magnetic field.'
      },
      {
        name: 'Uranus Orbiter and Probe (UOP)',
        agency: 'NASA',
        dates: 'Priority Recommendation for 2030s',
        status: 'Proposed Flagship',
        discovery: 'Ranked as the top planetary science flagship priority in the 2023–2032 Planetary Decadal Survey to deploy an atmospheric probe and study the system.'
      }
    ],

    compareWithEarth: [
      { metric: 'Equatorial Diameter', statement: 'Uranus is 4 times the width of Earth; 63 Earths could fit inside its volume.' },
      { metric: 'Surface Gravity', statement: 'Gravity at Uranus’s cloud tops is slightly weaker than Earth’s (89% of Earth g).' },
      { metric: 'Extreme Seasons', statement: 'Because it spins on its side, each pole receives 42 years of continuous sunlight followed by 42 years of night.' },
      { metric: 'Solar Distance', statement: 'Uranus is 19 times farther from the Sun than Earth; sunlight takes 2 hours and 40 minutes to reach it.' }
    ],

    facts: [
      'Uranus holds the record for the coldest recorded temperature in any planetary atmosphere in our solar system: a staggering -224 °C (-371 °F).',
      'Its magnetic field is extraordinary: tilted 59 degrees from its rotational axis and offset from the center of the planet by one-third of its radius.',
      'Miranda, one of Uranus’s inner moons, features Verona Rupes, a 20-kilometer-high vertical ice cliff—the tallest known cliff in the solar system.'
    ],

    astrology: {
      symbol: '♅ (Astronomer Herschel’s H symbol) / ⛢',
      rulingSigns: 'Aquarius (♒) in modern astrology',
      archetype: 'The Awakener, Originality, Sudden Breakthrough & Cosmic Insight',
      traditionalMeaning: 'In modern psychological astrology, Uranus represents revolutionary insight, sudden epiphanies, radical individuality, liberation from outworn structures, invention, and truth.',
      culturalLore: 'Named after Ouranos (Οὐρανός), the primordial Greek personification of the sky and heavens, husband of Gaia and father of Kronos.'
    },

    links: [
      { title: 'NASA Solar System Exploration — Uranus', url: 'https://science.nasa.gov/uranus/' },
      { title: 'NASA Voyager 2 Uranus Flyby Archive', url: 'https://science.nasa.gov/mission/voyager/voyager-2/' },
      { title: 'Wikipedia: Uranus', url: 'https://en.wikipedia.org/wiki/Uranus' }
    ]
  },
  {
    id: 'neptune',
    name: 'Neptune',
    latinName: 'Neptunus',
    symbol: '♆',
    order: '8th Planet from the Sun',
    classification: 'Ice Giant',
    tagline: 'The Azure Windswept Outpost of the Solar System',
    color: '#0077b6',
    radius: 1.02,
    distance: 46.5,
    orbitSpeed: 0.045,
    rotationPeriodHours: 16.11, // 16h 6m 36s
    axialTiltDeg: 28.32,
    texture: 'assets/textures/neptune.jpg',
    hasRings: false,
    hasMoons: false,

    overview: {
      summary: 'Neptune is the eighth and outermost major planet from the Sun. More than 30 times farther from the Sun than Earth, it is a dark, frozen ice giant with a deep azure blue atmosphere. Possessing 17 times Earth’s mass, Neptune is slightly smaller in diameter than Uranus but denser.',
      whyInteresting: 'Neptune harbors the most extreme, supersonic wind speeds recorded anywhere in the Solar System, exceeding 2,100 km/h (1,300 mph).'
    },

    science: {
      diameter: '49,244 km (3.86 × Earth)',
      mass: '1.024 × 10²⁶ kg (17.15 × Earth)',
      surfaceGravity: '11.15 m/s² (1.14 g at 1-bar level)',
      meanDensity: '1.638 g/cm³ (Densest ice giant)',
      orbitVelocity: '5.43 km/s',
      orbitalPeriod: '164.79 Earth Years (Completed first orbit since 1846 in 2011)',
      dayLength: '16h 06m 36s',
      distanceFromSun: '30.05 AU (4.495 Billion km)',
      temperature: '1-bar Cloud Deck: -201 °C',
      atmosphere: '80.0% Hydrogen, 19.0% Helium, 1.5% Methane, trace Ethane',
      moons: '16 recognized moons (Giant moon Triton orbits retrograde)',
      ringSystem: '5 faint rings with dense clumpy arcs (Galle, Leverrier, Lassell, Arago, Adams)'
    },

    missions: [
      {
        name: 'Voyager 2',
        agency: 'NASA',
        dates: 'Flyby in August 1989',
        status: 'Completed',
        discovery: 'Only spacecraft to visit Neptune; discovered the Great Dark Spot storm, 6 new moons, 4 rings, and active liquid nitrogen geysers on moon Triton.'
      },
      {
        name: 'Hubble & James Webb Telescopes',
        agency: 'NASA / ESA',
        dates: '1990 – Present',
        status: 'Active',
        discovery: 'Continuous remote tracking of disappearing cloud vortices and high-resolution infrared imaging of Neptune’s ring system.'
      }
    ],

    compareWithEarth: [
      { metric: 'Equatorial Diameter', statement: 'Neptune is roughly 3.9 times wider than Earth; 57 Earths could fit inside.' },
      { metric: 'Orbital Marathon', statement: 'Neptune takes 165 Earth years to orbit the Sun once. A single human lifetime is shorter than one Neptune year.' },
      { metric: 'Solar Distance', statement: 'Sunlight on Neptune is 900 times dimmer than on Earth, taking over 4 hours to reach the cloud tops.' },
      { metric: 'Supersonic Weather', statement: 'Earth’s strongest storm winds reach ~400 km/h; Neptune’s jet streams reach over 2,100 km/h.' }
    ],

    facts: [
      'Neptune was the first planet whose existence was calculated mathematically before it was ever seen through a telescope (calculated by Le Verrier and Adams, observed by Galle in 1846).',
      'Triton, Neptune’s largest moon, orbits backward (retrograde), proving it was originally an icy dwarf planet captured from the Kuiper Belt.',
      'Neptune radiates 2.6 times more internal heat into space than it absorbs from the distant Sun, driving its energetic weather systems.'
    ],

    astrology: {
      symbol: '♆ (Trident of Neptune)',
      rulingSigns: 'Pisces (♓) in modern astrology',
      archetype: 'Imagination, Intuition, Mysticism, Transcendence & The Unconscious',
      traditionalMeaning: 'In modern astrological psychology, Neptune governs the imaginal realm, boundless empathy, artistic inspiration, dreams, illusions, and spiritual transcendence. It dissolves rigid boundaries to reveal cosmic unity.',
      culturalLore: 'Named after Neptune, Roman lord of the sea, and Greek Poseidon, ruler of oceanic depths, earthquakes, and horses.'
    },

    links: [
      { title: 'NASA Solar System Exploration — Neptune', url: 'https://science.nasa.gov/neptune/' },
      { title: 'NASA Voyager 2 Neptune Journey Summary', url: 'https://science.nasa.gov/mission/voyager/voyager-2/' },
      { title: 'Wikipedia: Neptune', url: 'https://en.wikipedia.org/wiki/Neptune' }
    ]
  }
];

// Central Simulation State
const simState = {
  isRunning: true,
  speedMultiplier: 1.0,
  selectedPlanetId: null,
  isFollowing: false,
  showOrbits: true,
  showLabels: true,
  audioPlaying: false,
  activeTab: 'overview',
  planetAngles: {},
  cameraTransition: null
};

// Initialize starting angles along orbits
CELESTIAL_BODIES.forEach((b, i) => {
  simState.planetAngles[b.id] = (Math.PI * 2 * (i / CELESTIAL_BODIES.length));
});

/* ===================================================================
   A-FRAME CUSTOM COMPONENTS
   =================================================================== */

// Component: Draw orbital path loops with subtle, clean lines
AFRAME.registerComponent('orbit-path', {
  schema: {
    radius: { type: 'number', default: 10 },
    color: { type: 'color', default: '#3a6ea5' },
    opacity: { type: 'number', default: 0.18 }
  },

  init: function () {
    const radius = this.data.radius;
    if (radius <= 0) return;

    const segments = 128;
    const points = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(this.data.color),
      transparent: true,
      opacity: this.data.opacity,
      linewidth: 1
    });

    this.line = new THREE.LineLoop(geometry, material);
    this.el.setObject3D('orbit-line', this.line);
  },

  update: function () {
    if (this.line) {
      this.line.visible = simState.showOrbits;
    }
  },

  remove: function () {
    if (this.line) {
      this.el.removeObject3D('orbit-line');
      if (this.line.geometry) this.line.geometry.dispose();
      if (this.line.material) this.line.material.dispose();
    }
  }
});

// Component: Saturn / Uranus Rings with realistic radial texture mapping
AFRAME.registerComponent('planetary-ring', {
  schema: {
    innerRadius: { type: 'number', default: 1.85 },
    outerRadius: { type: 'number', default: 3.35 },
    src: { type: 'string', default: 'assets/textures/saturn-ring.png' },
    color: { type: 'color', default: '#e9c46a' },
    opacity: { type: 'number', default: 0.92 }
  },

  init: function () {
    const { innerRadius, outerRadius, src, color, opacity } = this.data;
    const geometry = new THREE.RingGeometry(innerRadius, outerRadius, 96);
    
    // UVs for radial mapping
    const pos = geometry.attributes.position;
    const uvs = geometry.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const dist = Math.sqrt(x * x + y * y);
      const u = (dist - innerRadius) / (outerRadius - innerRadius);
      uvs.setXY(i, u, 0.5);
    }
    geometry.attributes.uv.needsUpdate = true;

    const loader = new THREE.TextureLoader();
    loader.load(
      src,
      (texture) => {
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: opacity,
          depthWrite: false
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.x = Math.PI / 2;
        this.el.setObject3D('ring-mesh', this.mesh);
      },
      undefined,
      () => {
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color(color),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.5,
          wireframe: false
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.x = Math.PI / 2;
        this.el.setObject3D('ring-mesh', this.mesh);
      }
    );
  },

  remove: function () {
    if (this.mesh) {
      this.el.removeObject3D('ring-mesh');
      if (this.mesh.geometry) this.mesh.geometry.dispose();
      if (this.mesh.material) this.mesh.material.dispose();
    }
  }
});

// Component: Billboard text label that always faces camera
AFRAME.registerComponent('billboard-label', {
  tick: function () {
    const camera = this.el.sceneEl.camera;
    if (camera && this.el.object3D) {
      this.el.object3D.quaternion.copy(camera.quaternion);
      this.el.object3D.visible = simState.showLabels;
    }
  }
});

// Component: VR billboard in 3D world space
AFRAME.registerComponent('vr-info-billboard', {
  tick: function () {
    const camera = this.el.sceneEl.camera;
    if (camera && this.el.object3D && this.el.getAttribute('visible') === true) {
      this.el.object3D.quaternion.copy(camera.quaternion);
    }
  }
});

// Central Simulation Controller
AFRAME.registerComponent('simulation-controller', {
  init: function () {
    this.planetContainers = {};
    this.planetSpheres = {};

    CELESTIAL_BODIES.forEach(body => {
      this.planetContainers[body.id] = document.getElementById(`container-${body.id}`);
      this.planetSpheres[body.id] = document.getElementById(`sphere-${body.id}`);
    });

    this.moonPivot = document.getElementById('earth-moon-pivot');
    this.cameraRig = document.getElementById('camera-rig');
    this.selectionTarget = document.getElementById('selection-marker');

    this.baseOrbitSpeed = 0.0006;
  },

  tick: function (time, timeDelta) {
    const dt = Math.min(timeDelta, 100);

    if (simState.isRunning && dt > 0) {
      const speedMult = simState.speedMultiplier;

      CELESTIAL_BODIES.forEach(body => {
        if (body.distance > 0) {
          simState.planetAngles[body.id] += body.orbitSpeed * this.baseOrbitSpeed * speedMult * dt;
          const angle = simState.planetAngles[body.id];
          const x = Math.cos(angle) * body.distance;
          const z = Math.sin(angle) * body.distance;

          const container = this.planetContainers[body.id];
          if (container) {
            container.setAttribute('position', `${x} 0 ${z}`);
          }
        }

        // Axial spin on Y axis
        const sphere = this.planetSpheres[body.id];
        if (sphere && sphere.object3D) {
          const spinSpeed = (1 / Math.abs(body.rotationPeriodHours || 24)) * 0.005 * speedMult * dt;
          sphere.object3D.rotation.y += (body.rotationPeriodHours < 0 ? -spinSpeed : spinSpeed);
        }
      });

      if (this.moonPivot && this.moonPivot.object3D) {
        this.moonPivot.object3D.rotation.y += 0.003 * speedMult * dt;
      }
    }

    // Selection target marker positioning
    if (simState.selectedPlanetId && this.selectionTarget) {
      const selectedBody = CELESTIAL_BODIES.find(b => b.id === simState.selectedPlanetId);
      if (selectedBody) {
        const container = this.planetContainers[selectedBody.id];
        if (container) {
          const pos = container.getAttribute('position');
          this.selectionTarget.setAttribute('position', `${pos.x} ${pos.y} ${pos.z}`);
          this.selectionTarget.setAttribute('visible', true);
        }
      }
    }

    // Smooth tracking when following planet in orbit
    if (simState.isFollowing && simState.selectedPlanetId && !simState.cameraTransition) {
      const selectedBody = CELESTIAL_BODIES.find(b => b.id === simState.selectedPlanetId);
      if (selectedBody) {
        const container = this.planetContainers[selectedBody.id];
        if (container && this.cameraRig) {
          const pos = container.getAttribute('position');
          const offsetDist = Math.max(selectedBody.radius * 3.5, 3.0);
          const targetX = pos.x + offsetDist * 0.8;
          const targetY = pos.y + offsetDist * 0.55;
          const targetZ = pos.z + offsetDist * 0.8;

          const currentPos = this.cameraRig.getAttribute('position');
          currentPos.x += (targetX - currentPos.x) * 0.08;
          currentPos.y += (targetY - currentPos.y) * 0.08;
          currentPos.z += (targetZ - currentPos.z) * 0.08;
          this.cameraRig.setAttribute('position', `${currentPos.x} ${currentPos.y} ${currentPos.z}`);
        }
      }
    }

    // Smooth camera interpolation
    if (simState.cameraTransition) {
      const trans = simState.cameraTransition;
      trans.progress += dt / trans.duration;
      
      if (trans.progress >= 1.0) {
        this.cameraRig.setAttribute('position', `${trans.endPos.x} ${trans.endPos.y} ${trans.endPos.z}`);
        this.cameraRig.setAttribute('rotation', `${trans.endRot.x} ${trans.endRot.y} ${trans.endRot.z}`);
        simState.cameraTransition = null;
      } else {
        const p = trans.progress;
        const ease = 1 - Math.pow(1 - p, 3);

        const curX = trans.startPos.x + (trans.endPos.x - trans.startPos.x) * ease;
        const curY = trans.startPos.y + (trans.endPos.y - trans.startPos.y) * ease;
        const curZ = trans.startPos.z + (trans.endPos.z - trans.startPos.z) * ease;
        this.cameraRig.setAttribute('position', `${curX} ${curY} ${curZ}`);

        const rotX = trans.startRot.x + (trans.endRot.x - trans.startRot.x) * ease;
        const rotY = trans.startRot.y + (trans.endRot.y - trans.startRot.y) * ease;
        const rotZ = trans.startRot.z + (trans.endRot.z - trans.startRot.z) * ease;
        this.cameraRig.setAttribute('rotation', `${rotX} ${rotY} ${rotZ}`);
      }
    }
  }
});

/* ===================================================================
   CAMERA CONTROLLER & PRESET TRANSITIONS
   =================================================================== */

function animateCameraTo(targetPos, targetRot, duration = 1200) {
  const cameraRig = document.getElementById('camera-rig');
  if (!cameraRig) return;

  const currentPos = cameraRig.getAttribute('position');
  const currentRot = cameraRig.getAttribute('rotation');

  simState.cameraTransition = {
    startPos: { x: currentPos.x, y: currentPos.y, z: currentPos.z },
    endPos: targetPos,
    startRot: { x: currentRot.x, y: currentRot.y, z: currentRot.z },
    endRot: targetRot,
    duration: duration,
    progress: 0
  };
}

const CAMERA_PRESETS = {
  overview: {
    pos: { x: 0, y: 30, z: 58 },
    rot: { x: -26, y: 0, z: 0 }
  },
  topdown: {
    pos: { x: 0, y: 80, z: 0 },
    rot: { x: -90, y: 0, z: 0 }
  },
  ecliptic: {
    pos: { x: 0, y: 4, z: 64 },
    rot: { x: -3.5, y: 0, z: 0 }
  }
};

function setCameraPreset(presetName) {
  const isPortrait = window.innerWidth < window.innerHeight && window.innerWidth <= 900;
  let targetPos, targetRot;

  if (presetName === 'topdown') {
    targetPos = isPortrait ? { x: 0, y: 105, z: 0 } : { x: 0, y: 80, z: 0 };
    targetRot = { x: -90, y: 0, z: 0 };
  } else if (presetName === 'ecliptic') {
    targetPos = isPortrait ? { x: 0, y: 5, z: 82 } : { x: 0, y: 4, z: 64 };
    targetRot = { x: -3.5, y: 0, z: 0 };
  } else {
    // Overview perspective
    targetPos = isPortrait ? { x: 0, y: 38, z: 76 } : { x: 0, y: 30, z: 58 };
    targetRot = { x: -26, y: 0, z: 0 };
  }

  simState.isFollowing = false;
  animateCameraTo(targetPos, targetRot, 1100);

  // Update segmented control buttons
  document.querySelectorAll('.seg-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.preset === presetName);
  });
}

function focusOnPlanet(planetId) {
  const body = CELESTIAL_BODIES.find(b => b.id === planetId);
  if (!body) return;

  const container = document.getElementById(`container-${body.id}`);
  if (!container) return;

  const pos = container.getAttribute('position');
  const offsetDist = Math.max(body.radius * 3.4, 2.8);

  const isPortrait = window.innerWidth < window.innerHeight && window.innerWidth <= 900;

  // On portrait mobile, frame the planet in the clear upper half above the bottom sheet
  const targetPos = {
    x: pos.x + offsetDist * 0.78,
    y: pos.y + (isPortrait ? offsetDist * 0.95 : offsetDist * 0.55),
    z: pos.z + (isPortrait ? offsetDist * 0.95 : offsetDist * 0.78)
  };

  const dx = pos.x - targetPos.x;
  const dz = pos.z - targetPos.z;
  const targetRotY = (Math.atan2(dx, dz) * 180) / Math.PI + 180;
  const targetRotX = isPortrait ? -8 : -18;

  animateCameraTo(targetPos, { x: targetRotX, y: targetRotY, z: 0 }, 1300);
}

/* ===================================================================
   MASTER OBSERVATORY DOSSIER RENDERING (MULTI-TAB)
   =================================================================== */

function selectPlanet(planetId) {
  simState.selectedPlanetId = planetId;
  const body = CELESTIAL_BODIES.find(b => b.id === planetId);
  if (!body) return;

  // Dismiss contextual hint on user interaction
  if (typeof dismissHint === 'function') {
    dismissHint();
  }

  // Header Elements
  const badgeEl = document.getElementById('dossier-classification');
  const nameEl = document.getElementById('dossier-name');
  const symbolEl = document.getElementById('dossier-symbol');
  const taglineEl = document.getElementById('dossier-tagline');
  const dossier = document.getElementById('planet-dossier');

  if (badgeEl) badgeEl.textContent = `${body.order} · ${body.classification}`;
  if (nameEl) nameEl.textContent = body.name;
  if (symbolEl) symbolEl.textContent = body.symbol;
  if (taglineEl) taglineEl.textContent = body.tagline;

  // Tab 1: Overview
  const paneOverview = document.getElementById('pane-overview');
  if (paneOverview) {
    paneOverview.innerHTML = `
      <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-body);">
        ${body.overview.summary}
      </p>
      <div style="background: rgba(56, 189, 248, 0.06); border-left: 3px solid var(--accent-cyan); padding: 10px 14px; border-radius: var(--radius-xs); font-size: 0.82rem; color: var(--text-body); line-height: 1.5;">
        <strong style="color: var(--accent-cyan); display: block; margin-bottom: 2px;">Key Significance</strong>
        ${body.overview.whyInteresting}
      </div>
      <div>
        <table class="spec-table">
          <tbody>
            <tr class="spec-row">
              <td class="spec-label">Distance from Sun</td>
              <td class="spec-value">${body.science.distanceFromSun}</td>
            </tr>
            <tr class="spec-row">
              <td class="spec-label">Equatorial Diameter</td>
              <td class="spec-value">${body.science.diameter}</td>
            </tr>
            <tr class="spec-row">
              <td class="spec-label">Orbital Year</td>
              <td class="spec-value">${body.science.orbitalPeriod}</td>
            </tr>
            <tr class="spec-row">
              <td class="spec-label">Rotation Day</td>
              <td class="spec-value">${body.science.dayLength}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4 style="font-size: 0.76rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-secondary); margin-bottom: 10px;">Astronomical Highlights</h4>
        <div class="facts-block">
          ${body.facts.map(f => `<div class="fact-entry">${f}</div>`).join('')}
        </div>
      </div>
    `;
  }

  // Tab 2: Science & Physical Data
  const paneScience = document.getElementById('pane-science');
  if (paneScience) {
    const s = body.science;
    paneScience.innerHTML = `
      <table class="spec-table">
        <tbody>
          <tr class="spec-row">
            <td class="spec-label">Equatorial Diameter</td>
            <td class="spec-value">${s.diameter}</td>
          </tr>
          <tr class="spec-row">
            <td class="spec-label">Planetary Mass</td>
            <td class="spec-value">${s.mass}</td>
          </tr>
          <tr class="spec-row">
            <td class="spec-label">Surface Gravity</td>
            <td class="spec-value">${s.surfaceGravity}</td>
          </tr>
          <tr class="spec-row">
            <td class="spec-label">Mean Density</td>
            <td class="spec-value">${s.meanDensity}</td>
          </tr>
          <tr class="spec-row">
            <td class="spec-label">Mean Orbital Velocity</td>
            <td class="spec-value">${s.orbitVelocity}</td>
          </tr>
          <tr class="spec-row">
            <td class="spec-label">Orbital Period (Year)</td>
            <td class="spec-value">${s.orbitalPeriod}</td>
          </tr>
          <tr class="spec-row">
            <td class="spec-label">Rotation Period (Day)</td>
            <td class="spec-value">${s.dayLength}</td>
          </tr>
          <tr class="spec-row">
            <td class="spec-label">Distance from Sun</td>
            <td class="spec-value">${s.distanceFromSun}</td>
          </tr>
          <tr class="spec-row">
            <td class="spec-label">Confirmed Moons</td>
            <td class="spec-value">${s.moons}</td>
          </tr>
          <tr class="spec-row">
            <td class="spec-label">Ring System</td>
            <td class="spec-value">${s.ringSystem}</td>
          </tr>
        </tbody>
      </table>
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 12px;">
        <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">Thermal Profile</div>
        <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-primary);">${s.temperature}</div>
        <div class="spec-note">*Note: For gas giants without solid surfaces, temperatures reference the 1-bar atmospheric pressure level.</div>
      </div>
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 12px;">
        <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">Atmospheric Composition</div>
        <div style="font-size: 0.82rem; line-height: 1.5; color: var(--text-body);">${s.atmosphere}</div>
      </div>
    `;
  }

  // Tab 3: Missions & Exploration
  const paneMissions = document.getElementById('pane-missions');
  if (paneMissions) {
    paneMissions.innerHTML = `
      <div class="mission-list">
        ${body.missions.map(m => `
          <div class="mission-card ${m.status === 'Completed' ? 'completed' : ''}">
            <div class="mission-header">
              <span class="mission-name">${m.name}</span>
              <span class="mission-agency">${m.agency} · ${m.status}</span>
            </div>
            <span class="mission-dates">${m.dates}</span>
            <p class="mission-details">${m.discovery}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Tab 4: Compare with Earth
  const paneCompare = document.getElementById('pane-compare');
  if (paneCompare) {
    paneCompare.innerHTML = `
      <div class="compare-list">
        ${body.compareWithEarth.map(c => `
          <div class="compare-item">
            <span class="compare-metric">${c.metric}</span>
            <p class="compare-statement">${c.statement}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Tab 5: Astrology & Cultural Lore (Clearly Separated Section)
  const paneAstrology = document.getElementById('pane-astrology');
  if (paneAstrology) {
    const a = body.astrology;
    paneAstrology.innerHTML = `
      <!-- Educational Astronomy vs Astrology Disclaimer -->
      <div class="educational-disclaimer">
        <span class="disclaimer-title">✦ Astronomy vs. Astrology Educational Note</span>
        <p class="disclaimer-text">
          <strong>Astronomy</strong> is the empirical natural science studying celestial bodies, physical forces, orbital mechanics, and the cosmos through observation and mathematical models.
          <br><br>
          <strong>Astrology</strong> is a historical cultural and symbolic system interpreting planetary positions as archetypal metaphors for human psychology, seasons, and mythology. The notes below reflect traditional cultural lore, not empirical scientific facts.
        </p>
      </div>

      <table class="spec-table" style="margin-top: 6px;">
        <tbody>
          <tr class="spec-row">
            <td class="spec-label">Traditional Symbol</td>
            <td class="spec-value" style="color: var(--accent-purple); font-size: 1.15rem;">${a.symbol}</td>
          </tr>
          <tr class="spec-row">
            <td class="spec-label">Zodiac Association</td>
            <td class="spec-value">${a.rulingSigns}</td>
          </tr>
        </tbody>
      </table>

      <div style="border-top: 1px solid var(--border-subtle); padding-top: 12px;">
        <div style="font-size: 0.78rem; font-weight: 600; color: var(--accent-purple); margin-bottom: 4px;">Archetypal Themes</div>
        <div style="font-size: 0.88rem; font-weight: 500; color: var(--text-primary); margin-bottom: 6px;">${a.archetype}</div>
        <p style="font-size: 0.82rem; line-height: 1.5; color: var(--text-body);">
          ${a.traditionalMeaning}
        </p>
      </div>

      <div style="border-top: 1px solid var(--border-subtle); padding-top: 12px;">
        <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">Historical &amp; Mythological Context</div>
        <p style="font-size: 0.82rem; line-height: 1.5; color: var(--text-body);">
          ${a.culturalLore}
        </p>
      </div>
    `;
  }

  // Tab 6: Official Resources & Links
  const paneLinks = document.getElementById('pane-links');
  if (paneLinks) {
    paneLinks.innerHTML = `
      <div class="links-list">
        ${body.links.map(l => `
          <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="external-link-btn" title="Open ${l.title} in new tab">
            <span>${l.title}</span>
            <span class="link-arrow">↗</span>
          </a>
        `).join('')}
      </div>
      <div style="font-size: 0.74rem; color: var(--text-tertiary); margin-top: 10px; line-height: 1.4;">
        External citations link directly to verified NASA Science, ESA, and academic references.
      </div>
    `;
  }

  // Populate Compact Quick Facts Row
  const quickFactsEl = document.getElementById('dossier-quick-facts');
  if (quickFactsEl) {
    const distClean = (body.science.distanceFromSun || 'N/A').split('(')[0].trim();
    const diamClean = (body.science.diameter || 'N/A').split('(')[0].trim();
    const dayClean = (body.science.dayLength || 'N/A').split('(')[0].trim();
    const moonsClean = (body.science.moons || '0').split(' ')[0].trim();

    quickFactsEl.innerHTML = `
      <div class="quick-fact-chip" title="Distance from Sun: ${body.science.distanceFromSun}">
        <span class="quick-fact-label">Distance</span>
        <span class="quick-fact-value">${distClean}</span>
      </div>
      <div class="quick-fact-chip" title="Equatorial Diameter: ${body.science.diameter}">
        <span class="quick-fact-label">Diameter</span>
        <span class="quick-fact-value">${diamClean}</span>
      </div>
      <div class="quick-fact-chip" title="Day Length: ${body.science.dayLength}">
        <span class="quick-fact-label">Day</span>
        <span class="quick-fact-value">${dayClean}</span>
      </div>
      <div class="quick-fact-chip" title="Moons: ${body.science.moons}">
        <span class="quick-fact-label">Moons</span>
        <span class="quick-fact-value">${moonsClean}</span>
      </div>
    `;
  }

  // Prev / Next Planet Cycling
  const bodyIndex = CELESTIAL_BODIES.findIndex(b => b.id === planetId);
  if (bodyIndex !== -1) {
    const prevIndex = (bodyIndex - 1 + CELESTIAL_BODIES.length) % CELESTIAL_BODIES.length;
    const nextIndex = (bodyIndex + 1) % CELESTIAL_BODIES.length;
    const prevBtn = document.getElementById('btn-prev-planet');
    const nextBtn = document.getElementById('btn-next-planet');
    if (prevBtn) {
      prevBtn.dataset.targetId = CELESTIAL_BODIES[prevIndex].id;
      prevBtn.title = `Previous: ${CELESTIAL_BODIES[prevIndex].name}`;
    }
    if (nextBtn) {
      nextBtn.dataset.targetId = CELESTIAL_BODIES[nextIndex].id;
      nextBtn.title = `Next: ${CELESTIAL_BODIES[nextIndex].name}`;
    }
  }

  // Open Dossier Panel in compact collapsed mode by default on mobile
  if (dossier) {
    dossier.classList.remove('expanded');
    dossier.classList.add('open');
  }
  updateDossierExpandUI(false);

  // Activate default overview tab
  switchTab('overview');

  // Update bottom celestial strip selection
  document.querySelectorAll('.celestial-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.planetId === planetId);
  });

  // Focus Camera smoothly onto planet
  focusOnPlanet(planetId);

  // Update VR 3D Billboard in WebXR
  updateVRBillboard(body);
}

function updateDossierExpandUI(isExpanded) {
  const icon = document.getElementById('expand-icon');
  const label = document.getElementById('expand-label');
  const hint = document.getElementById('dossier-drag-hint');
  const btn = document.getElementById('btn-expand-dossier');
  if (icon) icon.textContent = isExpanded ? '▼' : '▲';
  if (label) label.textContent = isExpanded ? 'Collapse' : 'Full Details';
  if (hint) hint.textContent = isExpanded ? 'Tap to collapse ▼' : 'Tap to expand details ▲';
  if (btn) btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
}

function toggleDossierExpanded(forceState) {
  const dossier = document.getElementById('planet-dossier');
  if (!dossier) return;
  const isExpanded = forceState !== undefined ? forceState : !dossier.classList.contains('expanded');
  dossier.classList.toggle('expanded', isExpanded);
  updateDossierExpandUI(isExpanded);
}

function deselectPlanet() {
  simState.selectedPlanetId = null;
  simState.isFollowing = false;
  const dossier = document.getElementById('planet-dossier');
  if (dossier) {
    dossier.classList.remove('open');
    dossier.classList.remove('expanded');
  }
  updateDossierExpandUI(false);

  const marker = document.getElementById('selection-marker');
  if (marker) marker.setAttribute('visible', false);

  const vrBillboard = document.getElementById('vr-info-billboard');
  if (vrBillboard) vrBillboard.setAttribute('visible', false);

  document.querySelectorAll('.celestial-nav-btn').forEach(btn => btn.classList.remove('active'));

  if (typeof updateFollowButton === 'function') {
    updateFollowButton();
  }
}

function switchTab(tabId) {
  simState.activeTab = tabId;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    const isActive = btn.dataset.tab === tabId;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `pane-${tabId}`);
  });
}

function updateVRBillboard(body) {
  const vrBillboard = document.getElementById('vr-info-billboard');
  const vrTitle = document.getElementById('vr-billboard-title');
  const vrStats = document.getElementById('vr-billboard-stats');
  if (!vrBillboard || !vrTitle || !vrStats) return;

  vrTitle.setAttribute('value', `${body.name} (${body.symbol})`);
  vrStats.setAttribute(
    'value',
    `Type: ${body.classification}\nOrbit: ${body.science.orbitalPeriod}\nDay: ${body.science.dayLength}\nTemp: ${body.science.temperature.split('|')[0]}\nMoons: ${body.science.moons}`
  );
  vrBillboard.setAttribute('visible', true);
}

/* ===================================================================
   WEB AUDIO API COSMIC SOUND SYNTHESIZER
   =================================================================== */
class CosmicAudioSynth {
  constructor() {
    this.ctx = null;
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(240, this.ctx.currentTime);
      this.filter.Q.setValueAtTime(1.8, this.ctx.currentTime);
      this.filter.connect(this.masterGain);

      // Slow LFO filter sweep (cosmic breath)
      this.lfo = this.ctx.createOscillator();
      this.lfo.frequency.setValueAtTime(0.05, this.ctx.currentTime);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(70, this.ctx.currentTime);
      this.lfo.connect(lfoGain);
      lfoGain.connect(this.filter.frequency);
      this.lfo.start();

      // Binaural Drone (55 Hz & 55.4 Hz)
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sine';
      this.osc1.frequency.setValueAtTime(55, this.ctx.currentTime);
      this.osc1.connect(this.filter);
      this.osc1.start();

      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'sine';
      this.osc2.frequency.setValueAtTime(55.45, this.ctx.currentTime);
      this.osc2.connect(this.filter);
      this.osc2.start();

      this.isInitialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported:', e);
    }
  }

  toggle() {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    simState.audioPlaying = !simState.audioPlaying;
    const targetVolume = simState.audioPlaying ? 0.08 : 0.0001;
    this.masterGain.gain.linearRampToValueAtTime(targetVolume, this.ctx.currentTime + 1.2);
    return simState.audioPlaying;
  }
}

const cosmicSynth = new CosmicAudioSynth();

/* ===================================================================
   EVENT LISTENERS AND DOM INITIALIZATION
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const sceneEl = document.querySelector('a-scene');

  // Dismiss Loading Overlay
  if (sceneEl) {
    if (sceneEl.hasLoaded) {
      dismissLoader();
    } else {
      sceneEl.addEventListener('loaded', dismissLoader);
    }
  }

  setTimeout(dismissLoader, 1000);

  function dismissLoader() {
    const loader = document.getElementById('loader-overlay');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => {
        if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
      }, 700);
    }
  }

  // Exploration Hint Management
  const hintEl = document.getElementById('onboarding-hint');
  const dismissBtn = document.getElementById('btn-dismiss-hint');

  window.dismissHint = function() {
    if (hintEl && !hintEl.classList.contains('fade-out')) {
      hintEl.classList.add('fade-out');
      try {
        localStorage.setItem('solaris_hint_seen', 'true');
      } catch (e) {}
      setTimeout(() => {
        if (hintEl && hintEl.parentNode) {
          hintEl.parentNode.removeChild(hintEl);
        }
      }, 500);
    }
  };

  try {
    if (localStorage.getItem('solaris_hint_seen') === 'true') {
      if (hintEl) hintEl.style.display = 'none';
    }
  } catch (e) {}

  if (dismissBtn) {
    dismissBtn.addEventListener('click', window.dismissHint);
  }

  // Auto-dismiss hint after 7 seconds
  setTimeout(window.dismissHint, 7000);

  // Populate Bottom Celestial Strip Navigation
  const celestialStrip = document.getElementById('celestial-strip');
  if (celestialStrip) {
    CELESTIAL_BODIES.forEach(body => {
      const btn = document.createElement('button');
      btn.className = 'celestial-nav-btn';
      btn.dataset.planetId = body.id;
      btn.title = `${body.name} (${body.order})`;
      btn.setAttribute('aria-label', `Select ${body.name}`);
      btn.innerHTML = `<span class="nav-symbol">${body.symbol}</span><span>${body.name}</span>`;
      btn.addEventListener('click', () => selectPlanet(body.id));
      celestialStrip.appendChild(btn);
    });
  }

  // 3D Scene Click Interaction
  document.querySelectorAll('.clickable').forEach(el => {
    el.addEventListener('click', () => {
      const planetId = el.dataset.planetId || el.id.replace('sphere-', '');
      if (planetId) {
        selectPlanet(planetId);
      }
    });
  });

  // Transport: Play / Pause
  const btnPlayPause = document.getElementById('btn-play-pause');
  if (btnPlayPause) {
    btnPlayPause.addEventListener('click', () => {
      simState.isRunning = !simState.isRunning;
      updatePlayPauseButton();
    });
  }

  function updatePlayPauseButton() {
    const icon = document.getElementById('play-pause-icon');
    const label = document.getElementById('play-pause-label');
    if (!btnPlayPause) return;
    if (simState.isRunning) {
      if (icon) icon.textContent = '⏸';
      if (label) label.textContent = 'Pause';
      btnPlayPause.classList.add('active');
      btnPlayPause.setAttribute('title', 'Pause simulation (Spacebar)');
      btnPlayPause.setAttribute('aria-label', 'Pause simulation');
      btnPlayPause.setAttribute('aria-pressed', 'true');
    } else {
      if (icon) icon.textContent = '▶';
      if (label) label.textContent = 'Resume';
      btnPlayPause.classList.remove('active');
      btnPlayPause.setAttribute('title', 'Resume simulation (Spacebar)');
      btnPlayPause.setAttribute('aria-label', 'Resume simulation');
      btnPlayPause.setAttribute('aria-pressed', 'false');
    }
  }

  // Transport: Reset Simulation
  const btnReset = document.getElementById('btn-reset');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      CELESTIAL_BODIES.forEach((b, i) => {
        simState.planetAngles[b.id] = (Math.PI * 2 * (i / CELESTIAL_BODIES.length));
      });
      simState.speedMultiplier = 1.0;
      updateSpeedOption(1.0);
      deselectPlanet();
      setCameraPreset('overview');
    });
  }

  // Speed Multipliers
  function updateSpeedOption(val) {
    simState.speedMultiplier = val;
    document.querySelectorAll('.speed-option').forEach(btn => {
      btn.classList.toggle('active', parseFloat(btn.dataset.speed) === val);
    });
  }

  document.querySelectorAll('.speed-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const spd = parseFloat(btn.dataset.speed);
      updateSpeedOption(spd);
    });
  });

  // Camera Presets
  document.querySelectorAll('.seg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setCameraPreset(btn.dataset.preset);
    });
  });

  // Utility: Orbits Toggle
  const btnOrbits = document.getElementById('btn-toggle-orbits');
  function updateOrbitsToggle() {
    if (!btnOrbits) return;
    btnOrbits.classList.toggle('active', simState.showOrbits);
    btnOrbits.setAttribute('aria-pressed', simState.showOrbits ? 'true' : 'false');
    const titleText = simState.showOrbits ? 'Hide orbital paths (Key: O)' : 'Show orbital paths (Key: O)';
    btnOrbits.setAttribute('title', titleText);
    btnOrbits.setAttribute('aria-label', titleText);
  }

  if (btnOrbits) {
    btnOrbits.addEventListener('click', () => {
      simState.showOrbits = !simState.showOrbits;
      updateOrbitsToggle();
      document.querySelectorAll('[orbit-path]').forEach(el => {
        const comp = el.components['orbit-path'];
        if (comp) comp.update();
      });
    });
  }

  // Utility: Labels Toggle
  const btnLabels = document.getElementById('btn-toggle-labels');
  function updateLabelsToggle() {
    if (!btnLabels) return;
    btnLabels.classList.toggle('active', simState.showLabels);
    btnLabels.setAttribute('aria-pressed', simState.showLabels ? 'true' : 'false');
    const titleText = simState.showLabels ? 'Hide planet labels (Key: L)' : 'Show planet labels (Key: L)';
    btnLabels.setAttribute('title', titleText);
    btnLabels.setAttribute('aria-label', titleText);
  }

  if (btnLabels) {
    btnLabels.addEventListener('click', () => {
      simState.showLabels = !simState.showLabels;
      updateLabelsToggle();
    });
  }

  // Utility: Audio Toggle
  const btnAudio = document.getElementById('btn-audio');
  function updateAudioToggle(isPlaying) {
    if (!btnAudio) return;
    btnAudio.classList.toggle('active', isPlaying);
    btnAudio.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
    const icon = document.getElementById('audio-icon');
    if (icon) icon.textContent = isPlaying ? '🔊' : '🔇';
    const titleText = isPlaying ? 'Mute ambient sound' : 'Play ambient sound';
    btnAudio.setAttribute('title', titleText);
    btnAudio.setAttribute('aria-label', titleText);
  }

  if (btnAudio) {
    btnAudio.addEventListener('click', () => {
      const isPlaying = cosmicSynth.toggle();
      updateAudioToggle(isPlaying);
    });
  }

  // Dossier Tabs Navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // Dossier Actions: Focus & Follow
  const btnFocus = document.getElementById('btn-focus-planet');
  if (btnFocus) {
    btnFocus.addEventListener('click', () => {
      if (simState.selectedPlanetId) {
        focusOnPlanet(simState.selectedPlanetId);
      }
    });
  }

  const btnFollow = document.getElementById('btn-follow-planet');
  window.updateFollowButton = function() {
    if (!btnFollow) return;
    btnFollow.classList.toggle('active', simState.isFollowing);
    btnFollow.setAttribute('aria-pressed', simState.isFollowing ? 'true' : 'false');
    const followLabel = btnFollow.querySelector('span:last-child');
    if (followLabel) {
      followLabel.textContent = simState.isFollowing ? 'Stop following' : 'Follow in Orbit';
    }
    btnFollow.setAttribute('title', simState.isFollowing ? 'Stop following planet' : 'Ride along with planet in orbit');
  };

  if (btnFollow) {
    btnFollow.addEventListener('click', () => {
      simState.isFollowing = !simState.isFollowing;
      window.updateFollowButton();
    });
  }

  const btnCloseDossier = document.getElementById('btn-close-dossier');
  if (btnCloseDossier) {
    btnCloseDossier.addEventListener('click', () => {
      deselectPlanet();
      setCameraPreset('overview');
    });
  }

  // Expand / Collapse Bottom Sheet Toggle Button
  const btnExpandDossier = document.getElementById('btn-expand-dossier');
  if (btnExpandDossier) {
    btnExpandDossier.addEventListener('click', () => {
      toggleDossierExpanded();
    });
  }

  // Drag Handle Zone Tap & Touch Gestures
  const dragZone = document.getElementById('dossier-drag-zone');
  if (dragZone) {
    let touchStartY = 0;
    let touchMoved = false;

    dragZone.addEventListener('click', (e) => {
      if (!touchMoved) {
        toggleDossierExpanded();
      }
      touchMoved = false;
    });

    dragZone.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
        touchMoved = false;
      }
    }, { passive: true });

    dragZone.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        const delta = e.touches[0].clientY - touchStartY;
        if (Math.abs(delta) > 8) {
          touchMoved = true;
        }
      }
    }, { passive: true });

    dragZone.addEventListener('touchend', (e) => {
      if (touchMoved && e.changedTouches.length === 1) {
        const delta = e.changedTouches[0].clientY - touchStartY;
        const dossier = document.getElementById('planet-dossier');
        if (delta < -35) {
          // Swiped Up: Expand
          toggleDossierExpanded(true);
        } else if (delta > 35) {
          // Swiped Down: Collapse if expanded, or dismiss if already collapsed
          if (dossier && dossier.classList.contains('expanded')) {
            toggleDossierExpanded(false);
          } else {
            deselectPlanet();
            setCameraPreset('overview');
          }
        }
      }
      setTimeout(() => { touchMoved = false; }, 80);
    });
  }

  // Prev / Next Planet Arrows Navigation
  const btnPrev = document.getElementById('btn-prev-planet');
  const btnNext = document.getElementById('btn-next-planet');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (btnPrev.dataset.targetId) {
        selectPlanet(btnPrev.dataset.targetId);
      }
    });
  }
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (btnNext.dataset.targetId) {
        selectPlanet(btnNext.dataset.targetId);
      }
    });
  }

  // Mobile Overflow Menu Drawer Management
  const btnMobileMenu = document.getElementById('btn-mobile-menu');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const btnCloseMobileMenu = document.getElementById('btn-close-mobile-menu');

  if (btnMobileMenu && mobileMenuDrawer) {
    btnMobileMenu.addEventListener('click', () => {
      const isOpen = mobileMenuDrawer.classList.toggle('open');
      btnMobileMenu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (btnCloseMobileMenu && mobileMenuDrawer) {
    btnCloseMobileMenu.addEventListener('click', () => {
      mobileMenuDrawer.classList.remove('open');
      if (btnMobileMenu) btnMobileMenu.setAttribute('aria-expanded', 'false');
    });
  }

  if (mobileMenuDrawer) {
    mobileMenuDrawer.addEventListener('click', (e) => {
      if (e.target === mobileMenuDrawer) {
        mobileMenuDrawer.classList.remove('open');
        if (btnMobileMenu) btnMobileMenu.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Mobile Menu: Camera Presets
  document.querySelectorAll('.mobile-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setCameraPreset(btn.dataset.preset);
      document.querySelectorAll('.mobile-preset-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
      });
      if (mobileMenuDrawer) mobileMenuDrawer.classList.remove('open');
    });
  });

  // Mobile Menu: Orbits Toggle
  const btnMobileOrbits = document.getElementById('btn-mobile-orbits');
  const indMobileOrbits = document.getElementById('mobile-orbits-indicator');
  if (btnMobileOrbits) {
    btnMobileOrbits.addEventListener('click', () => {
      simState.showOrbits = !simState.showOrbits;
      btnMobileOrbits.classList.toggle('active', simState.showOrbits);
      btnMobileOrbits.setAttribute('aria-pressed', simState.showOrbits ? 'true' : 'false');
      if (indMobileOrbits) indMobileOrbits.textContent = simState.showOrbits ? 'ON' : 'OFF';
      updateOrbitsToggle();
      document.querySelectorAll('[orbit-path]').forEach(el => {
        const comp = el.components['orbit-path'];
        if (comp) comp.update();
      });
    });
  }

  // Mobile Menu: Labels Toggle
  const btnMobileLabels = document.getElementById('btn-mobile-labels');
  const indMobileLabels = document.getElementById('mobile-labels-indicator');
  if (btnMobileLabels) {
    btnMobileLabels.addEventListener('click', () => {
      simState.showLabels = !simState.showLabels;
      btnMobileLabels.classList.toggle('active', simState.showLabels);
      btnMobileLabels.setAttribute('aria-pressed', simState.showLabels ? 'true' : 'false');
      if (indMobileLabels) indMobileLabels.textContent = simState.showLabels ? 'ON' : 'OFF';
      updateLabelsToggle();
    });
  }

  // Mobile Menu: Audio Toggle
  const btnMobileAudio = document.getElementById('btn-mobile-audio');
  const indMobileAudio = document.getElementById('mobile-audio-indicator');
  const txtMobileAudio = document.getElementById('mobile-audio-text');
  if (btnMobileAudio) {
    btnMobileAudio.addEventListener('click', () => {
      const isPlaying = cosmicSynth.toggle();
      updateAudioToggle(isPlaying);
      btnMobileAudio.classList.toggle('active', isPlaying);
      btnMobileAudio.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
      if (indMobileAudio) indMobileAudio.textContent = isPlaying ? 'ON' : 'OFF';
      if (txtMobileAudio) txtMobileAudio.textContent = isPlaying ? '🔊 Ambient Sound' : '🔇 Ambient Sound';
    });
  }

  // Mobile Menu: VR Mode
  const btnMobileVR = document.getElementById('btn-mobile-vr');
  if (btnMobileVR && sceneEl) {
    btnMobileVR.addEventListener('click', () => {
      if (mobileMenuDrawer) mobileMenuDrawer.classList.remove('open');
      sceneEl.enterVR();
    });
  }

  // Help & Shortcuts Guide Modal
  const btnHelp = document.getElementById('btn-help');
  const helpModal = document.getElementById('help-modal');
  const btnCloseHelp = document.getElementById('btn-close-help');

  if (btnHelp && helpModal) {
    btnHelp.addEventListener('click', () => helpModal.classList.add('open'));
  }
  if (btnCloseHelp && helpModal) {
    btnCloseHelp.addEventListener('click', () => helpModal.classList.remove('open'));
  }
  if (helpModal) {
    helpModal.addEventListener('click', (e) => {
      if (e.target === helpModal) helpModal.classList.remove('open');
    });
  }

  // Mobile Menu: Guide Modal
  const btnMobileGuide = document.getElementById('btn-mobile-guide');
  if (btnMobileGuide && helpModal) {
    btnMobileGuide.addEventListener('click', () => {
      if (mobileMenuDrawer) mobileMenuDrawer.classList.remove('open');
      helpModal.classList.add('open');
    });
  }

  // Mobile Menu: Speed Multipliers
  document.querySelectorAll('.mobile-speed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const spd = parseFloat(btn.dataset.speed);
      updateSpeedOption(spd);
      document.querySelectorAll('.mobile-speed-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
      });
    });
  });

  // VR Mode Entry
  const btnEnterVR = document.getElementById('btn-enter-vr');
  if (btnEnterVR && sceneEl) {
    btnEnterVR.addEventListener('click', () => {
      sceneEl.enterVR();
    });
  }

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.code) {
      case 'Space':
        e.preventDefault();
        simState.isRunning = !simState.isRunning;
        updatePlayPauseButton();
        break;
      case 'KeyR':
        if (btnReset) btnReset.click();
        break;
      case 'KeyO':
        if (btnOrbits) btnOrbits.click();
        break;
      case 'KeyL':
        if (btnLabels) btnLabels.click();
        break;
      case 'KeyV':
        setCameraPreset('overview');
        break;
      case 'KeyT':
        setCameraPreset('topdown');
        break;
      case 'Escape':
        if (helpModal && helpModal.classList.contains('open')) {
          helpModal.classList.remove('open');
        } else {
          deselectPlanet();
          setCameraPreset('overview');
        }
        break;
      case 'Digit1': selectPlanet('mercury'); break;
      case 'Digit2': selectPlanet('venus'); break;
      case 'Digit3': selectPlanet('earth'); break;
      case 'Digit4': selectPlanet('mars'); break;
      case 'Digit5': selectPlanet('jupiter'); break;
      case 'Digit6': selectPlanet('saturn'); break;
      case 'Digit7': selectPlanet('uranus'); break;
      case 'Digit8': selectPlanet('neptune'); break;
      case 'Digit9': case 'Digit0': selectPlanet('sun'); break;
    }
  });

  // Touch & Pointer event isolation on interactive UI overlays (prevents camera dragging through panels)
  ['planet-dossier', 'help-modal', 'top-hud', 'bottom-hud', 'onboarding-hint', 'mobile-menu-drawer'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('pointerdown', (e) => e.stopPropagation());
      el.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
      el.addEventListener('mousedown', (e) => e.stopPropagation());
    }
  });

  // Responsive Viewport Resize & Orientation Synchronization
  function handleViewportChange() {
    if (sceneEl) {
      sceneEl.resize();
    }
  }

  window.addEventListener('resize', handleViewportChange);
  window.addEventListener('orientationchange', () => {
    setTimeout(handleViewportChange, 150);
  });
});
