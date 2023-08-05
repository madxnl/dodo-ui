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
import { AlignType, JustifyType, SpacingValue, useTheme } from '@/ui'

defineProps<{
  /**
   * Add spacing between child elements
   * @example gap="2"
   */
  gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'
  /**
   * Amount of padding around the contents
   * @example padding="4"
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
   * Child elements will wrap instead of shrinking
   * @example wrap
   */
  wrap?: boolean
  /**
   * Grow to take up available space
   * @example grow
   */
  grow?: boolean
}>()

const theme = useTheme()
</script>

<style module>
.el {
  display: flex;
  align-items: center;
  gap: var(--dodo-gap-2);
  min-width: 0;
}
</style>
