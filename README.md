# Vibe Landing Page (React)

This repository contains a React-based landing page prototype called **Vibe Landing Page**. It's intentionally small and focused so you can evaluate how the design and structure translate to other frameworks (Vue, Svelte, Solid, Angular, plain HTML, etc.).

## Overview

- Framework: React (Vite)
- Purpose: Showcase a polished landing page with shaders, animated floating elements, and a responsive hero section.
- Goal: Provide a clear, simple codebase that can be used as a reference for porting to other front-end frameworks.

## Quick Start

Requirements:
- Node.js 16+ (or current LTS)
- npm or yarn

Install and run locally:

```bash
# from repository root
cd react
npm install
npm run dev
```

Open http://localhost:5173 (or the URL Vite prints) in your browser.

## Project Structure

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

## What to expect

- A modern, responsive landing layout.
- A shader-based visual component (`ShaderShowcase`) that may use WebGL / GLSL or canvas APIs.
- Decorative animated elements (`FloatingElements`) and a `Background` component for depth.

## Porting notes — translating to other frameworks

This project was designed to make porting straightforward. Notes and suggestions when translating:

1. Component structure
   - Keep the same component responsibilities: `Header`, `HeroSection`, `ShaderShowcase`, `FloatingElements`, `Background`.
   - Map React component files to the target framework's single-file components (e.g., `.vue` for Vue, `.svelte` for Svelte).

2. State & props
   - The current project keeps state minimal and passes props down. Recreate the same prop-driven interfaces in the target framework.
   - For more complex shared state, use the framework's store/compose patterns (Vuex/Pinia, Svelte stores, Zustand/MobX equivalents).

3. Styling
   - If styles are inline or CSS modules, map them to the target framework's recommended pattern (scoped styles in Vue/Svelte, CSS modules in Next.js, etc.).
   - Keep global layout styles in a shared CSS file to avoid duplication.

4. Effects & lifecycle
   - React's useEffect maps to `onMounted`/`watch` in Vue and lifecycle hooks in other frameworks. Be careful with cleanup for animation loops and WebGL contexts.

5. Shaders / WebGL
   - Shader logic (GLSL sources and WebGL setup) is framework-agnostic. Extract this into a small vanilla JS module and reuse it across frameworks to minimize rewrites.

6. Performance
   - Use requestAnimationFrame for animations and throttle heavy work.
   - When porting to frameworks with more reactive overhead (e.g., fine-grained reactive systems), keep heavy animation/update loops in vanilla JS outside the reactive system.

7. Build tooling
   - Vite makes porting easy — most frameworks support Vite. For frameworks that don't, adapt using the recommended build tools.

## Testing & Validation

- Manual: Run the dev server and inspect responsiveness and shader rendering.
- Automated: This project contains no tests by default; consider adding a minimal visual regression test or unit tests for logic-heavy modules.

## Next steps / ideas

- Extract shader utilities into a framework-agnostic package for reuse.
- Create example ports: `vue/`, `svelte/`, `solid/` directories that mirror the `react/` structure.
- Add TypeScript variants for stronger portability.

## License

This project is provided as-is. Add a license file if you plan to publish or share the code publicly.

