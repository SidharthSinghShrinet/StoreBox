# AURA AQUIS — Molecular Water Works & Biosphere Recovery

A modern, responsive, high-performance web platform built with **React**, **Vite**, and **Tailwind CSS v4**. 

AURA AQUIS reimagines municipal wastewater reclamation from drab, utilitarian infrastructure into high-precision ecological biotechnology. The interface pairs real-time SCADA-style telemetry readouts with interactive engineering models, showcasing closed-loop water recovery, biomethane cogeneration, and catalytic contaminant eradication.

---

## 🌊 Overview & Core Vision

Wastewater treatment is traditionally perceived as concrete sludge tanks and chain-link fences. AURA AQUIS flips this perception on its head by framing industrial water reclamation as **advanced subterranean biosphere restoration**:

- **Closed-Loop Cyclical Recovery**: Converting municipal influent into 99.98% potable aquifer replenishment.
- **Energy-Positive Biogeneration**: Harvesting biogas solids through thermophilic digestion to power plant operations and export surplus power to the grid.
- **Trace Contaminant Annihilation**: Cleaving stubborn chemicals (PFAS, endocrine disruptors, microplastics) via ceramic nano-lattices and hydroxyl radical UV-C oxidation.

---

## ✨ Key Features

### 1. Interactive Bioluminescent Particle Canvas
- Custom HTML5 Canvas background simulation rendering floating fluid micro-particles.
- Dynamic Retina/High-DPI display scaling (`window.devicePixelRatio`).
- Delta-time normalized animation loop to guarantee consistent 60fps across 60Hz, 120Hz, and 144Hz displays with zero performance degradation.

### 2. Live Telemetry Stream & Ticker
- Real-time simulated hydraulic sensor readings for pH, barometric membrane pressure, water temperature, and NTU turbidity.
- Built with a custom React hook (`useLiveTelemetry`) with smooth intervals and clean unmount lifecycles.
- Infinite running marquee ticker styled with monospaced typography.

### 3. 5-Tier Bioregenerative Architecture Conduit
- Interactive pipeline explorer allowing users to inspect all 5 purification phases:
  1. **Stage 01**: Acoustic Clarification & Hydrodynamic Separation
  2. **Stage 02**: Biological Aerated Filter & Micro-Algal Bioreactors
  3. **Stage 03**: Ceramic Nano-Membrane Cross-Flow Lattice
  4. **Stage 04**: Vacuum UV-C & Advanced Hydroxyl Radical Oxidation
  5. **Stage 05**: Bio-Mineralization & Living Wetland Polishing
- Dynamic microscopy camera tags, retention duration stats, and an animated molecular purity progress indicator.
- Auto-centering mobile tab navigation with smooth momentum touch scrolling.

### 4. Telemetry Console & Optical Lab Analysis
- **Circular Animated Purity Gauge**: Responsive SVG radial dial that smoothly draws its stroke offset on scroll reveal, paired with an ease-out numerical counter hitting 99.98%.
- **Intake vs. Outflow Analysis Table**: Side-by-side comparison of Raw Influent vs. Treated Effluent across TSS, BOD₅, microplastics density, PFAS, and viral pathogen loads.
- Horizontally scrollable on mobile screens with protected column widths so technical values never clip.

### 5. Regional Economic & Ecologic Yield Calculator
- Interactive population scale slider spanning **100,000** to **2,500,000+** residents.
- Reactive mathematical modeling calculating:
  - **Potable Water Harvest** (Gallons/Year)
  - **Clean Power Export** (MWh Clean Baseload)
  - **Organic Digestate** (Tons Diverted)
  - **Carbon Credits** (Estimated Annual Value)
- One-click quick preset buttons (*100K Town Scale*, *1M Major Metro*, *2.5M Mega Conurbation*).

### 6. Engineering Feasibility Intake Portal
- Comprehensive feasibility intake form with controlled React state.
- Simulates secure specification transmission with real-time feedback.
- Automatic field clearing upon submission with a dismissible confirmation banner.
- Custom dark-theme autofill overrides preventing browser input discoloration.

### 7. 100% Responsive Navigation
- Glassmorphic floating header with scroll-detection depth shadow.
- Responsive mobile drawer navigation with animated hamburger trigger, backdrop blur, and body scroll lock.

---

## 🎨 Design Philosophy & Aesthetics

- **Color Palette ("Hydro-Industrial Tech")**:
  - Obsidian Abyss (`#070d16`): Non-reflective base that simulates deep subterranean water chambers and eliminates eye strain.
  - Bioluminescent Cyan (`#00E5B9` / `#6FFFD7`): Communicates catalytic energy and positive biological balance.
  - Hydro-Aero Blue (`#4CD6FB`): Marks fluid paths, pressure vectors, and active filtration states.
