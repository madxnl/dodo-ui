<template>
  <div
    :class="[
      $style.component,
      $style[`col-${columnSize}`],
      autoFill && $style.autoFill,
      theme.gap(gap),
      theme.padding(padding)
    ]"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import type { SpacingValue } from '../composables'
import { useTheme } from '../composables'

type ColumnSize = 'xs' | 's' | 'm' | 'l'

defineProps<{
  /**
   * Desired maximum size in pixels for columns (eg 300)
   * @example grow
   */
  columnSize: ColumnSize
  /**
   * Add spacing between child elements
   * @example gap="xl"
   */
  gap?: SpacingValue
  /**
   * Amount of padding around the contents
   * @example padding="xl"
   */
  padding?: SpacingValue
  /**
   * Prefer empty columns instead of stretching
   */
  autoFill?: boolean
}>()

const theme = useTheme()
</script>
<style module>
.component {
  display: grid;
  gap: var(--dodo-spacing-m);
  /* align-items: start; */
  grid-template-columns: repeat(var(--grid-auto-mode, auto-fit), minmax(var(--grid-auto-size), 1fr));
}
.autoFill {
  --grid-auto-mode: auto-fill;
}
.col-xs {
  --grid-auto-size: 196px;
}
.col-s {
  --grid-auto-size: 256px;
}
.col-m {
  --grid-auto-size: 384px;
}
.col-l {
  --grid-auto-size: 512px;
}
</style>
