<template>
  <DocumentationPage :chapters="chapters.slice()" />
  <CrashDialog />
</template>
<script setup lang="ts">
import type { DefineComponent } from 'vue'
import { CrashDialog } from '..'
import DocumentationPage from './DocumentationPage.vue'
import Color from './content/ColorGuide.vue'
import Installation from './content/InstallationGuide.vue'
import Text from './content/TextGuide.vue'

const basename = (path: string) => path.split('/').slice(-1)[0].split('.')[0]

const componentDocs = import.meta.glob('./content/*Docs.vue', { eager: true })
const componentPages = Object.entries(componentDocs).map(([path, module]) => {
  const title = basename(path).replace('Docs', '')
  const example = (module as any).default as DefineComponent
  return { title, example }
})

const composableDocs = import.meta.glob('./content/use*.docs.vue', { eager: true })
const composablePages = Object.entries(composableDocs).map(([path, module]) => {
  const title = basename(path).replace('Docs', '')
  const example = (module as any).default as DefineComponent
  return { title, example }
})

const chapters = [
  {
    title: 'Guide',
    pages: [
      { title: 'Installation', example: Installation as DefineComponent },
      { title: 'Text', example: Text as DefineComponent },
      { title: 'Color', example: Color as DefineComponent }
    ]
  },
  {
    title: 'Components',
    pages: componentPages
  },
  {
    title: 'Composables',
    pages: composablePages
  }
]

// const font = useBaseFont()

// document.body.classList.add(font.fontClass)
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
../../dist/types
