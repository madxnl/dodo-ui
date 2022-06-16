<template>
  <svg
    class="UiSpinner"
    :style="css"
    :class="size && `UiSpinner_${size}`"
    viewBox="0 0 24 24"
  >
    <path stroke="currentColor" fill="none" d="M 12 1 A 11 11 0 0 1 12 23" stroke-width="2" />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useIconSvgPath, useThemeColor } from "../theme";

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
.UiSpinner {
  width: 24px;
  height: 24px;
  animation: UiSpinner 1s linear infinite;
}
@keyframes UiSpinner {
  from { transform:none }
  to { transform:rotate(360deg)}
}
.UiSpinner_small {
  width: 18px;
  height: 18px;
}
.UiSpinner_large {
  width: 32px;
  height: 32px;
}
</style>
