<template>
  <Docs.DocsExample :options="{ template }" />
</template>
<script setup lang="ts">
import { } from '..'
import * as Docs from '../docs'

const template = `
<Tooltip text="Information tooltip">
  <Icon name="info" />
</Tooltip>`
</script>
