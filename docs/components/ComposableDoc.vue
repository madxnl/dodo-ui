<script lang="ts" setup>
import { ComposableDocData } from '~/generated'

defineProps<{
  component: ComposableDocData
}>()
</script>
<template>
  <div>{{ component.name }}</div>
</template>
