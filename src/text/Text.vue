<template>
  <component
    :is="tag"
    :class="[
      $style.text,
      $style[tag],
      nowrap && $style.nowrap,
      variant && $style[variant],
    ]"
    :style="css"
  >
    <slot />
  </component>
</template>
<script lang="ts" setup>
import { computed, watchEffect } from 'vue'
import { ColorProp, colorPropToRGB, useTheme } from '../theme'

const props = defineProps<{
  /** Change text color */
  color?: ColorProp|'inherit'
  /** Show ellipsis instead of wrapping if text does not fit on one line */
  nowrap?: boolean
  /** Choose optional variant (opacity) */
  variant?: 'muted'
  /** Set text-align */
  align?: 'left'|'center'|'right'

  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  a?: boolean
  p?: boolean
  em?: boolean
  strong?: boolean
  small?: boolean
  code?: boolean
  blockquote?: boolean
  mark?: boolean
  label?: boolean

  emphasis?: never
  muted?: never
}>()

const tagNames = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'a', 'p', 'em', 'strong', 'small',
  'code', 'blockquote', 'mark', 'label',
] as const

const tag = computed(() => tagNames.find(t => props[t]) ?? 'span')

const css = computed(() => {
  let css = ''
  if (props.color === 'inherit') css += '--text-rgb:currentColor;'
  else if (props.color) css += `--text-rgb:${colorPropToRGB(props.color)};`
  if (props.align) css += `text-align:${props.align};`
  return css
})

watchEffect(() => {
  const tagProps = tagNames.filter(s => props[s])
  if (tagProps.length > 1) throw new Error('<Text> should not have more than one tag prop')
})

useTheme()

</script>
<style module>
.text {
  text-overflow: ellipsis;
  cursor: inherit;
  margin: 0;
  font: var(--text-font, var(--dodo-font-base));
  font-size: var(--text-size, var(--dodo-font-size));
  font-weight: var(--text-weight, var(--dodo-weight-body));
  color: rgba(var(--text-rgb, var(--dodo-rgb-foreground)), var(--text-opacity, 1));
}
.p {
}
.h1, .h2, .h3, .h4, .h5, .h6 {
  --text-weight: var(--dodo-weight-bold);
  --text-rgb: var(--dodo-rgb-foreground);
  line-height: 1;
}
.h1 {
  --text-size: calc(var(--dodo-font-size) * 2.5);
}
.h2 {
  --text-size: calc(var(--dodo-font-size) * 2);
}
.h3 {
  --text-size: calc(var(--dodo-font-size) * 1.5);
}
.h4 {
  --text-size: calc(var(--dodo-font-size) * 1.25);
}
.h5 {
  --text-size: calc(var(--dodo-font-size) * 1.15);
}
.code, .text code {
  font-family: monospace;
}
.a, .text a {
  color: rgb(var(--dodo-rgb-info));
}
.blockquote, .text blockquote {
  padding-left: 16px;
  border-left: 2px solid rgba(var(--dodo-rgb-foreground), 0.25);
}
.small, .text small {
  --text-size: var(--dodo-font-small);
  font-size: var(--text-size);
}
.strong, .text strong {
  --text-weight: var(--dodo-weight-bold);
  font-weight: var(--text-weight);
}
.label {
  --text-weight: var(--dodo-weight-bold);
  --text-size: var(--dodo-font-small);
}
.nowrap {
  overflow: hidden;
  white-space: nowrap;
}
.muted {
  --text-opacity: 0.65;
}
</style>