- **Dual-Register Typography**:
  - **Space Grotesk**: Bold, structural heading typography with tight negative tracking, giving architectural weight to major titles.
  - **Plus Jakarta Sans**: Crisp, humanist body copy for effortless readability across technical disclosures.
  - **JetBrains Mono**: Fixed-width tabular font for all numerical measurements, chemical formulas ($BOD_5$, $COD$, $mg/L$), and timestamps—ensuring digits never jitter during live updates.
- **Sub-Surface Optical Glassmorphism**:
  - Uses `backdrop-filter: blur()`, subtle 1px perimeter border glints (`rgba(255,255,255,0.06)`), and narrow photonic halos instead of muddy, opaque drop shadows.

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 19 / 18](https://react.dev/) | Functional components, custom hooks, declarative UI |
| **Build Tool & Bundler**| [Vite](https://vite.dev/) | Ultra-fast HMR, ES module bundling, instant build times |
| **Styling & CSS** | [Tailwind CSS v4](https://tailwindcss.com/) | Built using `@tailwindcss/vite` and modern `@theme` variables |
| **Icons** | [Material Symbols Outlined](https://fonts.google.com/icons) | Clean, scalable technical and ecological iconography |
| **Typography** | [Google Fonts](https://fonts.google.com/) | Space Grotesk, Plus Jakarta Sans, JetBrains Mono |

---

## 📁 Project Architecture

The codebase adheres strictly to component-based architecture and single-responsibility principles:

```
Storebox/
├── public/
│   └── favicon.svg                     # Vector favicon
├── src/
│   ├── assets/                         # Static image assets
│   ├── components/
│   │   ├── common/
│   │   │   ├── Footer.jsx              # Operations, jurisdiction, newsletter dispatch
│   │   │   └── LiveTicker.jsx          # Infinite marquee telemetry ticker
│   │   ├── features/
│   │   │   ├── architecture/
│   │   │   │   ├── ArchitectureCard.jsx
│   │   │   │   ├── ArchitectureGallery.jsx
│   │   │   │   └── TourInvitation.jsx
│   │   │   ├── calculator/
│   │   │   │   ├── CalculatorSlider.jsx
│   │   │   │   ├── YieldCalculator.jsx
│   │   │   │   └── YieldTile.jsx
│   │   │   ├── hero/
│   │   │   │   ├── HeroCinematic.jsx
│   │   │   │   ├── HeroMetrics.jsx
│   │   │   │   └── HeroSection.jsx
│   │   │   ├── inquiry/
│   │   │   │   ├── InquiryForm.jsx
│   │   │   │   └── InquirySection.jsx
│   │   │   ├── pillars/
│   │   │   │   ├── CorePillars.jsx
│   │   │   │   └── PillarCard.jsx
│   │   │   └── pipeline/
│   │   │       ├── ProcessPipeline.jsx
│   │   │       ├── StageExhibit.jsx
│   │   │       └── StageTabs.jsx
│   │   │   └── telemetry/
│   │   │       ├── ComparisonTable.jsx
│   │   │       ├── PurityDialGauge.jsx
│   │   │       └── TelemetryConsole.jsx
│   │   ├── ui/
│   │   │   ├── Badge.jsx               # Reusable bioluminescent pill badge
│   │   │   └── Button.jsx              # Shimmer-effect primary & secondary buttons
│   │   ├── BioCanvas.jsx               # High-DPI canvas particle simulation
│   │   └── Navbar.jsx                  # Floating glassmorphic header + mobile drawer
│   ├── data/
│   │   ├── pipelineStages.js           # 5-stage purification conduit data
│   │   └── telemetryData.js            # Lab parameters, pillars, and gallery data
│   ├── hooks/
│   │   ├── useAnimatedCounter.js       # Smooth ease-out numerical transition hook
│   │   ├── useLiveTelemetry.js         # Real-time sensor micro-fluctuation timer
│   │   └── useScrollReveal.js          # IntersectionObserver scroll detection hook
│   ├── App.jsx                         # Main layout and composition root
│   ├── index.css                       # Tailwind v4 configuration, themes, & keyframes
│   └── main.jsx                        # React DOM client entry
├── index.html                          # HTML shell with meta tags & preconnected fonts
├── package.json                        # Dependencies and build scripts
└── vite.config.js                      # Vite configuration with @tailwindcss/vite
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or later (Node v20+ recommended)
- **npm**: v9.0.0 or later

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SidharthSinghShrinet/StoreBox.git
   cd StoreBox
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the application with Hot Module Replacement (HMR).

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-optimized bundle will be compiled into the `dist/` directory.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

The application is fully client-side and can be hosted on any modern CDN or static provider:

### Deploy to Vercel
1. Push your changes to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Framework Preset will be automatically detected as **Vite**.
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [app.netlify.com](https://app.netlify.com).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Click **Deploy Site**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
