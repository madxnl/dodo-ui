
<template>
  <div
    ref="el"
    :class="[
      $style.FluidGrid,
      oneColumn && $style.oneColumn,
    ]"
    :style="css"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Spacing, useSpacing, useTheme } from '../theme'

const props = defineProps<{
  /**
   * Desired maximum size in pixels for columns (eg 300)
   * @example grow
   */
  columnSize: number
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

const el = ref<HTMLElement>()
const size = ref(99999)

const observe = new ResizeObserver(() => {
  size.value = el.value!.clientWidth
})

onMounted(() => {
  observe.observe(el.value!)
})

onUnmounted(() => {
  observe.disconnect()
})

const oneColumn = computed(() => {
  const q = props.columnSize
  return q >= size.value
})

const css = computed(() => {
  let s = `--fluidgrid-size:${props.columnSize}px;`
  if (props.autoFill) s += '--fluidgrid-mode:auto-fill;'
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
  grid-template-columns:repeat(
    var(--fluidgrid-mode,auto-fit),
    minmax(var(--fluidgrid-size),1fr));
}
.oneColumn {
  grid-template-columns:1fr;
}
</style>
