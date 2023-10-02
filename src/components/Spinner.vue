<template>
  <div :class="[$style.Spinner, small && $style.small, large && $style.large]">
    <svg :style="css" viewBox="0 0 18 18">
      <path stroke="currentColor" fill="none" d="M 9 1 A 8 8 0 0 1 17 9" stroke-width="2" />
      <path stroke="currentColor" opacity="0.33" fill="none" d="M 17 9 A 8 8 0 1 1 9 1" stroke-width="2" />
    </svg>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ColorProp, useTheme } from '..'

const theme = useTheme()

const props = withDefaults(
  defineProps<{
    /** Override default spinner color, or inherit text color
     */
    color?: 'inherit' | ColorProp
    small?: boolean
    large?: boolean
  }>(),
  {
    color: undefined,
  },
)

const css = computed(() => {
  let s = ''
  if (props.color === 'inherit') s += 'color:inherit;'
  else if (props.color) s += `color:${theme.colorCss(props.color)};`
  return s
})
</script>
<style module>
.Spinner {
  overflow: hidden;
  font-size: 18px;
  display: grid;
  justify-content: center;
}
.Spinner svg {
  width: 1em;
  height: 1em;
  animation: Spinner 1s linear infinite;
  color: var(--dodo-color-info);
  display: block;
}
.small {
  font-size: 14px;
}
.large {
  font-size: 24px;
}
@keyframes Spinner {
  from {
    transform: none;
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
