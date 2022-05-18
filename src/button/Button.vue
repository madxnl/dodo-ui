<template>
  <button class="Button" :style="css"><slot></slot></button>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  color?: string
  secondary?: boolean
  // clickAsync?: () => any
  // loading?: boolean
}>()

const brightness = computed(() => {
  if (!props.color) return true
  const el = document.createElement('span')
  el.style.color = props.color ?? ''
  const rgb = getComputedStyle(el).color
  const [_, r, g, b] = rgb.split(/\D+/).map(Number)
  const brightness = (r + r + b + g + g + g) / 6
  console.log('el', el)
  return getComputedStyle(el)
})

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
  background: var(--color, grey);
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
}
</style>
