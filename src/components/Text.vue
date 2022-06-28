<template>
  <component :is="tag ?? 'span'" class="uiText" :class="classes" :style="css">
    <slot />
  </component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useThemeColor } from '../theme'

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
  tag?: 'h1'|'h2'|'h3'|'strong'|'em'|'p'|'small'|'mark'|'blockquote'|'code'|'label'|'a'
  /** Show ellipsis instead of wrapping if text does not fit on one line
   */
  nowrap?: boolean
  /** Set CSS text-align
   */
  textAlign?: 'left'|'center'|'right'
}>()

const classes = computed(() => {
  const s = ''
  return s
})

const css = computed(() => {
  let s = ''
  if (props.color) s += `color:${useThemeColor(props.color)};`
  return s
})

</script>
<style>
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap'); */
/* @import url('https://font/s.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Code+Pro&display=swap'); */
/*@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); */

.uiText {
  font-family: var(--font-body, sans-serif);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 14px;
}
h1.uiText,
h2.uiText,
h3.uiText {
  font-size: 24px;
  font-family: var(--font-heading, sans-serif);
  line-height: 1.2;
  color: black;
}
h2.uiText {
  font-size: 20px;
  line-height: 22px;
}
h3.uiText {
  font-size: 16px;
  line-height: 22px;
}
small.uiText {
  font-size: 12px;
}
</style>
