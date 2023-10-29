<template>
  <div
    :class="[
      $style.root,
      collapsed && $style.collapsed,
      mobileToggle && $style.mobileToggle,
      renderMobile && $style.mobileMenu,
    ]"
    @click.self="clickRoot"
  >
    <div v-if="mobileToggle" :class="$style.backdrop" @click="mobileToggle = false" />

    <div :class="$style.NavBar">
      <div v-if="$slots['navbar-header']" :class="$style.header">
        <div>
          <!-- @slot Navbar header section -->
          <slot name="navbar-header" />
        </div>

        <div style="margin-right: 8px">
          <Button v-if="renderMobile" variant="text" square color="background" @click="mobileToggle = false">
            <Icon name="close" />
          </Button>
        </div>
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
          @click="collapsed = !collapsed"
        />
      </div>
    </div>

    <div :class="$style.wrapMobile">
      <Column v-if="$slots.main" :class="$style.main">
        <!-- @slot Main page content -->
        <slot name="main" />
      </Column>

      <div v-if="renderMobile" :class="$style.mobileNav" data-mobile-nav>
        <slot :in-mobile-bar="true" />
        <slot :in-mobile-bar="true" name="navbar-footer" />

        <NavBarItem text="Menu" icon="menu" @click="mobileToggle = !mobileToggle" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, provide, ref } from 'vue'
import { Column } from '.'
import { Button, Icon, useTheme } from '..'
import { navBarServiceKey, useScreenSize, useSessionStoredRef } from '../composables'
import NavBarItem from './NavBarItem.vue'

const props = defineProps<{
  // items: NavItem[]
  /** Override mobile/desktop version, default is based on screen size */
  mobile?: boolean
}>()

useTheme()

const { screenLarge } = useScreenSize()
const collapsed = useSessionStoredRef<boolean | null>('NavBar-collapse', null)
const mobileToggle = ref(false)
const renderMobile = computed(() => props.mobile || !screenLarge.value)

provide(navBarServiceKey, { collapsed, renderMobile, mobileToggle })

function clickRoot() {
  if (renderMobile.value) {
    mobileToggle.value = false
  }
}
</script>
<style module>
.root {
  position: relative;
}
.NavBar {
  background: var(--dodo-color-foreground);
  background: var(--dodo-color-foreground) linear-gradient(#ffffff11, #00000011);
  color: white;
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 220px;
  transition: all 0.1s;
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
  align-content: flex-start;
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

.backdrop {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 40;
}
.mobileMenu .NavBar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  max-width: 0;
}
.mobileMenu.mobileToggle .NavBar {
  max-width: 300px;
}
.mobileNav {
  display: flex;
  justify-content: space-around;
  background: var(--dodo-color-foreground);
  min-height: 48px;
  align-items: center;
}
</style>
