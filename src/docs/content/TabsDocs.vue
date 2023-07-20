<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description />
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { DocsComponentSection } from '..'
// @ts-ignore
import { DOCGEN as doc } from '../../components/tabs/Tabs.vue'

const setup = () => ({})

const template = `
<Tabs :tabs="[
  { name: 'Tab 1', slot: 'tab1' },
  { name: 'Tab 2', slot: 'tab2' },
  { name: 'Tab 3 (disabled) ', disabled: true },
]">
  <template #tab1>
    <Text>Tab 1 content</Text>
  </template>
  <template #tab2>
    <Text>Tab 2 content</Text>
  </template>
</Tabs>`
</script>
