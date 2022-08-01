<template>
  <div
    class="NavBarItem" :class="{
      NavBarItem_active: active,
      NavBarItem_important: important,
    }"
  >
    <div v-if="icon || $slots.icon" class="NavBarItem_icon">
      <slot name="icon"><Icon :name="icon!" /></slot>
    </div>
    <div class="NavBarItem_textwrap">
      <Text class="NavBarItem_text" nowrap>{{ text }}</Text>
      <Text v-if="textSecondary" class="NavBarItem_secondary" nowrap>{{ textSecondary }}</Text>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Icon, IconName, Text } from '..'
import { useTheme } from '../theme'

defineProps<{
  text: string
  /** Secondary line of text */
  textSecondary?: string
  /** Icon name (or use 'icon' slot) */
  icon?: IconName
  /** Style as active nav item */
  active?: boolean
  /** Important items are always fully opaque */
  important?: boolean
}>()

useTheme()

// const css = computed(() => {
//   const s = ''
//   return s
// })
</script>

<style>
.NavBarItem {
  padding: var(--spacing-xs) var(--spacing-m);
  opacity: 0.7;
  transition: all .1s;
  cursor: pointer;
  display: flex;
  gap: var(--spacing-s);
  align-items: center;
  position: relative;
}
.NavBarItem_active::before {
  content: '';
  position: absolute;
  top: 4px; left: -2px; bottom: 4px;
  width: 4px;
  border-radius: 99px;
  display: block;
  background: currentColor;
}
.NavBarItem_important {
  opacity: 1;
}
.NavBarItem_textwrap {
  display: grid;
  max-width: 130px;
}
.NavBarItem_icon {
  display: grid;
  min-width: 32px;
  justify-content: center;
}
.NavBarItem_text {
  color: white;
  font-weight: 500;
}
.NavBarItem_secondary {
  opacity: 0.5;
  font-weight: 500;
}

.NavBarItem_active,
.NavBarItem:hover {
  opacity: 1;
}

.NavBar_collapsed .NavBarItem_textwrap {
  max-width: 0;
  opacity: 0;
}
.NavBar_collapsed .NavBarItem {
  gap: 0;
}
</style>
