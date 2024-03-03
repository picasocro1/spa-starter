/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  bracketSpacing: true,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss']
};

export default config;