<template>
  <Text p>
    Simple loading indicator.
  </Text>
  <Docs.DocsExample :options="{ template }" />
</template>
<script setup lang="ts">
import { Text } from '..'
import * as Docs from '../docs'

const template = `
<Spinner small />
<Spinner color="danger" />
<Spinner large />`
</script>
