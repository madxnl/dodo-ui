<template>
  <DocumentationPage :chapters="chapters" />
  <CrashDialog />
</template>
<script setup lang="ts">
import { DefineComponent } from 'vue'
import { CrashDialog } from '..'
import DocumentationPage from './DocumentationPage.vue'
import Color from './guide/ColorGuide.vue'
import Installation from './guide/Installation.vue'
import Layout from './guide/LayoutGuide.vue'
import Text from './guide/TextGuide.vue'

const componentDocs = import.meta.glob('./content/*Docs.vue', { eager: true })

const componentPages = Object.entries(componentDocs).map(([path, module]) => {
  const component = (module as any).default as DefineComponent
  const name = path.split('/').slice(-1)[0].split('Docs')[0]
  const title = name.replace(/_/g, ' ')
  return { title, component }
})

const chapters = [{
  title: 'Guide',
  pages: [
    { title: 'Installation', component: Installation as DefineComponent },
    { title: 'Layout', component: Layout as DefineComponent },
    { title: 'Text', component: Text as DefineComponent },
    { title: 'Color', component: Color as DefineComponent },
  ],
}, {
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
