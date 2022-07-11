
<template>
  <CrashDialog>
    <NavLayout v-if="componentsInfo" :items="navItems">
      <Container style="max-width:1100px">
        <Text h1>DodoUI</Text>
        <Text h2>Versatile components for Vue</Text>
        <Container gap="l">
          <DocsPage title="Installation">
            <Text blockquote>
              <code>npm install -D @madxnl/dodo-ui</code>
            </Text>
            <Text p>Import styling in main.ts:</Text>
            <Text blockquote>
              <code>import '@madxnl/dodo-ui/dist/style.css'</code>
            </Text>
            <Text p>Using a component:</Text>
            <Text blockquote>
              <code>import { Button } from '@madxnl/dodo-ui'<br><br>&lt;Button&gt;...&lt;/Button&gt;</code>
            </Text>
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
            <Text p>Todo</Text>

            <Example
              v-for="(e, i) in info.examples" :key="i"
              :component="e.default" :code="sourceWithinTemplate(e.source)"
            />

            <PropsTable :doc="info.docs" />
          </DocsPage>
        </Container>
      </Container>
    </NavLayout>
  </CrashDialog>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { ComponentDoc } from 'vue-inbrowser-compiler-utils'
import { Container, CrashDialog, NavLayout, Text } from '..'
import DocsPage from './DocsPage.vue'
import Example from './Example.vue'
import PropsTable from './PropsTable.vue'

const examples = import.meta.globEager('../examples/*.vue')
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

function sourceWithinTemplate(code: string) {
  const txt = /<template>\s*\n(.*)\s*<\/template>/gms.exec(code)![1]
  const spaces = Math.min(...txt.trimEnd().split('\n').map(s => s.length - s.trimStart().length))
  return txt.split('\n').map(l => l.slice(spaces)).join('\n')
}

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
</style>
