<script lang="ts" setup>
import { ComponentDocData } from '~/generated'

defineProps<{
  component: ComponentDocData
}>()
</script>
<template>
  <div>{{ component.displayName }}</div>
</template>
