<template>
  <span
    :class="[
      $style.Avatar,
      round && $style.round
    ]"
    :style="[
      `--color:rgb(${bgcolor})`,
      image ? `background-image:url(${image})` : '',
    ]"
  >
    {{ initials }}
  </span>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { mixHexColors, ThemeColor, useTheme } from '../theme'

const baseColors: ThemeColor[] = [
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
  const initialsRegex = /(?<!\w)\w|(?<=[a-z])[A-Z]/g
  const match = props.text.match(initialsRegex)
  if (match?.length) result = match.join('')
  return result.slice(0, 2).toUpperCase()
})

const bgcolor = computed(() => {
  const colors: number[][] = []
  for (const color1 of baseColors) {
    for (const color2 of baseColors) {
      if (color1 === color2) continue
      for (const pct of [0, 0.5]) {
        colors.push(mixHexColors(color1, color2, pct))
      }
    }
  }
  const hash = hashCode(props.text)
  return colors[hash % colors.length]
})

function hashCode(s: string) {
  let h = 0
  for (let i = 0; i < s.length; ++i) h = 23 * (h % 1e6) + 193 * s.charCodeAt(i)
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
  font: var(--ui-font);
  font-size: calc(var(--ui-font-size) + 2px);
  font-weight: bold;
}
.round {
  border-radius: 999px;
}
</style>
