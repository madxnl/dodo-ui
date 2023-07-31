// import { readFileSync, readdirSync, writeFileSync } from 'fs'
// import { join } from 'path'
// import { parseSource } from 'vue-docgen-api'

// async function main() {
//   const outDir = './src/docgen'
//   const folder = './src/components'
//   const filenames = readdirSync(folder)
//   for (const filename of filenames) {
//     if (filename.endsWith('.vue')) {
//       const path = join(folder, filename)
//       const source = readFileSync(path, 'utf-8')
//       const docApi = await parseSource(source, path)
//       console.log('Parsed', path, docApi) // eslint-disable-line no-console
//       const outPath = join(outDir, filename.replace('.vue', '.json'))
//       writeFileSync(outPath, JSON.stringify(docApi, null, 2))
//       console.log('Wrote', outPath) // eslint-disable-line no-console
//     }
//   }
//   console.log('Done') // eslint-disable-line no-console
// }

import 'dotenv/config.js'
import { writeFileSync } from 'fs'
import { access, readFile } from 'fs/promises'
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai'

// const outDir = './src/docs/components'
const examples = [
  // ['./src/components/Avatar.vue', './src/docs/components/Avatar.vue'],
  ['./src/components/Card.vue', './src/docs/components/Card.vue'],
  // ['./src/components/Chip.vue', './src/docs/components/Chip.vue'],
  ['./src/components/Label.vue', './src/docs/components/Label.vue'],
  ['./src/components/Row.vue', './src/docs/components/Row.vue'],
]
const updatePaths = [
  // ['./src/components/Avatar.vue', './src/docs/components/Avatar.vue'],
  // ['./src/components/Card.vue', './src/docs/components/Card.vue'],
  // ['./src/components/Chip.vue', './src/docs/components/Chip.vue'],
  // ['./src/components/Label.vue', './src/docs/components/Label.vue'],
  // ['./src/components/Button.vue', './src/docs/components/Button.vue'],
  // ['./src/components/Column.vue', './src/docs/components/Column.vue'],
  // ['./src/components/Icon.vue', './src/docs/components/Icon.vue'],
  // ['./src/components/Tabs.vue', './src/docs/components/Tabs.vue'],
  ['./src/components/Select.vue', './src/docs/components/Select.vue'],
]

;(async () => {
  const force = true
  // const indexLines: string[] = []
  // let progress = 0
  await Promise.all(
    updatePaths.map(async ([filepath, outFile]) => {
      console.log(`Processing ${filepath}`)
      // const componentName = basename(filepath).replace('.vue', '')
      const inputText = await read(filepath)
      const entryPrompt = inputText

      // const messageText = basePrompt + '\n' + entryPrompt
      // const hash = createHash('md5')
      // hash.update(messageText)
      // const hashCode = hash.digest('hex').slice(0, 8)
      // const outFilename = `${componentName}.gen.vue`
      // const outFile = `${outDir}/${outFilename}`
      if (!force) {
        const fileDoesntExist = await access(outFile).catch(() => true)
        if (!fileDoesntExist) {
          console.log('File already exists')
          return
        }
      }

      const answer = await getAnswer(entryPrompt)
      console.log(answer.slice(0, 200))

      const content = answer //.split('```')[1]
      writeFileSync(outFile, content)
      console.log(`Written ${outFile}`)

      // indexLines.push(`export { default as ${componentName} } from './${outFilename}'\n`)
    })
  )

  // const indexText = indexLines.sort().join('')
  // const indexOutFile = './src/docs/components/index.gen.ts'
  // await writeFile(indexOutFile, indexText)
  console.log('Done.')
})()

async function getAnswer(question: string) {
  // const promptDir = './src/docs/prompts/'
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('OPENAI_API_KEY not set')
  const configuration = new Configuration({ apiKey })
  const openai = new OpenAIApi(configuration)
  const messages: ChatCompletionRequestMessage[] = []
  for (const [filepath, outFile] of examples) {
    messages.push({ role: 'user' as const, content: await read(filepath) })
    messages.push({ role: 'assistant' as const, content: await read(outFile) })
  }
  messages.push({ role: 'user', content: question })
  try {
    const chatCompletion = await openai.createChatCompletion({ model: 'gpt-3.5-turbo-16k', messages, temperature: 0 })
    const message = chatCompletion.data.choices[0].message!.content!
    console.log(chatCompletion.data.choices)
    return message
  } catch (e) {
    console.log('Err', (e as any).response.data)
    throw new Error('Failed to get answer')
  }
}

async function read(path: string) {
  return readFile(path, 'utf-8')
}

// async function updateDocsIndexFile(opt: {
//   filepaths: string[]
//   outFile: string
// }) {
//   const docsFile = './src/docs/docs.gen.ts'
//   const re = new RegExp(`.*{ ?default as ${opt.componentName} ?}.*\n`)
//   const exportLine = `export { default as ${opt.componentName} } from './${opt.componentName}.${opt.hashCode}.md'\n`
//   const fileDoesntExist = await access(outFile).catch(() => true)
//   const docs = await readFile(docsFile, 'utf-8')
//   const match = docs.match(re)
//   if (match) {
//     const newDocs = docs.replace(re, exportLine)
//     await writeFile(docsFile, newDocs)
//   } else {
//     const newDocs =
//   }
// }

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
