<template>
  <div
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
      <Text v-if="$slots['text-secondary']" nowrap :class="$style.textSecondary">
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
  active?: boolean
  emphasize?: boolean
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
.textSecondary {
  opacity: .6;
}
.emphasize .text {
  font-weight: bold;
}

</style>
