<template>
  <div
    :class="[
      $style.component,
      $style[`col-${columnSize}`],
      autoFill && $style.autoFill,
      theme.gap(gap),
      theme.padding(padding),
    ]"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { SpacingValue, useTheme } from '..'

type ColumnSize = 'xs' | 's' | 'm' | 'l'

defineProps<{
  /**
   * Desired maximum size in pixels for columns (eg 300)
   * @example grow
   */
  columnSize: ColumnSize
  /**
   * Add spacing between child elements
   * @example gap="2"
   */
  gap?: SpacingValue
  /**
   * Amount of padding around the contents. Use array to set padding for each side separately.
   * @example padding="4"
   * @example padding="s 0 s s"
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
  alignItems?: never
  stretch?: never
}>()

const theme = useTheme()
</script>
<style module>
.component {
  display: grid;
  gap: var(--dodo-gap-4);
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
