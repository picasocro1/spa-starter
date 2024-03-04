# SPA Starter

- React
- TypeScript
- Vite
- Prettier
- vite-tsconfig-paths + classNames util
- envs (BASE_URL)
- Tailwind CSS
- Vitest
- React Testing Library
- Husky & lint-staged
- Organize imports & Tailwind CSS prettier order
- useTailwind hook
- Free Fontawesome icons

## Steps that have been taken to create this project

1. `pnpm create vite`
1. Install dependencies `pnpm install`
1. Configure prettier
   1. Prettier all files `pnpm exec prettier . --write`
1. Add `classNames` util in `/utils` and configure `@util` path in `tsconfig.json`
1. `pnpm i -D vite-tsconfig-paths` and configure it
1. Create `.env.development` and `.env.production` and put `BASE_URL` in it
1. Extend `gitignore` to ignore `.env` files
1. Configure vite to use `.env` files
1. [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
1. [Install Vitest](https://vitest.dev/guide/#adding-vitest-to-your-project) and configure it
1. `pnpm i -D jsdom @types/jsdom`
1. `pnpm i -D @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event`
1. Configure `setupTests` | Use it in `vite.config.ts` and `tsconfig.json` to provide global matchers types
1. `npx husky-init` & `pnpm i -D lint-staged`
1. Adjust `.husky/pre-commit` to use `npx lint-staged` instead of `npm test`
1. Configure "lint-staged" section in `package.json`
1. Remove default `App.tsx` content + related assets & styles
1. Add favicon and adjust `index.html`
1. Change `.prettierrc.cjs` to `mjs` versions
1. `pnpm i -D prettier-plugin-organize-imports prettier-plugin-tailwindcss`
1. Define plugins in .prettierrc.mjs
1. [Free Fontawesome icons](https://fontawesome.com/search?o=r&m=free) `pnpm i @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome`

## Steps to configure router

1. `pnpm i react-router-dom localforage match-sorter sort-by`
1. Inject RouterProvider in `main.tsx`
1. Init routes | Replace App with Root route
1. Add errorPage
1. Add child routes
1. Add navigation links
