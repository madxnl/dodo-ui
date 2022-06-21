
<template>
  <div class="uiContainer" :style="css"><slot></slot></div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useSpacing, useThemeCssVars } from '../theme';

const props = defineProps<{
  /**
   * Add spacing between child elements
   * @example
    * gap="s"
   */
  gap?: 'xs'|'s'|'m'|'l'|'xl'|string
  /**
   * Amount of padding around the contents. Use array to set padding for each side separately.
   * @example pad="m"
   * @example pad="s 0 s s"
   */
  pad?: 'xs'|'s'|'m'|'l'|'xl'|string
  /**
   * Toggle column orientation instead of row
   * @example column
   */
  column?: boolean,
  /**
   * Grow to take up available space (when nested inside another uiFlex)
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
  /**
   * Set a background color
   * @example background="#cccccc"
   */
  background?: string
}>()

useThemeCssVars()

const css = computed(() => {
  let s = ''
  if (props.gap) s += `gap:${useSpacing(props.gap)};`
  if (props.pad) s += `padding:${useSpacing(props.pad)};`
  if (props.grow) s += `flex-grow:1;`
  if (props.wrap) s += `flex-wrap:wrap;`
  if (props.justify) s += `justify-content:${props.justify};`
  if (props.align) s += `align-items:${props.align};`
  if (props.background) s += `background:${props.background};`
  return s
})
</script>

<style>
.uiContainer {
  display: grid;
  align-content: start;
  gap: var(--spacing-m);
}
</style>
