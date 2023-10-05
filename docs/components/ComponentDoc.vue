<script lang="ts" setup>
import { ComponentData } from '~/generated'

defineProps<{
  component: ComponentData
}>()
</script>
<template>
  <div>{{ component.displayName }}</div>
</template>
