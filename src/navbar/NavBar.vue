<template>
  <div
    :class="[
      $style.root,
      collapsed && $style.collapsed,
      renderMobile && $style.mobileMenu,
    ]"
  >
    <div :class="$style.NavBar">
      <div v-if="$slots['navbar-header']" :class="$style.header">
        <div>
          <!-- @slot Navbar header section -->
          <slot name="navbar-header" />
        </div>

        <Button
          v-if="renderMobile" variant="text" square color="background"
          style="margin-right:8px"
          @click="collapsed=true"
        >
          <Icon name="close" />
        </Button>
      </div>

      <div :class="$style.middle">
        <!-- @slot Navbar middle section -->
        <slot />
      </div>

      <div v-if="$slots['navbar-footer']" :class="$style.footer">
        <!-- @slot Navbar footer section -->
        <slot name="navbar-footer" />

        <NavBarItem
          v-if="!renderMobile"
          :text="collapsed ? 'Expand' : 'Collapse'"
          :icon="collapsed ? 'last_page' : 'first_page'"
          @click="collapsed=!collapsed"
        />
      </div>
    </div>

    <div :class="$style.wrapMobile">
      <Column v-if="$slots.main" :class="$style.main">
        <!-- @slot Main page content -->
        <slot name="main" />
      </Column>

      <div v-if="renderMobile" :class="$style.mobileNav" data-mobile-nav>
        <slot />
        <slot name="navbar-footer" />

        <NavBarItem text="Menu" icon="menu" @click="collapsed=!collapsed" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, provide } from 'vue'
import { Button, Column, Icon } from '..'
import { navBarServiceKey, useScreenSize, useSessionStoredRef } from '../composables/composables'
import { useTheme } from '../theme'
import NavBarItem from './NavBarItem.vue'

// import type { useLink } from 'vue-router'
// export interface NavItem {
//   text: string
//   textSecondary?: string
//   link?: ReturnType<typeof useLink>
//   icon?: IconName
//   key?: string
//   active?: boolean
//   href?: string
//   onClick?: () => void
//   position?: 'header'|'bottom'
//   shown?: boolean
// }

const props = defineProps<{
  // items: NavItem[]
  /** Override mobile/desktop version, default is based on screen size */
  mobile?: boolean
}>()

useTheme()

const { screenLarge } = useScreenSize()
const collapsed = useSessionStoredRef<boolean|null>('NavBar-collapse', null)
const renderMobile = computed(() => props.mobile || !screenLarge.value)

provide(navBarServiceKey, { collapsed })

</script>
<style module>
.root {
  position: relative;
}
.NavBar {
  background: rgb(var(--dodo-rgb-foreground));
  background: rgb(var(--dodo-rgb-foreground)) linear-gradient(#ffffff11, #00000011);
  color: white;
  --text-rgb: var(--dodo-rgb-background);
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 220px;
  transition: all .1s;
}
.NavBar a {
  text-decoration: none;
}
.root {
  display: flex;
}
.collapsed .NavBar {
  max-width: 64px;
}
.header,
.middle,
.footer {
  display: flex;
  flex-flow: column;
  padding: var(--dodo-gap-2) 0;
  align-content: start;
}
.header {
  flex-flow: row;
}
.header > div:first-child {
  flex: 1;
}
.middle {
  flex: 1;
}
.wrapMobile {
  flex: 1;
  display: flex;
  flex-flow: column;
}
.main {
  flex: 1;
  align-content: stretch;
}

.mobileMenu .NavBar {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  z-index: 50;
  width: 100%;
  max-width: 300px;
}
.mobileMenu.collapsed .NavBar {
  max-width: 0;
}
.mobileNav {
  display: flex;
  justify-content: space-around;
  background: rgb(var(--dodo-rgb-foreground));
  min-height: 48px;
  align-items: center;
}
</style>
