<template>
  <div
    :class="[
      $style.el,
      theme.gap(gap),
      theme.padding(padding),
      theme.align(align),
      theme.padding(padding),
      theme.wrap(wrap),
      theme.grow(grow),
    ]"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { AlignType, JustifyType, SpacingValue, useStyle } from '..'

defineProps<{
  /**
   * Add spacing between child elements
   * @example gap="2"
   */
  gap?: SpacingValue
  /**
   * Amount of padding around the content
   * @example padding="4"
   */
  padding?: SpacingValue
  /**
   * Grow to take up available space (when nested inside another Row)
   * @example grow
   */
  grow?: boolean
  /**
   * Align content along main direction (horizontal for Row, vertical for Column)
   * @example justify="space-between"
   */
  justify?: JustifyType
  /**
   * Aligns children along cross-axis direction
   * @example align="end"
   */
  align?: AlignType
  /**
   * Wrap contents over instead of shrinking
   * @example wrap
   */
  wrap?: boolean

  /** Deprecated */
  pad?: never
  /** Deprecated */
  justifyContent?: never
  /** Deprecated */
  alignItems?: never
  /** Deprecated */
  alignContent?: never
  /** Deprecated */
  overflow?: never
}>()

const theme = useStyle()
</script>

<style module>
.el {
  display: flex;
  flex-direction: column;
  gap: var(--dodo-gap-4);
}
</style>
