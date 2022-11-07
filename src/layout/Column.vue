
<template>
  <div :class="$style.Column" :style="css"><slot /></div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { Spacing, useSpacing, useTheme } from '../theme'

const props = defineProps<{
  /**
   * Add spacing between child elements
   * @example gap="s"
   */
  gap?: Spacing
  /**
   * Amount of padding around the contents. Use array to set padding for each side separately.
   * @example padding="m"
   * @example padding="s 0 s s"
   */
  padding?: Spacing
  /**
   * Grow to take up available space (when nested inside another Row)
   * @example grow
   */
  grow?: boolean
  /**
   * Align content along main direction (horizontal for Row, vertical for Column)
   * @example justify="space-between"
   */
  justify?: 'center'|'end'|'start'|'stretch'|'space-between'|'space-around'|'space-evenly'
  /**
   * Aligns children along cross-axis direction
   * @example align="end"
   */
  align?: 'center'|'end'|'start'|'stretch'
  /**
   * Wrap contents over instead of shrinking
   * @example wrap
   */
  wrap?: boolean

  /** Deprecated */
  pad?: never
  /** Deprecated */
  justifyContent?: never
  /** Deprecated */
  alignItems?: never
  /** Deprecated */
  alignContent?: never
  /** Deprecated */
  overflow?: never
}>()

useTheme()

const css = computed(() => {
  let s = ''
  if (props.gap) s += `gap:${useSpacing(props.gap)};`
  if (props.padding) s += `padding:${useSpacing(props.padding)};`
  if (props.grow) s += 'flex-grow:1;'
  if (props.wrap) s += 'flex-wrap:wrap;'
  if (props.justify) s += `justify-content:${props.justify};`
  if (props.align) s += `align-items:${props.align};`
  // if (props.alignContent) s += `align-content:${props.alignContent};`
  return s
})
</script>

<style module>
.Column {
  display: grid;
  gap: var(--dodo-gap-m);
  align-content: start;
}
</style>
