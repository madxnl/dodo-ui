<template>
  <ComponentDocsSection :example-src="exampleSrc">
    <template #description>
      <p>A basic input field component.</p>
    </template>
    <template #example>
      <Input placeholder="Enter your name" />
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { Input } from '@/components'
import { ComponentDocsSection } from '@/docs/components'

const exampleSrc = `<Input placeholder="Enter your name" />`
</script>
