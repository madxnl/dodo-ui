<template>
  <div
    :class="[
      'dodo-card',
      hoverable && 'dodo-card--hoverable',
      active && 'dodo-card--active',
      theme.padding(padding),
      theme.gap(gap),
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { GapSize, useTheme } from '..'

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
  background: white;
  border-radius: 4px;
  --card-border-rgb: 215, 215, 215;
  --card-active-color: var(--dodo-color-info);
  border: 1px solid rgb(var(--card-border-rgb));
  box-shadow: 0 2px 2px 0 rgba(var(--card-border-rgb), 0.35);
  overflow: hidden;
  transition: all var(--dodo-transition-duration);
  display: flex;
  flex-direction: column;
  gap: calc(var(--dodo-spacing) * 4);
  padding: calc(var(--dodo-spacing) * 6);
}
.dodo-card--hoverable {
  cursor: pointer;
}
.dodo-card--hoverable:hover {
  text-decoration: none;
  --card-border-rgb: 170, 170, 170;
}
.dodo-card--active {
  border-color: var(--card-active-color);
  box-shadow: inset 0 0 0 1px var(--card-active-color);
}
</style>
