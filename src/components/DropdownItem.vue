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
    <Container gap="0" style="flex:1">
      <Text nowrap :class="$style.text">
        <slot />
      </Text>
      <Text v-if="$slots['text-secondary']" nowrap muted>
        <slot name="text-secondary" />
      </Text>
    </Container>
    <slot name="after" />
  </div>
</template>
<script lang="ts" setup>
import { inject, useAttrs } from 'vue'
import { Text } from '..'
import { useTheme } from '../theme'
import { dropdownServiceKey } from './composables'
import Container from './Container.vue'

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
const attrs = useAttrs()

function click() {
  if (attrs.onClick) {
    dropdown?.toggle(false)
  }
}
</script>

<style module>
.DropdownItem {
  padding: var(--spacing-s) var(--spacing-m);
  transition: all .1s;
  cursor: pointer;
  display: flex;
  gap: var(--spacing-s);
  align-items: center;
  position: relative;
}
.DropdownItem:hover {
  background: rgba(var(--rgb-foreground), 0.025);
}
.DropdownItem.active {
  background: rgba(var(--rgb-info), 0.1);
  color: var(--color-info);
}
.emphasize .text {
  font-weight: bold;
}
.separator {
  margin: var(--spacing-xs) 0;
  border: 0;
  border-top: 1px solid rgba(var(--rgb-foreground), 0.1);
}
</style>
