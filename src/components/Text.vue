<template>
  <component :is="tag" class="uiText" :class="classes" :style="css">
    <slot />
  </component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useTextVariant, useThemeColor } from '../theme'

const props = defineProps<{
  /** Change text color
   * @example color="#FFAA00"
   * @example :color="success"
   */
  color?: string
  /** Change text variant
   * @example fontsize="200%"
   * @example fontsize="12px"
   * @example :fontsize="headingSize"
   */
  variant?: string
  /** Show ellipsis instead of wrapping if text does not fit on one line
   */
  nowrap?: boolean
  /** Set text-align property
   */
  textAlign?: 'left'|'center'|'right'
}>()

const css = computed(() => {
  let s = ''
  if (props.color) s += `color:${useThemeColor(props.color)};`
  return s
})

const classes = computed(() => useTextVariant(props.variant ?? 'p'))

const textTags = 'p b strong i em mark small pre h1 h2 h3 h4 h5 h6 blockquote code'.split(' ')

const tag = computed(() => textTags.includes(props.variant ?? 'p') ? props.variant : 'span')
</script>
<style>
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap'); */
/* @import url('https://font/s.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Code+Pro&display=swap'); */
/*@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); */
/*
:root {
  --font-base: 'Inter', sans-serif;
  --font-mono: 'Source Code Pro', monospace;
}
html, body {
  margin: 0;
  height: 100%;
  font-size: 14px;
  line-height: 1.4;
  font-family: var(--font-base);
} */

body {
  font-family: 'Inter', sans-serif;
}

.uiText {
  font-size: 14px;
  font-family: var(--font-body, sans-serif);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
.uiText_h1,
.uiText_h2,
.uiText_h3 {
  font-size: 24px;
  font-family: var(--font-heading, sans-serif);
  line-height: 1.2;
  color: black;
}
.uiText_h2 {
  font-size: 20px;
  line-height: 22px;
}
.uiText_h3 {
  font-size: 16px;
  line-height: 22px;
}
.uiText_small {
  font-size: 12px;
}
</style>
