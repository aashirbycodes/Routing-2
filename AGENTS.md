# Project guidance

- This is a Vite + React app using JavaScript/JSX and ES modules. The browser entry point is `src/main.jsx`; the current route table is declared there with `react-router`.
- When adding a route page, keep its component and page-specific files together under `src/pages/<page>/`, then register the route in `src/main.jsx`. The existing `src/pages/about/` directory is empty and does not yet establish a page implementation pattern.
- VS Code Explorer's Compact Folders option only changes how nested single-child directories are displayed. Treat each segment as a real directory, preserve actual paths when editing or moving files, and do not flatten or rename folders just because the Explorer combines their display.
- Keep styles alongside their owning components where practical; global styles are in `src/index.css` and app styles are in `src/App.css`.
- Use `npm run dev` for local development, `npm run build` to verify a production build, and `npm run lint` for ESLint. There is no test script in `package.json`.
- See [README.md](README.md) for the Vite template notes.