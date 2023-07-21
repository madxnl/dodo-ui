<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Visual card component, with optional hover and active styles
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DocsComponentSection } from '..'
// @ts-ignore
import { DOCGEN as doc } from '../../components/Card.vue'

const isActive = ref(true)

const setup = () => ({ isActive })

const template = `
<Card>
  <p>Card</p>
</Card>
<Card hoverable>
  <p>Card hoverable</p>
</Card>
<Card hoverable :active="isActive" @click="isActive=!isActive">
  <p>Card active</p>
</Card>
`
</script>
