import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    // Use the official curriculum test setup, which defines
    // global.basePlants, global.alternatePlants, and setFetchResponse
    setupFiles: ['./src/__tests__/setup.jsx'],
  },
})
