<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Chip components are useful for displaying a list of labels or tags.
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { DocsComponentSection } from '../docs'
// @ts-ignore
import { DOCGEN as doc } from './Chip.vue'

function onClose() {}

const setup = () => ({ onClose })

const template = `
<Row gap="1" wrap>
  <Chip>Chip 1</Chip>
  <Chip color="success">Chip 2</Chip>
  <Chip color="info" @click="onClose">Chip 3<template #after><Icon name="close" size="s" /></template></Chip>
</Row>
`
</script>
