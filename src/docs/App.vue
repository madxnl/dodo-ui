
<template>
  <CrashDialog>
    <NavLayout v-if="componentsInfo" :chapters="chapters">
      <Container gap="xxl">
        <template v-for="(chapter, i) in chapters" :key="i">
          <DocsPage v-for="page in chapter.pages" :key="page.href" :title="page.title">
            <component :is="getPageText(page.title)" v-if="getPageText(page.title)" />

            <Example
              v-for="(e, j) in getExamples(page.title)" :key="j"
              :component="e.default" :code="sourceWithinTemplate(e.source)"
            />

            <PropsTable v-if="getPropsData(page.title)" :doc="getPropsData(page.title)!.docs" />
          </DocsPage>
        </template>
      </Container>
    </NavLayout>
  </CrashDialog>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { ComponentDoc } from 'vue-inbrowser-compiler-utils'
import { Container, CrashDialog } from '..'
import { NavLayout } from '../components-wip'
import DocsPage from './DocsPage.vue'
import Example from './Example.vue'
import PropsTable from './PropsTable.vue'

const examples = import.meta.globEager('../examples/*.vue')
const components = import.meta.globEager('../components/*.vue')
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
      { title: 'Dodo UI', href: '#intro' },
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
table {
  border-collapse: collapse;
}
th {
  text-align: left;
  padding: 8px;
}
td {
  border: 1px solid rgba(0,0,0,0.15);
  border-width: 1px 0;
  padding: 8px;
  vertical-align: top;
}
</style>
