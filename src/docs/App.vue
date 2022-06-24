
<template>
  <ErrorBoundary>
    <NavLayout v-if="componentsInfo" :items="navItems">
      <div style="max-width:1100px">
        <h1>DodoUI</h1>
        <h2>Versatile components for Vue</h2>
        <Container gap="l">
          <DocsPage title="Installation">
            <blockquote>
              <code>npm install -D @madxnl/dodo-ui</code>
            </blockquote>
            <p>Import styling in main.ts:</p>
            <blockquote>
              <code>import '@madxnl/dodo-ui/dist/style.css'</code>
            </blockquote>
            <p>Using a component:</p>
            <blockquote>
              <code><pre>import { Button } from '@madxnl/dodo-ui'<br><br>&lt;Button&gt;...&lt;/Button&gt;</pre></code>
            </blockquote>
          </DocsPage>

          <DocsPage title="Components">
            Todo
          </DocsPage>

          <DocsPage
            v-for="info in componentsInfo"
            :key="info.docs.displayName"
            :title="info.docs.displayName"
          >
            <!-- <component :is="info.guide" v-if="info.guide" /> -->
            <!-- <p v-else>Todo</p> -->
            <p>Todo</p>

            <Example
              v-for="(e, i) in info.examples" :key="i"
              :component="e.default" :code="e.source"
            />

            <PropsTable :doc="info.docs" />
          </DocsPage>
        </Container>
      </div>
    </NavLayout>
  </ErrorBoundary>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { Container, ErrorBoundary, NavLayout } from '..'
import DocsPage from './DocsPage.vue'
import PropsTable from './PropsTable.vue'
import Example from './Example.vue'
import { ComponentDoc } from 'vue-inbrowser-compiler-utils'

const examples = import.meta.globEager('./*Example.vue')
const modules = import.meta.globEager('../components/*.vue')

const componentsInfo = Object.values(modules).map(({ docs, source }) => ({
  docs: docs as ComponentDoc,
  source: source as string,
  examples: Object.values(examples)
    .filter(e => e.docs.displayName.startsWith(docs.displayName + 'Example')),
}))

const navItems = computed(() => [
  {
    label: 'Installation',
    href: '#Installation',
  },
  {
    label: 'Components',
    href: '#Components',
    items: Object.values(modules).map(({ docs }) => ({
      label: docs.displayName,
      href: '#' + docs.displayName,
    })),
  },
])

onMounted(() => {
  const hash = location.hash
  location.hash = ''
  location.hash = hash
})

</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: auto;
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
code {
  font-family: var(--font-mono, monospace);
  white-space: pre-wrap;
}
pre {
  margin: 0;
  white-space: pre-wrap;
}
</style>
