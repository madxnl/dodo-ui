import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export function generateScopedName(name: string, filename: string) {
  name = name.toLowerCase()
  const componentName = filename.split('.vue')[0].split('/').slice(-1)[0].toLowerCase()
  const combined = name === componentName ? name : `${componentName}-${name}`
  return `dodo-${combined}`
}

// See:
// https://vitejs.dev/guide/build.html#library-mode
// https://jivancic.com/posts/build-a-component-library.html#vite-config

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Dodo-UI'
      // fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        },
        dir: resolve(__dirname, './dist')
      }
    },
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: { modules: { generateScopedName } }
})
