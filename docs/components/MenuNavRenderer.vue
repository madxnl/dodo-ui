<template>
  <Column tag="nav" :class="$style.menunav">
    <template v-for="item in menu" :key="item.name">
      <a :href="item.path" :class="[$style.item, item.isActive && $style.active, item.subItem && $style.subItem]">
        {{ item.name }}
      </a>
    </template>
  </Column>
</template>
<script setup lang="ts">
import type { MenuItem } from '../composables'
import { Column } from '../dodo'

defineProps<{
  menu: MenuItem[]
}>()
</script>
<style module>
.menunav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: sticky;
  top: 0;
  align-self: flex-start;
  bottom: 0;
}
.menunav > .item {
  padding-left: 8px;
  border-left: 2px solid transparent;
  font-size: 15px;
  font-weight: var(--dodo-weight-bold);
  color: inherit;
  opacity: 0.6;
}
.subItem {
  margin-left: 8px;
  font-size: 14px;
}
.menunav > .active {
  /* color: var(--dodo-color-primary); */
  border-color: rgba(var(--dodo-rgb-primary), 1);
  opacity: 1;
}
</style>
