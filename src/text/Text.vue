<template>
  <component
    :is="tag ?? 'span'"
    :class="[
      $style.Text,
      nowrap && $style.nowrap,
      emphasis && $style[emphasis],
    ]"
    :style="[
      colorCss && `--Text-rgb:${colorCss};`,
      align && `text-align:${align};`
    ]"
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

const colorCss = computed(() => {
  if (props.color === 'inherit') return 'currentColor'
  if (props.color) return colorPropToRGB(props.color)
  return undefined
})

watchEffect(() => {
  const tagProps = tagNames.filter(s => props[s])
  if (tagProps.length > 1) throw new Error('<Text> should not have more than one tag prop')
})

useTheme()

</script>
<style module>
.Text {
  --dodo-text-opacity-high: 1;
  --dodo-text-opacity-medium: .85;
  --dodo-text-opacity-low: .65;

  text-overflow: ellipsis;
  cursor: inherit;
  margin: 0;
  font: var(--Text-font, var(--dodo-font-base));
  font-size: var(--Text-size, var(--dodo-font-size));
  font-weight: var(--Text-weight, var(--dodo-font-weight));
  color: rgba(var(--Text-rgb, var(--dodo-rgb-foreground)), var(--Text-opacity, var(--dodo-text-opacity-high)));
}
h1.Text, h2.Text, h3.Text, h4.Text, h5.Text, h6.Text {
  --Text-weight: var(--dodo-font-weightBold);
  --Text-size: var(--dodo-font-size);
  --Text-opacity: var(--dodo-text-opacity-full);
  --Text-rgb: var(--dodo-rgb-foreground);
}
h1.Text {
  --Text-size: calc(var(--dodo-font-size) * 2.5);
}
h2.Text {
  --Text-size: calc(var(--dodo-font-size) * 2);
}
h3.Text {
  --Text-size: calc(var(--dodo-font-size) * 1.5);
}
h4.Text {
  --Text-size: calc(var(--dodo-font-size) * 1.25);
}
h5.Text {
  --Text-size: calc(var(--dodo-font-size) * 1.15);
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
  --Text-size: var(--dodo-font-sizeSmall);
}
strong.Text, .Text strong {
  --Text-weight: var(--dodo-font-weightBold);
}
label.Text, .Text label {
  --Text-weight: var(--dodo-font-weightSemi);
  --Text-size: var(--dodo-font-sizeSmall);
}
p.Text {
  --Text-opacity: var(--dodo-text-opacity-medium);
}

.nowrap {
  overflow: hidden;
  white-space: nowrap;
}
.Text.high { --Text-opacity: var(--dodo-text-opacity-high) }
.Text.medium { --Text-opacity: var(--dodo-text-opacity-medium) }
.Text.low { --Text-opacity: var(--dodo-text-opacity-low) }
</style>
