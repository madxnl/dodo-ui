<template>
  <p>A tab navigation component with support for scrolling and custom slot-based content.</p>

  <DocsExample :example-src="exampleSrc" :context="{ manyTabs }" />
</template>
<script setup lang="ts">
import { DocsExample } from '@/docs/components'

const exampleSrc = `<Tabs v-slot="{ tab }" :tabs="[{ name: 'Tab 1' }, { name: 'Tab 2' }, { name: 'Tab 3', disabled: true }]">
  <template v-if="tab.name === 'Tab 1'">
    <p>Content for Tab 1</p>
  </template>
  <template v-if="tab.name === 'Tab 2'">
    <p>Content for Tab 2</p>
  </template>
</Tabs>

<Tabs v-slot="{ tab }" :tabs="manyTabs">
  <p>Content for {{ tab.name }} out of many</p>
</Tabs>`

const manyTabs = Array.from({ length: 20 }, (_, i) => ({ name: `Tab ${i + 1}` }))
</script>
