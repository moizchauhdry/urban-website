# Urban Elite Limo — React (Vite + Tailwind)

The **visual design is preserved** by importing the compiled stylesheet as **`src/styles/global.css`** (originally merged from the legacy `style.css` + `responsive.css`).

Tailwind is configured with **`preflight: false`** so Tailwind’s reset does not fight the legacy CSS. You can still add Tailwind utility classes in new components.

## First-time setup (required)

The hero booking form and Google address fields need a local `.env` file.

1. Copy `.env.example` to `.env`
2. Add your Google Maps API key and booking URLs (see **[SETUP.md](./SETUP.md)** for step-by-step instructions)
3. Restart the dev server after editing `.env`

## Commands

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Structure

- `src/layouts/MainLayout.jsx` — shared chrome + interaction hook
- `src/routes/AppRoutes.jsx` — React Router routes
- `src/components/layout/*` — Header / Navbar / Footer
- `src/components/sections/*` — Home sections + About/Contact page bodies
- `src/hooks/useUrbanEliteInteractions.js` — ports the legacy `main.js` behavior

## Styling

Edit **`src/styles/global.css`** for layout, motion, and breakpoints. Re-run `npm run dev` after changes.
