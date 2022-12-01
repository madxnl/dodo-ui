<template>
  <div
    ref="el" :class="[
      $style.root,
      collapsed && $style.collapsed,
    ]"
  >
    <div v-if="el" :class="$style.NavBar">
      <div v-if="$slots['navbar-header']" :class="$style.header">
        <!-- @slot Navbar header section -->
        <slot name="navbar-header" />
      </div>

      <div :class="$style.middle">
        <!-- @slot Navbar middle section -->
        <slot />
      </div>

      <div v-if="$slots['navbar-footer']" :class="$style.footer">
        <!-- @slot Navbar footer section -->
        <slot name="navbar-footer" />

        <NavBarItem :text="collapsed ? 'Expand' : 'Collapse'" :icon="collapsed ? 'last_page' : 'first_page'" @click="toggled=!collapsed" />
      </div>
    </div>

    <Column v-if="$slots.main" :class="$style.main">
      <!-- @slot Main page content -->
      <slot name="main" />
    </Column>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, provide, ref, watch } from 'vue'
import { Column } from '..'
import { navBarServiceKey, useElementSize, useSessionStoredRef } from '../composables/composables'
import { useTheme } from '../theme'
import NavBarItem from './NavBarItem.vue'

useTheme()

const el = ref<HTMLElement>()
const { width } = useElementSize(el)
const toggled = useSessionStoredRef<boolean|null>('NavBar-collapse', null)
const threshold = computed(() => width.value < 1000)
const collapsed = computed(() => toggled.value ?? threshold.value)

onMounted(() => {
  // Clear user-toggle when resized across threshold
  watch(threshold, () => { toggled.value = null })
})

provide(navBarServiceKey, { collapsed })
</script>
<style module>
body .NavBar {
  background: rgb(var(--dodo-rgb-foreground));
  background: rgb(var(--dodo-rgb-foreground)) linear-gradient(#ffffff11, #00000011);
  color: white;
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
  display: grid;
  padding: var(--dodo-gap-2) 0;
  align-content: start;
}
.middle {
  flex: 1;
}
.main {
  flex: 1;
  align-content: stretch;
}
</style>
