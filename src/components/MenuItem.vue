<template>
  <hr v-if="separator" :class="$style.separator" />
  <div v-bind="$attrs" :class="[$style.DropdownItem, active && $style.active, emphasize && $style.emphasize]">
    <slot name="before" />
    <Column gap="0" style="flex: 1">
      <p :class="[$style.text, 'dodo-nowrap']">
        <slot />
      </p>
      <p v-if="$slots['text-secondary']" class="dodo-nowrap dodo-fade-secondary">
        <slot name="text-secondary" />
      </p>
    </Column>
    <slot name="after" />
  </div>
</template>
<script lang="ts" setup>
import { Column } from '.'
import { useTheme } from '..'

defineProps<{
  /** Active item styling */
  active?: boolean
  /** Emphasize item styling */
  emphasize?: boolean
  /** Show separator above item */
  separator?: boolean
}>()

useTheme()
</script>

<style module>
.DropdownItem {
  padding: var(--dodo-spacing-s) var(--dodo-spacing-m);
  transition: all 0.1s;
  cursor: pointer;
  display: flex;
  gap: var(--dodo-spacing-s);
  align-items: center;
  position: relative;
}
.DropdownItem:hover {
  background: color-mix(in var(--dodo-mix-mode), var(--dodo-color-text) 3%, transparent);
}
.DropdownItem.active {
  background: color-mix(in var(--dodo-mix-mode), var(--dodo-color-info) 15%, transparent);
}
.emphasize .text {
  font-weight: var(--dodo-weight-bold);
}
.separator {
  margin: var(--dodo-spacing-xs) 0;
  border: 0;
  border-top: 1px solid color-mix(in var(--dodo-mix-mode), var(--dodo-color-text) 10%, transparent);
}
</style>
