import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE_URL,
    plugins: [react(), tsconfigPaths()],
    test: {
      globals: true,
      clearMocks: true,
      mockReset: true,
      environment: 'jsdom',
      setupFiles: ['setupTests.ts'],
    },
  }
})
