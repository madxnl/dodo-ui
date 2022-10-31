<template>
  <Text p>
    Simple loading indicator.
  </Text>
  <DocsExample :options="{ template }" />
</template>
<script setup lang="ts">
import { DocsExample, Text } from '..'

const template = `
<Spinner small />
<Spinner color="danger" />
<Spinner large />`
</script>
