<template>
  <DocumentationPage :chapters="chapters" />
  <CrashDialog />
</template>
<script setup lang="ts">
import { DefineComponent } from 'vue'
import type { ComponentDoc } from 'vue-docgen-api'
import { CrashDialog, useBaseFont } from '..'
import DocumentationPage from './DocumentationPage.vue'
import Color from './guide/ColorGuide.vue'
import Installation from './guide/Installation.vue'
import Text from './guide/TextGuide.vue'

const examples = import.meta.glob('./content/*Docs.vue', { eager: true })
const componentDocgens = import.meta.glob('../docgen/*.json', { eager: true })

const excludeRe = /NavBarNew|NavItem/

const basename = (path: string) => path.split('/').slice(-1)[0].split('.')[0]
const componentPages = Object.entries(componentDocgens)
  .map(([_, module]) => {
    const api = module as ComponentDoc
    const title = api.displayName
    if (excludeRe.test(title)) return null
    const entry = Object.entries(examples).find((p) => basename(p[0]) === title + 'Docs')
    const example = entry ? ((entry[1] as any).default as DefineComponent) : undefined
    return { title, example, api }
  })
  .filter((x) => x)
  .map((x) => x!)

const chapters = [
  {
    title: 'Guide',
    pages: [
      { title: 'Installation', example: Installation as DefineComponent },
      { title: 'Text', example: Text as DefineComponent },
      { title: 'Color', example: Color as DefineComponent },
    ],
  },
  {
    title: 'Components',
    pages: componentPages,
  },
]

const font = useBaseFont()

document.body.classList.add(font.fontClass)

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
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
  display: grid;
}
</style>
