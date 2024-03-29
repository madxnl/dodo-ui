import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { generateScopedName } from './vite.npm'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/dodo-ui/',
  build: {
    rollupOptions: {
      output: {
        dir: resolve(__dirname, 'docs')
      }
    },
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  css: { modules: { generateScopedName } }
})
