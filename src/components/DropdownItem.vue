<template>
  <div
    :class="[
      $style.DropdownItem,
      active && $style.active,
    ]"
    @click="click"
  >
    <slot name="before" />
    <Text nowrap>
      <slot />
    </Text>
  </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import { Text } from '..'
import { useTheme } from '../theme'
import { dropdownServiceKey } from './composables'

defineProps<{
  active?: boolean
}>()

useTheme()

const dropdown = inject(dropdownServiceKey)

function click() {
  dropdown?.toggle(false)
}
</script>

<style module>
.DropdownItem {
  padding: var(--spacing-s) var(--spacing-m);
  opacity: 0.7;
  transition: all .1s;
  cursor: pointer;
  display: flex;
  gap: var(--spacing-s);
  align-items: center;
  position: relative;
}
.active {
  background: rgba(var(--rgb-info), 0.1);
  color: var(--color-info);
}
.active,
.DropdownItem:hover {
  opacity: 1;
}

</style>
