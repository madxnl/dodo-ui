<template>
  <div ref="el" :class="[$style.FluidGrid, oneColumn && $style.oneColumn]" :style="css">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { SpacingValue } from '..'
import { useTheme } from '../composables'

const props = defineProps<{
  /**
   * Desired maximum size in pixels for columns (eg 300)
   * @example grow
   */
  columnSize: number
  /**
   * Add spacing between child elements
   * @example gap="xl"
   */
  gap?: SpacingValue
  /**
   * Amount of padding around the contents.
   * @example padding="xl"
   */
  padding?: SpacingValue
  /**
   * Prefer empty columns instead of stretching
   */
  autoFill?: boolean
  /**
   * Aligns children along cross-axis direction (default 'start')
   * @example align="end"
   */
  alignItems?: 'center' | 'end' | 'start' | 'stretch'
}>()

const theme = useTheme()

const el = ref<HTMLElement>()
const size = ref(99999)
let timeout = null as ReturnType<typeof setTimeout> | null

const observe = new ResizeObserver(() => {
  if (timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    size.value = el.value!.clientWidth
  }, 50)
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
  if (props.gap) s += `gap:${theme.gapValue(props.gap)};`
  if (props.padding) s += `padding:${theme.gapValue(props.padding)};`
  return s
})
</script>
<style module>
.FluidGrid {
  display: grid;
  gap: var(--dodo-spacing-m);
  align-items: start;
  grid-template-columns: repeat(var(--fluidgrid-mode, auto-fit), minmax(var(--fluidgrid-size), 1fr));
}
.oneColumn {
  grid-template-columns: 1fr;
}
</style>
