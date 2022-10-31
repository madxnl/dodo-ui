
<template>
  <div :class="$style.Row" :style="css"><slot /></div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { Spacing, useSpacing, useTheme } from '../theme'

const props = defineProps<{
  /**
   * Add spacing between child elements
   * @example
    * gap="s"
   */
  gap?: Spacing
  /**
   * Amount of padding around the contents. Use array to set padding for each side separately.
   * @example pad="m"
   * @example pad="s 0 s s"
   */
  pad?: Spacing
  /**
   * Toggle column orientation instead of row
   * @example column
   */
  column?: boolean
  /**
   * Grow to take up available space (when nested inside another Row)
   * @example grow
   */
  grow?: boolean
  /**
   * Justify contents
   * @example justify="space-between"
   */
  justifyContent?: 'center'|'end'|'start'|'stretch'|'space-between'|'space-around'|'space-evenly'
  /**
   * Align items
   * @example align="end"
   */
  alignItems?: 'center'|'end'|'start'|'stretch'
  /**
   * Align contents
   * @example align="end"
   */
  alignContent?: 'center'|'end'|'start'|'stretch'|'space-between'|'space-around'|'space-evenly'
  /**
   * Wrap contents over multiple rows instead of shrinking
   * @example wrap
   */
  wrap?: boolean
  justify?: never
  align?: never
}>()

useTheme()

const css = computed(() => {
  let s = ''
  if (props.gap) s += `gap:${useSpacing(props.gap)};`
  if (props.pad) s += `padding:${useSpacing(props.pad)};`
  if (props.grow) s += 'flex-grow:1;'
  if (props.wrap) s += 'flex-wrap:wrap;'
  if (props.justifyContent) s += `justify-content:${props.justifyContent};`
  if (props.alignItems) s += `align-items:${props.alignItems};`
  if (props.alignContent) s += `align-content:${props.alignContent};`
  return s
})
</script>

<style module>
.Row {
  display: flex;
  align-items: center;
  gap: var(--dodo-gap-s);
  min-width: 0;
}
</style>
