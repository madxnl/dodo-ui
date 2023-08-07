<template>
  <DocsExample :options="{ setup, template }">
    <template #description> Visual card component, with optional hover and active styles </template>
  </DocsExample>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DocsExample } from '..'

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
