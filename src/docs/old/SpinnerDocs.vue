<template>
  <DocsExample :options="{ template }">
    <template #description>
      Simple loading indicator.
    </template>
  </DocsExample>
</template>
<script setup lang="ts">
import { DocsExample } from '..'

const template = `
<Spinner small />
<Spinner color="danger" />
<Spinner large />`
</script>
