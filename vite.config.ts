/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import { defineConfig, Plugin } from 'vite'
import { parseSource } from 'vue-docgen-api'

function docgen(): Plugin {
  return {
    name: 'vue-docgen-plugin', // required, will show up in warnings and errors
    async transform(code, id) {
      if (id.endsWith('.vue')) {
        const tag = '<script lang="ts">'
        if (!code.includes(tag)) code += tag + '\n</script>'
        const docs = await parseSource(code, id)
        const src = code.split('<script')[0]
        code = code.replace(tag, tag + `\nexport const SRC = ${JSON.stringify(src)}`)
        code = code.replace(tag, tag + `\nexport const DOCGEN = ${JSON.stringify(docs)}`)
        return { code, map: null }
      }
    },
    // handleHotUpdate(update) {
    //   update.server.ws.send({ type: 'full-reload', path: '*' })
    // },

    // async transform(code, id) {
    //   if (/\.vue$/.test(id)) {
    //     try {
    //       const doc = await parseSource(code, id)
    //     } catch (e) {
    //       console.log('ERROR:', e, { code })
    //     }
    //     // const json = JSON.stringify(doc)
    //     // const esm = dataToEsm(doc)
    //     const esm = 'export default {}'
    //     return { code: esm, map: null }
    //   }
    // },
  }
}

export function generateScopedName(name: string, filename: string) {
  name = name.toLowerCase()
  const componentName = filename.split('.vue')[0].split('/').slice(-1)[0].toLowerCase()
  const combined = name === componentName ? name : `${componentName}-${name}`
  return `dodo-${combined}`
}

export default defineConfig({
  base: '/dodo-ui/', // match path for madxnl.github.io/dodo-ui/
  plugins: [
    docgen(),
    vue(),
    // Inspect(), // only applies in dev mode
  ],
  build: {
    outDir: 'docs',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'test.setup.ts',
    css: { modules: { classNameStrategy: 'scoped' } },
  },
  css: { modules: { generateScopedName } },
})
