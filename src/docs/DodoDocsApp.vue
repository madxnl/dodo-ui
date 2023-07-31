<template>
  <DocumentationPage :chapters="chapters" />
  <CrashDialog />
</template>
<script setup lang="ts">
import { DefineComponent } from 'vue'
import { CrashDialog, useBaseFont } from '..'
import DocumentationPage from './DocumentationPage.vue'
import Color from './guide/ColorGuide.vue'
import Installation from './guide/Installation.vue'
import Text from './guide/TextGuide.vue'

const componentDocs = import.meta.glob('./components/*.vue', { eager: true })

const basename = (path: string) => path.split('/').slice(-1)[0].split('.')[0]
const componentPages = Object.entries(componentDocs)
  .map(([path, module]) => {
    const title = basename(path)
    // if (excludeRe.test(title)) return null
    const example = (module as any).default as DefineComponent
    return { title, example }
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
