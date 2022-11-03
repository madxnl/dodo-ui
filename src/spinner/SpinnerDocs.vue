<template>
  <DocsComponentSection :example="{ template }" :doc="doc">
    <template #description>
      Simple loading indicator.
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { DocsComponentSection } from '../docs'
// @ts-ignore
import { DOCGEN as doc } from './Spinner.vue'

const template = `
<Spinner small />
<Spinner color="danger" />
<Spinner large />`
</script>
