<template>
  <Tooltip :text="text" :disabled="disableTooltip" side="right">
    <component :is="$slots.submenu ? Dropdown : 'div'">
      <div
        ref="el"
        :class="[
          $style.NavBarItem,
          (active || link?.isActive.value) && $style.active,
          important && $style.important,
          collapsed && $style.collapsed,
        ]"
        @click="onClick"
      >
        <div v-if="icon || $slots.icon" :class="$style.icon">
          <slot name="icon"><Icon :name="icon!" /></slot>
        </div>
        <div :class="$style.textwrap">
          <Text :class="$style.text" nowrap color="background">{{ text }}</Text>
          <Text v-if="textSecondary" :class="$style.secondary" nowrap color="background">{{ textSecondary }}</Text>
        </div>
      </div>

      <template #dropdown>
        <slot name="submenu" />
      </template>
    </component>
  </Tooltip>
</template>
<script lang="ts" setup>
import { computed, ComputedRef, inject, onMounted, ref, useSlots } from 'vue'
import { Dropdown, Icon, IconName, Text, Tooltip, useThemeOld } from '..'
import { navBarServiceKey } from '../composables'

const props = defineProps<{
  text: string
  /** Secondary line of text */
  link?: {
    isActive: ComputedRef<boolean>
    navigate: () => Promise<void>
  }
  /** Secondary line of text */
  textSecondary?: string
  /** Icon name (or use 'icon' slot) */
  icon?: IconName
  /** Style as active nav item */
  active?: boolean
  /** Important items are always fully opaque */
  important?: boolean
}>()

useThemeOld()

const slots = useSlots()
const el = ref<HTMLElement>()
const isMobileNav = ref(false)

onMounted(() => {
  isMobileNav.value = !!el.value!.closest('[data-mobile-nav]')
})

const navBar = inject(navBarServiceKey)
const collapsed = computed(() => navBar?.collapsed.value)
const renderMobile = computed(() => navBar?.renderMobile.value)

const disableTooltip = computed(() => {
  return renderMobile.value || !collapsed.value
})

async function onClick(_: Event) {
  if (navBar && !slots.submenu) {
    navBar.mobileToggle.value = false
  }
  if (props.link) {
    await props.link.navigate()
  }
}
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
  font-weight: var(--dodo-weight-bold) !important;
  user-select: none;
}
.secondary {
  opacity: 0.5;
  font-weight: var(--dodo-weight-bold) !important;
}

.active,
.NavBarItem:hover {
  opacity: 1;
}

[data-mobile-nav] .NavBarItem {
  flex-flow: column;
  gap: 0;
}
[data-mobile-nav] .active::before {
  display: none;
}
[data-mobile-nav] .textwrap {
  display: none;
}
</style>
