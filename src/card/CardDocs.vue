<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Visual card component, with optional hover and active styles
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DocsComponentSection } from '../docs'
// @ts-ignore
import { DOCGEN as doc } from './Card.vue'

const isActive = ref(true)

const setup = () => ({ isActive })

const template = `
<Card padding="m">
  <Text>Card</Text>
</Card>
<Card padding="m" hoverable>
  <Text>Card hoverable</Text>
</Card>
<Card padding="m" hoverable :active="isActive" @click="isActive=!isActive">
  <Text>Card active</Text>
</Card>
`
</script>
