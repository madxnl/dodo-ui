<template>
  <div
    :class="[
      $style.el,
      theme.gap(gap),
      theme.padding(padding),
      theme.align(align),
      theme.justify(justify),
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
   * Amount of padding around the contents. Use array to set padding for each side separately.
   * @example padding="4"
   * @example padding="s 0 s s"
   */
  padding?: SpacingValue
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
  /**
   * Grow to take up available space (when nested inside another Row)
   * @example grow
   */
  grow?: boolean

  /** Deprecated */
  pad?: never
  /** Deprecated */
  justifyContent?: never
  /** Deprecated */
  alignItems?: never
  /** Deprecated */
  alignContent?: never
}>()

const theme = useStyle()
</script>

<style module>
.el {
  display: flex;
  align-items: center;
  gap: var(--dodo-gap-2);
  min-width: 0;
}
</style>
