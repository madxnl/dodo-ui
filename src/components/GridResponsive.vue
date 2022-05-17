<template>
  <div class="GridResponsive" :style="css">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useSettings } from './settings';
const { gapSizes } = useSettings()

// This component creates a responsive grid layout using grid-template-columns + auto-fill
const props = defineProps<{
  /**
   * Minimum width of each column
   * @example column="400px"
   */
  column: string
  /**
   * Same as Flex gap
   */
  gap?: 'xs'|'s'|'m'|'l'|'xl'|string
}>()

function spacingToCSS(str: string) {
  return str.split(' ').map(x => ((gapSizes as any)[x] || '0') + 'px').join(' ')
}

const css = computed(() => {
  let s = ''
  s += `grid-template-columns: repeat(auto-fill, minmax(${props.column}, 1fr));`
  if (props.gap) s += `gap:${spacingToCSS(props.gap)};`
  return s
})
</script>

<style>
.GridResponsive {
  display: grid;
}
</style>
