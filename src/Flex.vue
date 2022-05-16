
<template>
  <div :style="css"><slot></slot></div>
</template>
<script lang="ts" setup>
  import { computed } from "vue";

const props = defineProps<{
  gap: number,
}>()

const css = computed(() => {
  return `gap:${props.gap}`
})
</script>
