/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export function generateScopedName(name: string, filename: string) {
  name = name.toLowerCase()
  const componentName = filename.split('.vue')[0].split('/').slice(-1)[0].toLowerCase()
  const combined = name === componentName ? name : `${componentName}-${name}`
  return `dodo-${combined}`
}

export default defineConfig({
  base: '/dodo-ui/', // match path for madxnl.github.io/dodo-ui/
  plugins: [
    vue(),
    // Inspect(), // only applies in dev mode
  ],
  build: {
    outDir: 'docs/dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'test.setup.ts',
    css: { modules: { classNameStrategy: 'stable' } },
  },
  css: { modules: { generateScopedName } },
})
