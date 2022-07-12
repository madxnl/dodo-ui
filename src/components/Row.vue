
<template>
  <div class="uiRow" :style="css"><slot /></div>
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
   * Grow to take up available space (when nested inside another uiRow)
   * @example grow
   */
  grow?: boolean
  /**
   * Justify contents
   * @example justify="space-between"
   */
  justify?: 'center'|'end'|'start'|'stretch'|'space-between'|'space-around'|'space-evenly'
  /**
   * Align contents
   * @example align="end"
   */
  align?: 'center'|'end'|'start'|'stretch'
  /**
   * Wrap contents over multiple rows instead of shrinking
   * @example wrap
   */
  wrap?: boolean
}>()

useTheme()

const css = computed(() => {
  let s = ''
  if (props.gap) s += `gap:${useSpacing(props.gap)};`
  if (props.pad) s += `padding:${useSpacing(props.pad)};`
  if (props.grow) s += 'flex-grow:1;'
  if (props.wrap) s += 'flex-wrap:wrap;'
  if (props.justify) s += `justify-content:${props.justify};`
  if (props.align) s += `align-items:${props.align};`
  return s
})
</script>

<style>
.uiRow {
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
  overflow: auto;
}
</style>
