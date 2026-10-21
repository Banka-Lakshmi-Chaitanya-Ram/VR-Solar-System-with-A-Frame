# Solar System Texture Assets — Solaris Observatory

This directory contains high-fidelity visual textures for the celestial bodies and cosmological environment in the Solaris 3D & WebXR Planetarium experience.

## Asset Directory Structure

```text
assets/
└── textures/
    ├── deep_space_starfield.png / space-background.jpg  - Deep cosmic starfield with natural stellar magnitude distribution & nebular dust
    ├── sun.jpg                     - Granular solar photosphere map with sunspots & limb darkening (Solar System Scope / NASA)
    ├── mercury.jpg                 - High-resolution cratered silicate crust map (NASA MESSENGER Mission)
    ├── venus.jpg                   - Golden sulfuric acid atmospheric cloud shroud (NASA Magellan / Pioneer Venus)
    ├── earth.jpg                   - Visible Earth Blue Marble 2048 map (NASA Earth Observatory)
    ├── moon.jpg                    - High-resolution lunar surface map (NASA Lunar Reconnaissance Orbiter)
    ├── mars.jpg                    - Rust-red iron oxide regolith & polar ice cap map (NASA Mars Global Surveyor / Viking)
    ├── jupiter.jpg                 - Atmospheric banded jet streams & Great Red Spot (NASA Cassini-Huygens / Juno)
    ├── saturn.jpg                  - Golden-ochre atmospheric cloud deck (NASA Cassini-Huygens)
    ├── saturn-ring.png             - Authentic proportionate double-sided ring system with C ring, B ring, Cassini Division, and A ring
    ├── uranus.jpg                  - Pale aquamarine methane atmosphere map (NASA Voyager 2)
    └── neptune.jpg                 - Deep azure supersonic windswept atmosphere map (NASA Voyager 2)
```

## Origins and Licensing
- **NASA Planetary Textures**: NASA imagery, audio, video, and computer files used in the website are in the public domain and free for educational, scientific, and commercial use under [NASA Media Usage Guidelines](https://www.nasa.gov/multimedia/guidelines/index.html).
- **Solar System Scope Maps**: Sourced under the Creative Commons Attribution 4.0 International (CC BY 4.0) license ([solarsystemscope.com](https://www.solarsystemscope.com/textures/)).
- **Saturn Rings (`saturn-ring.png`)**: Procedurally rendered with authentic optical densities (faint C ring, dense B ring, transparent Cassini Division gap, and structured A ring).
- **Starfield Skybox (`deep_space_starfield.png`)**: Procedurally generated equirectangular stellar panorama with non-uniform galactic density, realistic stellar temperatures, and low-contrast deep space background.

## Procedural Fallback System
The application (`app.js`) includes an automatic procedural material generation fallback. If any image fails to load (due to offline restrictions or local network policies), the simulation engine generates a procedural banded canvas texture in memory so the 3D scene never crashes.
