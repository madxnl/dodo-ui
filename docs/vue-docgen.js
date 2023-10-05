const { readdirSync, readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const { parseSource } = require('vue-docgen-api')

/* eslint-disable no-console */
const outPath = './generated/components.json'
const folder = '../src/components'

async function main() {
  // Use vue-docgen-api to generate documentation json for vue components
  const filenames = readdirSync(folder)
  const results = []
  for (const filename of filenames) {
    if (filename.endsWith('.vue')) {
      const path = join(folder, filename)
      const source = readFileSync(path, 'utf-8')
      const docApi = await parseSource(source, path)
      console.log('Parsed', path)
      results.push(docApi)
    }
  }
  const content = JSON.stringify(results, null, 2)
  writeFileSync(outPath, content)
  console.log('Wrote', outPath)
  console.log('Done')
}

main()
