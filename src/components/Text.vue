<template>
  <component
    :is="tag ?? 'span'"
    :class="[
      $style.Text,
      nowrap && $style.nowrap,
    ]"
    :style="css"
  >
    <slot />
  </component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ThemeColor, useTheme, useThemeColor } from '../theme'

const props = defineProps<{
  /** Change text color
   * @example :color="success"
   */
  color?: ThemeColor
  /** Change text variant
   * @example fontsize="200%"
   * @example fontsize="12px"
   * @example :fontsize="headingSize"
   */
  // tag?: 'h1'|'h2'|'h3'|'strong'|'em'|'p'|'small'|'mark'|'blockquote'|'code'|'label'|'a'
  /** Show ellipsis instead of wrapping if text does not fit on one line
   */
  nowrap?: boolean
  /** Set CSS text-align
   */
  align?: 'left'|'center'|'right'

  h1?: boolean
  h2?: boolean
  h3?: boolean
  a?: boolean
  p?: boolean
  em?: boolean
  strong?: boolean
  small?: boolean
  code?: boolean
  // TODO:
  // mark?: boolean
  blockquote?: boolean
  // label?: boolean
}>()

const tags = ['h1', 'h2', 'h3', 'strong', 'em', 'p', 'small', 'code', 'a', 'blockquote'] as const

const tag = computed(() => {
  return tags.find(t => props[t]) ?? 'span'
})

const css = computed(() => {
  let s = ''
  if (props.color) s += `color:${useThemeColor(props.color)};`
  if (props.align) s += `text-align:${props.align};`
  return s
})

useTheme()

</script>
<style module>
.Text {
  text-overflow: ellipsis;
  cursor: inherit;
  margin: 0;
  font: var(--ui-font);
}
.Text .Text {
  font: inherit;
}
.nowrap {
  overflow: hidden;
  white-space: nowrap;
}
p.Text, .Text p {
  color: var(--color-foreground);
}
h1.Text,
h2.Text,
h3.Text {
  font-weight: 600;
  color: var(--color-foreground);
}
h1.Text {
  font-size: calc(var(--ui-font-size) + 30px);
}
h2.Text {
  font-size: calc(var(--ui-font-size) + 12px);
}
h3.Text {
  font-size: calc(var(--ui-font-size) + 6px);
}
code.Text, .Text code {
  font-family: monospace;
}
a.Text, .Text a {
  color: var(--color-info);
}
blockquote.Text, .Text blockquote {
  padding-left: 16px;
  border-left: 2px solid rgba(var(--rgb-foreground), 0.25);
}
small.Text, .Text small {
  font-size: calc(var(--ui-font-size) - 2px);
}
strong.Text, .Text strong {
  font-weight: bold;
}
/* code {
  font-family: var(--font-mono, monospace);
  white-space: pre-wrap;
}
pre {
  margin: 0;
  white-space: pre-wrap;
} */
</style>
