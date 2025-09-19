# Copilot Coding Agent Instructions

## Project Overview
This is a personal portfolio built with React, Vite, and Tailwind CSS. It features three main pages (Home, About, Projects) and reusable components (Navbar, Footer). The project is designed for rapid front-end prototyping and clean, responsive UI.

## Architecture & Key Patterns
- **Pages:** Located in `src/pages/` (`Home.jsx`, `About.jsx`, `Projects.jsx`). Each page is a functional React component using Tailwind for layout and style.
- **Components:** Shared UI elements like `Navbar.jsx` and `Footer.jsx` are in `src/components/`. These use Tailwind classes and map over arrays for navigation links.
- **Styling:** Tailwind CSS is configured via `tailwind.config.js`. Custom styles are in `src/index.css` and `src/App.css`. Use Tailwind utility classes for most styling; only add custom CSS for unique needs.
- **Assets:** Images and static files are in `public/` and referenced with `/filename.ext` in JSX for Vite compatibility.
- **Docs:** Wireframes and mockups are in `/docs` for design reference.

## Developer Workflow
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev` (Vite hot reload)
- **No test suite or build step required for basic usage.**
- **Debugging:** Use browser dev tools and Vite error overlay. No custom debug scripts.

## Project-Specific Conventions
- **Navigation:** Use anchor links (`#section`) for in-page navigation. Navbar links map to section IDs.
- **Accessibility:** Use semantic HTML and ARIA labels for navigation and main sections.
- **Image Usage:** Reference images from `public/` with `/filename.ext` (not relative paths).
- **Styling:** Prefer Tailwind classes. Custom CSS is only for buttons and root layout.
- **No global state management or API integration.**

## Integration Points & Dependencies
- **React Router:** Used for navigation between pages (see `main.jsx`).
- **Tailwind CSS:** All layout and design is Tailwind-first. See `tailwind.config.js` for config.
- **Vite:** Handles dev server and build. No custom Vite plugins.

## Examples
- **Navbar pattern:**
  ```jsx
  const links = [ ... ];
  <ul>{links.map(link => <a href={link.href}>{link.name}</a>)}</ul>
  ```
- **Button styling:**
  ```css
  .btn { ... } /* See index.css */
  ```
- **Page layout:**
  ```jsx
  <section id="about"> ... </section>
  ```

## Key Files & Directories
- `src/pages/` — Main page components
- `src/components/` — Shared UI components
- `src/index.css`, `src/App.css` — Custom styles
- `public/` — Static assets
- `tailwind.config.js` — Tailwind setup
- `README.md` — Project summary and setup

## Agent Guidance
- Follow existing file and folder structure.
- Use Tailwind classes for layout and design.
- Reference images from `public/` with `/filename.ext`.
- Maintain accessibility and semantic HTML.
- Do not add tests, API calls, or global state unless requested.

---
_If any conventions or workflows are unclear, ask the user for clarification before proceeding._
