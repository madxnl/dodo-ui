<template>
  <span
    :class="[$style.Avatar, round && $style.round]"
    :style="[`--color:${bgcolor}`, image ? `background-image:url(${image})` : '']"
  >
    <template v-if="!image">{{ initials }}</template>
  </span>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { ColorProp } from '..'

const baseColors: ColorProp[] = ['info', 'warning', 'success', 'danger']

const props = defineProps<{
  text: string
  image?: string | null
  round?: boolean
}>()

const initials = computed(() => {
  let result = props.text.trim()
  const initialsRegex = /\b\w|[A-Z]/g
  const match = props.text.match(initialsRegex)
  if (match?.length) result = match.join('')
  return result.slice(0, 2).toUpperCase()
})

const bgcolor = computed(() => {
  const N = baseColors.length
  const hash = hashCode(props.text)
  const color = baseColors[hash % N]
  return `var(--dodo-color-${color}`
})

function hashCode(s: string) {
  let h = 0
  for (let i = 0; i < s.length; ++i) h = 997 * (h % 1e6) + 11 * s.charCodeAt(i)
  return h
}
</script>
<style module>
.Avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--dodo-radius-s);
  width: 28px;
  height: 28px;
  background: var(--color);
  background-position: center;
  background-size: cover;
  color: white;
  font: var(--dodo-font-base);
  /* font-size: calc(var(--dodo-font-size) * 1.1); */
  font-weight: var(--dodo-weight-bold);
}
.round {
  border-radius: 999px;
}
</style>
