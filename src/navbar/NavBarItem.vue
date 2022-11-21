<template>
  <Tooltip :text="text" :disabled="!collapsed" side="right">
    <div
      :class="[
        $style.NavBarItem,
        active && $style.active,
        important && $style.important,
        collapsed && $style.collapsed,
      ]"
    >
      <div v-if="icon || $slots.icon" :class="$style.icon">
        <slot name="icon"><Icon :name="icon!" /></slot>
      </div>
      <div :class="$style.textwrap">
        <Text :class="$style.text" nowrap color="background">{{ text }}</Text>
        <Text v-if="textSecondary" :class="$style.secondary" nowrap color="background">{{ textSecondary }}</Text>
      </div>
    </div>
  </Tooltip>
</template>
<script lang="ts" setup>
import { computed, inject } from 'vue'
import { Icon, IconName, Text, Tooltip } from '..'
import { navBarServiceKey } from '../composables/composables'
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

const navBar = inject(navBarServiceKey)
const collapsed = computed(() => navBar?.collapsed.value)
</script>

<style module>
.NavBarItem {
  padding: var(--dodo-gap-1) var(--dodo-gap-4);
  opacity: 0.7;
  transition: all .1s;
  cursor: pointer;
  display: flex;
  gap: var(--dodo-gap-2);
  align-items: center;
  position: relative;
  color: white;
  text-decoration: none;
}
.active::before {
  content: '';
  position: absolute;
  top: 4px; left: -2px; bottom: 4px;
  width: 4px;
  border-radius: 99px;
  display: block;
  background: currentColor;
}
.important {
  opacity: 1;
}
.textwrap {
  display: grid;
}
.icon {
  display: grid;
  min-width: 32px;
  justify-content: center;
}
.text {
  font-weight: var(--dodo-font-weightSemi);
  user-select: none;
}
.secondary {
  opacity: 0.5;
  font-weight: var(--dodo-font-weightSemi);
}

.active,
.NavBarItem:hover {
  opacity: 1;
}

</style>
