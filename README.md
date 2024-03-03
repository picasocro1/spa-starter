# SPA Starter (React + TypeScript + Vite)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Steps that have been taken to create this project

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