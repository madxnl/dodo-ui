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
import { inject } from 'vue'
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

function click() {
  dropdown?.toggle(false)
}
</script>

<style module>
.DropdownItem {
  padding: var(--dodo-gap-s) var(--dodo-gap-m);
  transition: all .1s;
  cursor: pointer;
  display: flex;
  gap: var(--dodo-gap-s);
  align-items: center;
  position: relative;
}
.DropdownItem:hover {
  background: rgba(var(--dodo-rgb-foreground), 0.025);
}
.DropdownItem.active {
  background: rgba(var(--dodo-rgb-info), 0.1);
  color: var(--dodo-color-info);
}
.emphasize .text {
  font-weight: bold;
}
.separator {
  margin: var(--dodo-gap-xs) 0;
  border: 0;
  border-top: 1px solid rgba(var(--dodo-rgb-foreground), 0.1);
}
</style>
