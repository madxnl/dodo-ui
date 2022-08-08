<template>
  <component
    :is="tag ?? 'span'"
    :class="[
      $style.Text,
      nowrap && $style.nowrap,
      muted && $style.muted,
    ]"
    :style="[
      color && `--Text-rgb:${colorPropToRGB(color)};`,
      align && `text-align:${align};`
    ]"
  >
    <slot class="foo" />
  </component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ColorProp, colorPropToRGB, useTheme } from '../theme'

const props = defineProps<{
  /** Change text color */
  color?: ColorProp
  /** Show ellipsis instead of wrapping if text does not fit on one line */
  nowrap?: boolean
  /** De-emphasized text */
  muted?: boolean
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
}>()

const tagNames = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'a', 'p', 'em', 'strong', 'small',
  'code', 'blockquote', 'mark', 'label',
] as const

const tag = computed(() => tagNames.find(t => props[t]) ?? 'span')

useTheme()

</script>
<style module>
.Text {
  text-overflow: ellipsis;
  cursor: inherit;
  margin: 0;
  font: var(--Text-font, var(--dodo-font));
  font-size: var(--Text-size, var(--dodo-font-size));
  font-weight: var(--Text-weight, normal);
  color: rgba(var(--Text-rgb, var(--dodo-rgb-foreground)), var(--Text-alpha, 1));
}
.nowrap {
  overflow: hidden;
  white-space: nowrap;
}
.muted {
  --Text-alpha: .6;
}
h1.Text, h2.Text, h3.Text, h4.Text, h5.Text, h6.Text {
  --Text-weight: 600;
  --Text-size: calc(var(--dodo-font-size));
}
h1.Text {
  --Text-size: calc(var(--dodo-font-size) + 18px);
}
h2.Text {
  --Text-size: calc(var(--dodo-font-size) + 12px);
}
h3.Text {
  --Text-size: calc(var(--dodo-font-size) + 6px);
}
code.Text, .Text code {
  font-family: monospace;
}
a.Text, .Text a {
  color: var(--dodo-color-info);
}
blockquote.Text, .Text blockquote {
  padding-left: 16px;
  border-left: 2px solid rgba(var(--dodo-rgb-foreground), 0.25);
}
small.Text, .Text small {
  --Text-size: calc(var(--dodo-font-size) - 2px);
}
strong.Text, .Text strong {
  --Text-weight: bold;
}
label.Text, .Text label {
  --Text-weight: 500;
}
</style>
