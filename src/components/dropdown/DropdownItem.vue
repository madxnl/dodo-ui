<template>
  <hr v-if="separator" :class="$style.separator">
  <div
    v-bind="$attrs"
    :class="[
      $style.DropdownItem,
      active && $style.active,
      emphasize && $style.emphasize,
    ]"
    @click="click"
  >
    <slot name="before" />
    <Column gap="0" style="flex:1">
      <Text nowrap :class="$style.text">
        <slot />
      </Text>
      <Text v-if="$slots['text-secondary']" nowrap variant="muted">
        <slot name="text-secondary" />
      </Text>
    </Column>
    <slot name="after" />
  </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import { Column, Text } from '..'
import { dropdownServiceKey } from '../../composables/composables'
import { useTheme } from '../../theme'

defineProps<{
  /** Active item styling */
  active?: boolean
  /** Emphasize item styling */
  emphasize?: boolean
  /** Show separator above item */
  separator?: boolean
}>()

useTheme()

const dropdown = inject(dropdownServiceKey)

function click() {
  dropdown?.toggle(false)
}
</script>

<style module>
.DropdownItem {
  padding: var(--dodo-gap-2) var(--dodo-gap-4);
  transition: all .1s;
  cursor: pointer;
  display: flex;
  gap: var(--dodo-gap-2);
  align-items: center;
  position: relative;
}
.DropdownItem:hover {
  background: rgba(var(--dodo-rgb-foreground), 0.025);
}
.DropdownItem.active {
  background: rgba(var(--dodo-rgb-info), 0.15);
  --text-rgb: var(--dodo-rgb-info);
}
.emphasize .text {
  font-weight: var(--dodo-weight-bold);
}
.separator {
  margin: var(--dodo-gap-1) 0;
  border: 0;
  border-top: 1px solid rgba(var(--dodo-rgb-foreground), 0.1);
}
</style>
