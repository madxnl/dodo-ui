<template>
  <div
    :class="[
      'dodo-card',
      hoverable && 'dodo-card--hoverable',
      active && 'dodo-card--active',
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

<style>
.dodo-card {
  background: var(--dodo-color-card);
  border-radius: 16px;
  --card-active-color: var(--dodo-color-info);
  transition: box-shadow var(--dodo-transition-duration);
  display: flex;
  flex-direction: column;
  gap: var(--dodo-spacing-s);
  padding: var(--dodo-spacing-m);
  color: var(--dodo-color-foreground);
  outline: 2px solid transparent;
  overflow: inherit;
}
.dodo-card--hoverable {
  text-decoration: none;
  cursor: pointer;
  box-shadow: var(--dodo-shadow-hoverable);
}
.dodo-card--hoverable:hover:not(:active) {
  box-shadow: var(--dodo-shadow-hover);
}
.dodo-card--active {
  outline: 2px solid var(--card-active-color);
}
</style>
