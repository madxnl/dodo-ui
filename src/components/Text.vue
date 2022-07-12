<template>
  <component :is="tag ?? 'span'" class="uiText" :class="classes" :style="css">
    <slot />
  </component>
</template>
<script lang="ts" setup>
import { computed, watchEffect } from 'vue'
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

const classes = computed(() => {
  let s = ''
  if (props.nowrap) s += ' uiText_nowrap'
  return s
})

const css = computed(() => {
  let s = ''
  if (props.color) s += `color:${useThemeColor(props.color)};`
  if (props.align) s += `text-align:${props.align};`
  return s
})

const theme = useTheme()

watchEffect(() => {
  const id = 'ui-font-import'
  const href = theme.font.externalCss
  if (!href) return
  let link = document.getElementById(id)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('id', id)
    document.head.appendChild(link)
  }
  if (link.getAttribute('href') !== href) {
    link.setAttribute('href', href)
  }
})

</script>
<style>
.uiText {
  font: var(--ui-font);
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
  margin: 0;
}
.uiText_nowrap {
  white-space: nowrap;
}
h1.uiText,
h2.uiText,
h3.uiText {
  font-weight: bold;
  color: black;
}
h1.uiText {
  font-size: calc(var(--ui-font-size) + 8px);
}
h2.uiText {
  font-size: calc(var(--ui-font-size) + 4px);
}
h3.uiText {
  font-size: calc(var(--ui-font-size) + 2px);
}
small.uiText, .uiText small {
  font-size: calc(var(--ui-font-size) - 2px);
}
code.uiText, .uiText code {
  font-family: monospace;
}
a.uiText, .uiText a {
  color: var(--color-info);
}
blockquote.uiText, .uiText blockquote {
  padding-left: 16px;
  border-left: 2px solid rgba(var(--rgb-foreground), 0.25);
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
