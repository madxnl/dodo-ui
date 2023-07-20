<template>
  <DocsComponentSection :example="{ template }" :doc="doc">
    <template #description>
      Simple loading indicator.
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { DocsComponentSection } from '..'
// @ts-ignore
import { DOCGEN as doc } from '../../components/Spinner.vue'

const template = `
<Spinner small />
<Spinner color="danger" />
<Spinner large />`
</script>
