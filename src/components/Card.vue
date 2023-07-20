<template>
  <div
    :class="[
      $style.card,
      hoverable && $style.hoverable,
      active && $style.active,
    ]"
    :style="css"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Spacing, useSpacing, useThemeOld } from '..'

const props = defineProps<{
  hoverable?: boolean
  active?: boolean
  padding?: Spacing
}>()

useThemeOld()

const css = computed(() => {
  let s = ''
  if (props.padding) s += `padding:${useSpacing(props.padding)};`
  return s
})
</script>

<style module>
.card {
  color: inherit;
  background: white;
  border-radius: 4px;
  --card-border-rgb: 215,215,215;
  --card-active-color: rgb(var(--dodo-rgb-info));
  border: 1px solid rgb(var(--card-border-rgb));
  box-shadow: 0 2px 2px 0 rgba(var(--card-border-rgb), 0.35);
  overflow: hidden;
  transition: all var(--transition-duration);
  display: grid;
  gap: var(--dodo-gap-4);
  padding: var(--dodo-gap-6);
}
.hoverable {
  cursor: pointer;
}
.hoverable:hover {
  text-decoration: none;
  --card-border-rgb: 170,170,170;
}
.active {
  border-color: var(--card-active-color);
  box-shadow: inset 0 0 0 1px var(--card-active-color);
}
</style>
