<template>
  <component
    :is="tag ?? 'span'"
    :class="[
      $style.Text,
      nowrap && $style.nowrap,
      emphasis && $style[emphasis],
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
  /** Override opacity to emphasize/de-emphasize text */
  emphasis?: 'high'|'medium'|'low'
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
.Text {
  --text-opacity-medium: .85;
  --text-opacity-low: .65;
  --text-rgb: var(--dodo-rgb-foreground);
  --text-opacity: 1;

  text-overflow: ellipsis;
  cursor: inherit;
  margin: 0;
  font: var(--text-font, var(--dodo-font-base));
  font-size: var(--text-size, var(--dodo-font-size));
  font-weight: var(--text-weight, var(--dodo-font-weight));
  color: rgba(var(--text-rgb), var(--text-opacity));
}
h1.Text, h2.Text, h3.Text, h4.Text, h5.Text, h6.Text {
  --text-weight: var(--dodo-font-weightBold);
  --text-size: var(--dodo-font-size);
  --text-opacity: var(--text-opacity-full);
  --text-rgb: var(--dodo-rgb-foreground);
}
h1.Text {
  --text-size: calc(var(--dodo-font-size) * 2.5);
}
h2.Text {
  --text-size: calc(var(--dodo-font-size) * 2);
}
h3.Text {
  --text-size: calc(var(--dodo-font-size) * 1.5);
}
h4.Text {
  --text-size: calc(var(--dodo-font-size) * 1.25);
}
h5.Text {
  --text-size: calc(var(--dodo-font-size) * 1.15);
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
  --text-size: var(--dodo-font-sizeSmall);
}
strong.Text, .Text strong {
  --text-weight: var(--dodo-font-weightBold);
}
label.Text, .Text label {
  --text-weight: var(--dodo-font-weightSemi);
  --text-size: var(--dodo-font-sizeSmall);
}
p.Text {
  --text-opacity: var(--text-opacity-medium);
}

.nowrap {
  overflow: hidden;
  white-space: nowrap;
}
.Text.high { --text-opacity: var(--text-opacity-high) }
.Text.medium { --text-opacity: var(--text-opacity-medium) }
.Text.low { --text-opacity: var(--text-opacity-low) }
</style>
