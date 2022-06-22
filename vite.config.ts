import vue from '@vitejs/plugin-vue'
import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { defineConfig, Plugin, ViteDevServer } from 'vite'
import { parse, parseSource } from 'vue-docgen-api'
import Inspect from 'vite-plugin-inspect'

function docgen(): Plugin {
  const postfix = ':docgen'
  let server: ViteDevServer

  return {
    name: 'vue-docgen-plugin', // required, will show up in warnings and errors
    // configureServer(_server) {
    //   server = _server
    // },
    resolveId(id, importer) {
      if (id.endsWith(postfix)) {
        id = decodeURIComponent(id.slice(0, -postfix.length))
        // console.log('add file atch', id)
        // const thisModule = server.moduleGraph.getModuleById(id)
        // const module = server.moduleGraph.createFileOnlyEntry(id)
        // server.moduleGraph.updateModuleInfo(thisModule,
        // this.addWatchFile(id)
        if (importer) id = resolve(dirname(importer), id)
        return encodeURIComponent(id) + postfix
      }
    },
    async load(id) {
      if (id.endsWith(postfix)) {
        const decodedLoadId = (id.slice(0, -postfix.length))
        const filePath = decodeURIComponent(decodedLoadId)
        this.addWatchFile(filePath)
        const text = JSON.stringify(await readFile(filePath, 'utf-8'))
        const docs = JSON.stringify(await parse(filePath))
        return `export const text = ${text}\nexport const docs = ${docs}`
      }
    },
    async transform(code, id) {
      if (id.endsWith('.vue')) {
        const tag = '<script lang="ts">'
        if (!code.includes(tag)) code += tag + '\n</script>'
        const docs = await parseSource(code, id)
        // const src = code.replace(/\\|"|<|\//g, '^')
        const src = code.split('<script')[0]
        code = code.replace(tag, tag + `\nexport const source = ${JSON.stringify(src)}`)
        code = code.replace(tag, tag + `\nexport const docs = ${JSON.stringify(docs)}`)
        return { code, map: null }
      }
    },
    handleHotUpdate(update) {
      update.server.ws.send({ type: 'full-reload', path: '*' })

      //   console.log('reloading json file...', update.file, update.modules.map(x => [x.id, x.file, Array.from(x.importers).flatMap(x => [x.id])]))
      //   if (update.file.endsWith('.json')) {
      //   }
      //   // return [update.modules[0].id, update.modules[0].id + postfix]
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dodo-ui/', // match path for madxnl.github.io/dodo-ui/
  plugins: [
    docgen(),
    vue(),
    Inspect(), // only applies in dev mode
  ],
  build: {
    outDir: 'docs',
  },
})
