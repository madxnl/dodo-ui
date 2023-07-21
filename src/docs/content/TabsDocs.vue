<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description />
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { DocsComponentSection } from '..'
// @ts-ignore
import { DOCGEN as doc } from '../../components/Tabs.vue'

const setup = () => ({})

const template = `
<Tabs :tabs="[
  { name: 'Tab 1', slot: 'tab1' },
  { name: 'Tab 2', slot: 'tab2' },
  { name: 'Tab 3 (disabled) ', disabled: true },
]">
  <template #tab1>
    <p>Tab 1 content</p>
  </template>
  <template #tab2>
    <p>Tab 2 content</p>
  </template>
</Tabs>`
</script>
