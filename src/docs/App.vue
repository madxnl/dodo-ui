
<template>
  <CrashDialog>
    <NavLayout v-if="componentsInfo" :chapters="chapters">
      <Container gap="xl">
        <template v-for="(chapter, i) in chapters" :key="i">
          <Container
            v-for="page in chapter.pages" :id="page.title"
            :key="page.href" pad="l"
            gap="l" class="App_chapter"
          >
            <Text h1>{{ page.title }}</Text>

            <Container gap="s">
              <component :is="getPageText(page.title)" v-if="getPageText(page.title)" />
            </Container>

            <Example
              v-for="(e, j) in getExamples(page.title)" :key="j"
              :component="e.default" :code="sourceWithinTemplate(e.source)"
            />

            <PropsTable v-if="getPropsData(page.title)" :doc="getPropsData(page.title)!.docs" />
          </Container>
        </template>
      </Container>
    </NavLayout>
  </CrashDialog>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { ComponentDoc } from 'vue-inbrowser-compiler-utils'
import { Container, CrashDialog, Text } from '..'
import { NavLayout } from '../components-wip'
import Example from './Example.vue'
import PropsTable from './PropsTable.vue'

const components = import.meta.globEager('../components/*.vue')
const examples = import.meta.globEager('./content/*Example*.vue')
const docs = import.meta.globEager('./content/*Docs.vue')

const componentsInfo = Object.values(components).map(({ docs, source }) => ({
  docs: docs as ComponentDoc,
  source: source as string,
  examples: Object.values(examples)
    .filter(e => e.docs.displayName.startsWith(docs.displayName + 'Example')),
}))

const chapters = computed(() => [
  {
    pages: [
      { title: 'Dodo UI', href: '#Dodo UI' },
      { title: 'Installation', href: '#Installation' },
    ],
  },
  {
    pages: Object.values(components).map(({ docs }) => ({
      title: docs.displayName,
      href: '#' + docs.displayName,
    })),
  },
])

onMounted(() => {
  const hash = location.hash
  location.hash = ''
  location.hash = hash
})

function tokenize(pageTitle: string) {
  return pageTitle.replace(/\W/g, '')
}

function getExamples(pageTitle: string) {
  const key = tokenize(pageTitle)
  return Object.keys(examples)
    .filter(s => s.includes(`/${key}Example`))
    .map(x => examples[x])
}

function getPropsData(pageTitle: string) {
  const key = tokenize(pageTitle)
  return Object.values(components).find(m => m.docs.displayName === key)
}

function sourceWithinTemplate(code: string) {
  const txt = /<template>\s*\n(.*)\s*<\/template>/gms.exec(code)![1]
  const spaces = Math.min(...txt.trimEnd().split('\n').map(s => s.length - s.trimStart().length))
  return txt.split('\n').map(l => l.slice(spaces)).join('\n')
}

function getPageText(pageTitle: string) {
  const key = tokenize(pageTitle)
  const file = Object.keys(docs).find(s => s.includes(`/${key}Docs`))
  return file ? docs[file].default : null
}

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
