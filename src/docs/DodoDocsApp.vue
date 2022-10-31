<template>
  <DocumentationPage :chapters="chapters" />
</template>
<script setup lang="ts">
import DocumentationPage from './DocumentationPage.vue'

const componentDocs = import.meta.glob('../**/*Docs.vue', { eager: true })

const componentPages = Object.entries(componentDocs).map(([path, module]) => {
  const component = (module as any).default
  // const docs = (module as any)._docgen
  // const src = (module as any)._src
  const name = path.split('/').slice(-1)[0].split('Docs')[0]
  const title = name
  return { title, component }
})

const chapters = [{
  title: 'Components',
  pages: componentPages,
}]

// function tokenize(pageTitle: string) {
//   return pageTitle.replace(/\W/g, '')
// }

// function getExamples(pageTitle: string) {
//   const key = tokenize(pageTitle)
//   return Object.keys(examples)
//     .filter(s => s.includes(`/${key}Example`))
//     .map(x => examples[x]) as any[]
// }

// function getPropsData(pageTitle: string) {
//   const key = tokenize(pageTitle)
//   return Object.values(components).find((m: any) => m.docs.displayName === key) as any
// }

// function sourceWithinTemplate(code: string) {
//   const txt = /<template>\s*\n(.*)\s*<\/template>/gms.exec(code)![1]
//   const spaces = Math.min(...txt.trimEnd().split('\n').map(s => s.length - s.trimStart().length))
//   return txt.split('\n').map(l => l.slice(spaces)).join('\n')
// }

// function getPageText(pageTitle: string) {
//   const key = tokenize(pageTitle)
//   const file = Object.keys(docs).find(s => s.includes(`/${key}Docs`))
//   return file ? (docs as any)[file].default : null
// }

</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
  display: grid;
}
</style>
