<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>A tab navigation component with support for scrolling and custom slot-based content.</p>
    </template>
    <template #example>
      <Tabs v-slot="{ tab }" :tabs="[{ name: 'Tab 1' }, { name: 'Tab 2' }, { name: 'Tab 3', disabled: true }]">
        <template v-if="tab.name === 'Tab 1'">
          <p>Content for Tab 1</p>
        </template>
        <template v-if="tab.name === 'Tab 2'">
          <p>Content for Tab 2</p>
        </template>
      </Tabs>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { Tabs } from '@/components'
import { ComponentDocsSection } from '../components'

const exampleSrc = `<Tabs :tabs="[{ name: 'Tab 1' }, { name: 'Tab 2' }, { name: 'Tab 3', disabled: true }]" v-slot="{ tab }">
  <template v-if="tab.name === 'Tab 1'">
    <p>Content for Tab 1</p>
  </template>
  <template v-if="tab.name === 'Tab 2'">
    <p>Content for Tab 2</p>
  </template>
</Tabs>`

const props = [
  {
    code: 'tabs: Tab[]',
    description: 'An array of tab objects'
  },
  {
    code: 'tabIndex?: number',
    description: 'The index of the currently active tab'
  }
]
</script>
