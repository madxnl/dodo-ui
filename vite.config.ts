import vue from '@vitejs/plugin-vue';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { defineConfig, Plugin } from 'vite';
import { parse } from 'vue-docgen-api';

function docgen(): Plugin {
  const postfix = ':docgen'

  return {
    name: 'vue-docgen-plugin', // required, will show up in warnings and errors
    resolveId (id, importer) {
      if (id.endsWith(postfix)) {
        id = decodeURIComponent(id.slice(0, -postfix.length))
        if (importer) id = resolve(dirname(importer), id)
        return encodeURIComponent(id) + postfix
      }
    },
    async load (id) {
      if (id.endsWith(postfix)) {
        // this.addWatchFile
        const decodedLoadId = (id.slice(0, -postfix.length))
        const filePath = decodeURIComponent(decodedLoadId)
        const text = JSON.stringify(await readFile(filePath, 'utf-8'))
        const docs = JSON.stringify(await parse(filePath))
        return `export const text = ${text}\nexport const docs = ${docs}`
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dodo-ui/', // match path for madxnl.github.io/dodo-ui/
  plugins: [
    docgen(),
    vue(),
  ],
  build: {
    outDir: 'docs'
  }
})
