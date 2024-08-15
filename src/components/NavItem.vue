<template>
  <div :class="[$style.el]">
    <Tooltip :text="tooltipText" side="right">
      <a
        :class="[$style.link, showAsActive && $style.active, important && $style.important]"
        :href="unref(link?.href)"
        @click="onClick"
      >
        <div :class="$style.icon">
          <slot name="icon">
            <Icon v-if="icon" :name="icon" />
          </slot>
        </div>
        <div :class="$style.textwrap">
          <p :class="[$style.text, 'dodo-nowrap']">
            {{ text }}
          </p>
          <p v-if="textSecondary" :class="[$style.secondary, 'dodo-nowrap']">
            {{ textSecondary }}
          </p>
        </div>

        <div v-if="slots.submenu">
          <Icon :name="isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" size="s" style="margin: 0 -0.25em" />
        </div>
      </a>
    </Tooltip>

    <div v-if="$slots.submenu" :class="[$style.submenu, isExpanded && $style.expanded]">
      <slot name="submenu" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import { computed, unref, useSlots } from 'vue'
import type { NavigationFailure } from 'vue-router'
import type { IconName } from '..'
import { Icon, Tooltip, useTheme } from '..'
import { useNavbar } from './NavBarNew.vue'

const props = defineProps<{
  /** Secondary line of text */
  link?: {
    href: string | ComputedRef<string>
    isActive: boolean | ComputedRef<boolean>
    navigate: (e?: MouseEvent) => Promise<void | NavigationFailure>
  }
  text: string
  /** Secondary line of text */
  textSecondary?: string
  tooltipText?: string
  /** Icon name (or use 'icon' slot) */
  icon?: IconName
  /** Important items are always fully opaque */
  important?: boolean
}>()

const active = computed(() => {
  if (props.link) return unref(props.link.isActive)
  return false
})

const text = computed(() => props.text)

const { isExpanded, showAsActive, toggleExpand } = useNavbar({ text, active })

useTheme()

const slots = useSlots()

async function onClick(e: Event) {
  if (slots.submenu) {
    toggleExpand()
  }
  if (props.link) {
    await props.link.navigate()
    e.preventDefault()
  }
}
</script>

<style module>
.el .link {
  padding: var(--dodo-spacing-s) var(--dodo-spacing-m);
  opacity: 0.75;
  transition: all 0.1s;
  cursor: pointer;
  display: flex;
  gap: var(--dodo-spacing-s);
  align-items: center;
  position: relative;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
.submenu {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all var(--dodo-transition-duration);
  background: rgba(0, 0, 0, 0.1);
  border: solid color-mix(in var(--dodo-mix-mode), var(--dodo-color-background) 10%, transparent);
  border-width: 1px 0;
}
.submenu.expanded {
  opacity: 1;
  max-height: 999px;
  padding: var(--dodo-spacing-s) 0;
}

.link.active {
  font-weight: var(--dodo-weight-bold) !important;
  opacity: 1;
}
.active,
.link:hover {
  opacity: 1;
}
.active::before {
  content: '';
  position: absolute;
  top: auto;
  bottom: auto;
  left: 0;
  width: 3px;
  height: 24px;
  display: block;
  background: var(--dodo-color-primary);
  border-radius: 0 4px 4px 0;
}
.submenu .active::before {
  display: none;
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
  /* transform: scale(0.85); */
}

.text {
  /* font-weight: var(--dodo-weight-bold) !important; */
  user-select: none;
}

.secondary {
  opacity: 0.5;
  transition: opacity 0.1s;
  /* font-weight: var(--dodo-weight-bold) !important; */
}
.link:hover .secondary {
  opacity: 0.75;
}
</style>
