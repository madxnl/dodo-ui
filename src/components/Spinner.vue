<template>
  <svg
    :class="[
      $style.Spinner,
      small && $style.small,
      large && $style.large,
    ]"
    :style="css"
    viewBox="0 0 18 18"
  >
    <path stroke="currentColor" fill="none" d="M 9 1 A 8 8 0 0 1 17 9" stroke-width="2" />
    <path stroke="currentColor" opacity="0.33" fill="none" d="M 17 9 A 8 8 0 1 1 9 1" stroke-width="2" />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ThemeColor, useTheme, useThemeColor } from '../theme'

useTheme()

const props = withDefaults(defineProps<{
  /** Override default spinner color, or inherit text color
   */
  color?: 'inherit'|ThemeColor
  small?: boolean
  large?: boolean
}>(), {
  color: undefined,
})

const css = computed(() => {
  let s = ''
  if (props.color === 'inherit') s += 'color:inherit;'
  else if (props.color) s += `color:${useThemeColor(props.color)};`
  return s
})

</script>
<style module>
.Spinner {
  width: 18px;
  height: 18px;
  animation: Spinner 1s linear infinite;
  color: var(--color-info);
}
.small {
  width: 14px;
  height: 14px;
}
.large {
  width: 24px;
  height: 24px;
}
@keyframes Spinner {
  from { transform:none }
  to { transform:rotate(360deg)}
}
</style>
