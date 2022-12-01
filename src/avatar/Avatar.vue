<template>
  <span
    :class="[
      $style.Avatar,
      round && $style.round
    ]"
    :style="[
      `--color:${bgcolor}`,
      image ? `background-image:url(${image})` : '',
    ]"
  >
    <template v-if="!image">{{ initials }}</template>
  </span>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ColorProp, useColorProp, useTheme } from '../theme'

const baseColors: ColorProp[] = [
  'info',
  'warn',
  'success',
  'danger',
]

const props = defineProps<{
  text: string
  image?: string|null
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
  return useColorProp(color)
})

function hashCode(s: string) {
  let h = 0
  for (let i = 0; i < s.length; ++i) h = 997 * (h % 1e6) + 11 * s.charCodeAt(i)
  return h
}

useTheme()

</script>
<style module>
.Avatar {
  display: inline-grid;
  vertical-align: middle;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  background: var(--color);
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font: var(--dodo-font-base);
  font-size: calc(var(--dodo-font-size) * 1.1);
  font-weight: var(--dodo-weight-bold);
  line-height: 32px;
}
.round {
  border-radius: 999px;
}
</style>
