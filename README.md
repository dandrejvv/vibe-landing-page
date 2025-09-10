# Vibe Landing Page

This repository contains a small, focused landing page prototype with two implementations:

- `react/` — a Vite + React implementation that demonstrates component structure and (optional) shader components.
- `vanilla-js/` — a pure HTML/CSS/JavaScript implementation that reproduces the visuals without a build step.

Both implementations aim to showcase shader-like visuals, animated floating elements, and a responsive hero section so you can evaluate, port, or reuse the design.

---

## Overview

- Purpose: Showcase a polished landing page with shader-inspired visuals, animated floating elements, and a responsive hero section.
- Goal: Provide small, readable reference implementations (React + Vanilla JS) that are easy to port or adapt.

---

## Quick start

These instructions show how to run either implementation. Use the one that matches your needs.

### Prerequisites (only for the React version and optional tooling)

- Node.js 16+ (or current LTS)
- npm or yarn

### React (development with Vite)

```bash
# from repository root
cd react
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

### Vanilla JS (no build step required)

Option A — open directly:

1. Open `vanilla-js/index.html` in a modern browser.

Option B — run a simple static server (recommended for correct relative asset handling):

```bash
# from repository root
cd vanilla-js
# optional: install dev dependency to use the convenience script
npm install
npm run start
```

Or run a Python static server:

```bash
# Python 3
python -m http.server 8000
```

---

## Project structure

Top-level folders:

```
react/       # Vite + React implementation
vanilla-js/  # Framework-free HTML/CSS/JS implementation
```

React implementation (important files):

```
react/
   index.html
   package.json
   vite.config.js
   src/
      main.jsx        # app bootstrap
      App.jsx         # top-level app
      components/
         Background.jsx
         FloatingElements.jsx
         Header.jsx
         HeroSection.jsx
         ShaderShowcase.jsx
```

Vanilla JS implementation (important files):

```
vanilla-js/
   index.html
   styles.css
   script.js
   package.json    # optional: small convenience script to run a static server
   README.md
```

---

## What to expect

- A modern, responsive landing layout.
- Shader-inspired visuals implemented with CSS (vanilla) or specialized React shader components.
- Decorative animated elements and a `Background` component for depth.

---

## Porting notes — translating to other frameworks

This repository is intentionally structured to make porting straightforward. Key guidance:

- Component responsibilities: keep `Header`, `HeroSection`, `ShaderShowcase`, `FloatingElements`, `Background` as distinct units.
- Shaders/WebGL: keep shader sources and WebGL setup in small vanilla modules so they can be reused across frameworks.
- Lifecycle & cleanup: ensure animations and WebGL contexts are cleaned up on unmount.
- Performance: use requestAnimationFrame and throttle heavy updates; keep performance-sensitive code outside reactive cycles when possible.
- Styling: map inline/CSS-module styles to your target framework's recommended style system.

---

## Testing & validation

- Manual: run the chosen implementation and inspect responsiveness and visual fidelity across devices.
- Automated: none included by default; consider visual regression tests or unit tests for shader logic/utilities.

---

## Vanilla JS version (summary)

The `vanilla-js/` folder contains a framework-free implementation intended for static hosting or quick demos. It reproduces the visuals using CSS and minimal JS.

Highlights:

- CSS radial gradients and animated backgrounds
- Parallax, mouse-driven interaction, and dynamic particles
- Intersection Observer for reveal animations

For full details see `vanilla-js/README.md`.

---

## Next steps / ideas

- Extract shader utilities into a framework-agnostic package for reuse.
- Add additional ports (Vue, Svelte, Solid) that mirror the `react/` structure.
- Provide TypeScript variants and small visual tests.

---

## License

This project is provided as-is. Add a LICENSE file if you plan to publish or share the code publicly.

