
<template>
  <div :class="$style.FluidGrid" :style="css"><slot /></div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { Spacing, useSpacing, useTheme } from '../theme'

const props = defineProps<{
  /**
   * Desired maximum size for columns (eg "300px")
   * @example grow
   */
  columnSize: string
  /**
   * Add spacing between child elements
   * @example gap="2"
   */
  gap?: Spacing
  /**
   * Amount of padding around the contents. Use array to set padding for each side separately.
   * @example padding="4"
   * @example padding="s 0 s s"
   */
  padding?: Spacing
  /**
   * Prefer empty columns instead of stretching
   */
  autoFill?: boolean
  /**
   * Aligns children along cross-axis direction (default 'start')
   * @example align="end"
   */
  alignItems?: 'center'|'end'|'start'|'stretch'
  stretch?: never
}>()

useTheme()

const css = computed(() => {
  const mode = props.autoFill ? 'auto-fill' : 'auto-fit'
  let s = `grid-template-columns:repeat(${mode},minmax(${props.columnSize},1fr));`
  if (props.gap) s += `gap:${useSpacing(props.gap)};`
  if (props.padding) s += `padding:${useSpacing(props.padding)};`
  return s
})
</script>
<style module>
.FluidGrid {
  display: grid;
  gap: var(--dodo-gap-4);
  align-items: start;
}
</style>
