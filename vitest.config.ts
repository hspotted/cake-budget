import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      // Mock next/font/google to prevent dynamic runtime logic from hanging the test runner
      'next/font/google': path.resolve(
        __dirname,
        '__tests__/__mocks__/next-font-google.ts'
      ),
      '~/': path.resolve(__dirname, 'src/')
    }
  },
  test: {
    include: ['__tests__/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['./__tests__/setup.ts'],
    globals: true,
    css: true,
    exclude: ['__tests__/e2e/**', 'playwright-report/**', 'node_modules/**'],
    testTimeout: 30000,
    hookTimeout: 30000,
    coverage: {
      provider: 'v8'
    }
  }
})
