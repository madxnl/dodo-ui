<template>
  <button class="Button" :class="{
    secondary: props.secondary,
  }" :style="css"><slot></slot></button>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  color?: string
  secondary?: boolean
}>()

const css = computed(() => {
  let s = ''
  if (props.color) s += `--color:${props.color};`
  return s
})
</script>

<style>
.Button {
  border: 0;
  cursor: pointer;
  font: inherit;
  background: var(--color, lightgrey);
  border-radius: 4px;
  padding: 4px 8px;
}
.Button.secondary {
  background: transparent;
  border: 1px solid var(--color, grey);
  color: var(--color, grey);
}
</style>
