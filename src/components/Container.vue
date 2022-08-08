
<template>
  <div :class="$style.Container" :style="css"><slot /></div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ColorProp, Spacing, useColorProp, useSpacing, useTheme } from '../theme'

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
   * Set a background color
   * @example background="info"
   */
  background?: ColorProp
  /**
   * Render child elements as responsive grid columns
   * @example column-width="400px"
   */
  columnWidth?: string
  /**
   * Use overflow="auto" make Container scrollable. Parent Containers may need overflow="hidden".
   * @example column-width="400px"
   */
  overflow?: 'auto'|'hidden'
}>()

useTheme()

const css = computed(() => {
  let s = ''
  if (props.gap) s += `gap:${useSpacing(props.gap)};`
  if (props.pad) s += `padding:${useSpacing(props.pad)};`
  if (props.justify) s += `justify-content:${props.justify};`
  if (props.align) s += `align-content:${props.align};`
  if (props.background) s += `background:${useColorProp(props.background)};`
  if (props.overflow) s += `overflow:${props.overflow};`
  if (props.columnWidth) s += `grid-template-columns:repeat(auto-fit,minmax(${props.columnWidth},1fr));`
  return s
})
</script>

<style module>
.Container {
  display: grid;
  gap: var(--dodo-gap-m);
}
</style>
