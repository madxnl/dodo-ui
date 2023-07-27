import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { parseSource } from 'vue-docgen-api'

async function main() {
  const outDir = './src/docgen'
  const folder = './src/components'
  const filenames = readdirSync(folder)
  for (const filename of filenames) {
    if (filename.endsWith('.vue')) {
      const path = join(folder, filename)
      const source = readFileSync(path, 'utf-8')
      const docApi = await parseSource(source, path)
      console.log('Parsed', path, docApi) // eslint-disable-line no-console
      const outPath = join(outDir, filename.replace('.vue', '.json'))
      writeFileSync(outPath, JSON.stringify(docApi, null, 2))
      console.log('Wrote', outPath) // eslint-disable-line no-console
    }
  }
  console.log('Done') // eslint-disable-line no-console
}

main()

// function docgen(): Plugin {
//   return {
//     name: 'vue-docgen-plugin', // required, will show up in warnings and errors
//     async transform(code, id) {
//       if (id.endsWith('.vue')) {
//         const tag = '<script lang="ts">'
//         if (!code.includes(tag)) code += tag + '\n</script>'
//         const docs = await parseSource(code, id)
//         const src = code.split('<script')[0]
//         code = code.replace(tag, tag + `\nexport const SRC = ${JSON.stringify(src)}`)
//         code = code.replace(tag, tag + `\nexport const DOCGEN = ${JSON.stringify(docs)}`)
//         return { code, map: null }
//       }
//     },
//     // handleHotUpdate(update) {
//     //   update.server.ws.send({ type: 'full-reload', path: '*' })
//     // },

//     // async transform(code, id) {
//     //   if (/\.vue$/.test(id)) {
//     //     try {
//     //       const doc = await parseSource(code, id)
//     //     } catch (e) {
//     //       console.log('ERROR:', e, { code })
//     //     }
//     //     // const json = JSON.stringify(doc)
//     //     // const esm = dataToEsm(doc)
//     //     const esm = 'export default {}'
//     //     return { code: esm, map: null }
//     //   }
//     // },
//   }
// }
