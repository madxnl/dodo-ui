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
  color: inherit;
  background: var(--dodo-color-box);
  border-radius: 4px;
  --card-border-rgb: var(--dodo-color-border);
  --card-active-color: var(--dodo-color-info);
  border: 1px solid rgb(var(--card-border-rgb));
  box-shadow: var(--dodo-shadow-card);
  overflow: hidden;
  transition: all var(--dodo-transition-duration);
  display: flex;
  flex-direction: column;
  gap: var(--dodo-spacing-m);
  padding: var(--dodo-spacing-m);
}
.dodo-card--hoverable {
  cursor: pointer;
}
.dodo-card--hoverable:hover {
  text-decoration: none;
  --card-border-rgb: var(dodo-color-box);
}
.dodo-card--active {
  border-color: var(--card-active-color);
  box-shadow: inset 0 0 0 1px var(--card-active-color);
}
</style>
