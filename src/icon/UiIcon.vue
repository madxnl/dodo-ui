<template>
  <svg
    class="UiIcon"
    :style="css"
    :class="size && `UiIcon_${size}`"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" :d="path" />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useIconSvgPath, useThemeColor } from '../theme'

const props = defineProps<{
  /** The icon name
   * @example icon="plus"
   */
  name: string
  /** Change icon color
   * @example color="success"
   */
  color?: string
  /** Change icon size
   * @example size="small"
   */
  size?: 'default'|'small'|'large'
}>()

const path = computed(() => {
  return useIconSvgPath(props.name)
})

const css = computed(() => {
  let s = ''
  if (props.color) s += 'color: ' + useThemeColor(props.color)
  return s
})
</script>

<style lang="css">
.UiIcon {
  width: 1.25em;
  height: 1.25em;
  vertical-align: middle;
}
.UiIcon_small {
  width: 1em;
  height: 1em;
}
.UiIcon_large {
  width: 1.75em;
  height: 1.75em;
}
</style>
