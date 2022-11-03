<template>
  <DocsComponentSection :example="{ template }" :doc="doc">
    <template #description>
      Tooltip component
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { DocsComponentSection } from '../docs'
// @ts-ignore
import { DOCGEN as doc } from './Tooltip.vue'

const template = `
<Tooltip text="Information tooltip">
  <Icon name="info" />
</Tooltip>`
</script>
