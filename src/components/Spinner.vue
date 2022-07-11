<template>
  <svg
    class="uiSpinner"
    :class="classes"
    :style="css"
    viewBox="0 0 18 18"
  >
    <path stroke="currentColor" fill="none" d="M 9 1 A 8 8 0 0 1 9 17" stroke-width="2" />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useThemeColor, useThemeCssVars } from '../theme'

useThemeCssVars()

const props = withDefaults(defineProps<{
  /** Change spinner color
   */
  color?: string
  /** Change spinner size
   */
  small?: boolean
}>(), {
  color: undefined,
})

const css = computed(() => {
  let s = ''
  if (props.color) s += `color:${useThemeColor(props.color)};`
  return s
})

const classes = computed(() => `${props.small ? 'uiSpinner_small' : ''}`)
</script>
<style lang="css">
.uiSpinner {
  width: 18px;
  height: 18px;
  animation: uiSpinner 1s linear infinite;
}
.uiSpinner_small {
  width: 14px;
  height: 14px;
}
@keyframes uiSpinner {
  from { transform:none }
  to { transform:rotate(360deg)}
}
</style>
