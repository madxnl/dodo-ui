<template>
  <DocsExample :options="{ setup, template }">
    <template #description>
      Chip components are useful for displaying a list of labels or tags.
    </template>
  </DocsExample>
</template>
<script setup lang="ts">
import { DocsExample } from '..'

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
