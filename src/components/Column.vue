<template>
  <component
    :is="tag ?? 'div'"
    :class="[
      $style.el,
      theme.gap(gap),
      theme.padding(padding),
      theme.align(align),
      theme.padding(padding),
      theme.wrap(wrap),
      theme.grow(grow)
    ]"
  >
    <slot />
  </component>
</template>
<script lang="ts" setup>
import type { AlignType, JustifyType, SpacingValue } from '..'
import { useTheme } from '../composables'

defineProps<{
  /**
   * Add spacing between child elements
   * @example gap="xl"
   */
  gap?: SpacingValue
  /**
   * Amount of padding around the content
   * @example padding="xl"
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
  /**
   * HTML tag to use for the container
   * @example tag="section"
   */
  tag?: string
}>()

const theme = useTheme()
</script>

<style module>
.el {
  display: flex;
  flex-direction: column;
  gap: var(--dodo-gap-4);
}
</style>
