<template>
  <div class="GridResponsive" :style="css">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useSpacing } from '../theme';

// This component creates a responsive grid layout using grid-template-columns + auto-fill
const props = defineProps<{
  /**
   * Minimum width of each column before wrapping
   * @example column-width="400px"
   */
  columnWidth: string
  /**
   * Stretch contents to fill empty space
   */
  stretch?: boolean
  /**
   * Same as UiFlex gap
   */
  gap?: 'xs'|'s'|'m'|'l'|'xl'|string
}>()

const css = computed(() => {
  let s = ''
  const fitFill = props.stretch ? 'auto-fit' : 'auto-fill'
  s += `grid-template-columns: repeat(${fitFill}, minmax(${props.columnWidth}, 1fr));`
  if (props.gap) s += `gap:${useSpacing(props.gap)};`
  return s
})
</script>

<style>
.GridResponsive {
  display: grid;
}
</style>
