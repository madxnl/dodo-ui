
<template>
  <div :class="[$style.Container, contentLoading && $style.loading]" :style="css">
    <slot />
    <span :class="$style.spinner"><Spinner v-if="contentLoading" /></span>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ColorProp, Spacing, useColorProp, useSpacing, useTheme } from '../theme'
import Spinner from './Spinner.vue'

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
  justifyContent?: 'center'|'end'|'start'|'stretch'|'space-between'|'space-around'|'space-evenly'
  /**
   * Justify items within their columns
   */
  justifyItems?: 'center'|'end'|'start'|'stretch'
  /**
   * Align contents
   * @example align="end"
   */
  alignContent?: 'center'|'end'|'start'|'stretch'|'space-between'|'space-around'|'space-evenly'
  /**
   * Align items within their rows
   * @example align="end"
   */
  alignItems?: 'center'|'end'|'start'|'stretch'|'baseline'
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
  // autoColumnWidth?: number
  /**
   * Use overflow="auto" make Container scrollable. Parent Containers may need overflow="hidden".
   * @example column-width="400px"
   */
  overflow?: 'auto'|'hidden'
  /**
   * Fade the container contents and display a loading spinner
   */
  contentLoading?: boolean
  justify?: never
  align?: never
}>()

useTheme()

const css = computed(() => {
  let s = ''
  if (props.gap) s += `gap:${useSpacing(props.gap)};`
  if (props.pad) s += `padding:${useSpacing(props.pad)};`
  if (props.justifyContent) s += `justify-content:${props.justifyContent};`
  if (props.justifyItems) s += `justify-items:${props.justifyItems};`
  if (props.alignContent) s += `align-content:${props.alignContent};`
  if (props.alignItems) s += `align-items:${props.alignItems};`
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
  position: relative;
  transition: opacity 0.1s;
}
.loading {
  pointer-events: none;
}
.loading > * {
  opacity: 0.5;
}
.spinner {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
</style>
