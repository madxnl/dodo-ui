
<template>
  <div ref="el" class="uiContainer" :style="css2">
    <div class="uiContainer_scroll" :style="css"><slot /></div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { Spacing, ThemeColor, useSpacing, useTheme, useThemeColor } from '../theme'

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
  background?: ThemeColor
  /**
   * Enable responsive column layout
   * @example column-width="400px"
   */
  columnWidth?: string
  scrollable?: boolean
}>()

const emit = defineEmits<{
  (e: 'scroll', el: HTMLDivElement): void
}>()

const el = ref<HTMLDivElement>()

function onScroll() {
  emit('scroll', el.value!)
}

watchEffect(() => {
  if (el.value && props.scrollable) {
    el.value.addEventListener('scroll', onScroll, { passive: true })
  }
})

useTheme()

const css2 = computed(() => {
  let s = ''
  if (props.scrollable) s += 'overflow:auto;'
  return s
})

const css = computed(() => {
  let s = ''
  if (props.gap) s += `gap:${useSpacing(props.gap)};`
  if (props.pad) s += `padding:${useSpacing(props.pad)};`
  // if (props.grow) s += 'flex-grow:1;'
  // if (props.wrap) s += 'flex-wrap:wrap;'
  if (props.justify) s += `justify-content:${props.justify};`
  if (props.align) s += `align-items:${props.align};`
  if (props.background) s += `background:${useThemeColor(props.background)};`
  if (props.columnWidth) s += `grid-template-columns:repeat(auto-fit,minmax(${props.columnWidth},1fr));`
  return s
})
</script>

<style>
.uiContainer {
  display: grid;
  align-content: start;
}
.uiContainer_scroll {
  display: grid;
  align-content: start;
  gap: var(--spacing-m);
}
</style>
