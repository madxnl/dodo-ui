<template>
  <DocsExample :options="{ template }" />
</template>
<script setup lang="ts">
import { DocsExample } from '..'

const template = `
<Tooltip text="Information tooltip">
  <Icon name="info" />
</Tooltip>`
</script>
