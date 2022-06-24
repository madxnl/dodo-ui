
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
            <component :is="info.guide" v-if="info.guide" />
            <p v-else>Todo</p>

            <Example
              v-for="(example, i) in info.examples" :key="i"
              :component="example.component" :source="example.source"
            />

            <PropsTable :doc="info.docs" />
          </DocsPage>
        </Container>
      </div>
    </NavLayout>
  </ErrorBoundary>
</template>
<script setup lang="ts">
import { nextTick, watch, computed } from 'vue'
import { useComponentsInfo } from './chapters'
import { Container, ErrorBoundary, NavLayout } from '..'
import DocsPage from './DocsPage.vue'
import PropsTable from './PropsTable.vue'
import Example from './Example.vue'

const componentsInfo = useComponentsInfo()

const navItems = computed(() => [
  {
    label: 'Installation',
    href: '#Installation',
  },
  {
    label: 'Components',
    href: '',
    items: componentsInfo.value.map(info => ({
      label: info.docs.displayName,
      href: '#' + info.docs.displayName,
    })),
  },
])

watch(() => componentsInfo.value, async () => {
  await nextTick()
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
.App_Example {
  border: 1px solid rgba(0,0,0,0.15);
}
.App_Example {
  border: 1px solid rgba(0,0,0,0.15);
}
.App_ExampleText {
  background: rgba(0,0,0,0.15);
  padding: 16px;
}
pre {
  margin: 0;
  white-space: pre-wrap;
}
</style>
