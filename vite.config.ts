import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// See:
// https://vitejs.dev/guide/build.html#library-mode
// https://jivancic.com/posts/build-a-component-library.html#vite-config

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Dodo-UI',
      fileName: (format) => `dodo-ui.${format}.js`
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
        }
      }
    }
  }
})
