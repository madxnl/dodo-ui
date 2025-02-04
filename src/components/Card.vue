<template>
  <div
    :class="[
      $style.card,
      hoverable && $style.hoverable,
      active && $style.active,
      theme.padding(padding),
      theme.gap(gap)
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { GapSize } from '..'
import { useTheme } from '..'

defineProps<{
  hoverable?: boolean
  active?: boolean
  gap?: GapSize
  padding?: GapSize
}>()

const theme = useTheme()
</script>

<style module lang="scss">
.card {
  background: var(--dodo-color-card);
  border-radius: var(--dodo-radius-l);
  --card-active-color: var(--dodo-color-info);
  transition: box-shadow var(--dodo-transition-duration);
  display: flex;
  flex-direction: column;
  gap: var(--dodo-spacing-s);
  padding: var(--dodo-spacing-m);
  color: var(--dodo-color-text);
  outline: 2px solid transparent;
  overflow: inherit;
}
.active {
  outline: 2px solid var(--card-active-color);
}
.hoverable {
  text-decoration: none;
  cursor: pointer;
  box-shadow: var(--dodo-shadow-hoverable);
}
.hoverable:hover {
  box-shadow: var(--dodo-shadow-hover);
}
</style>
