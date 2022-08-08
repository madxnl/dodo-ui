<template>
  <div
    ref="el" :class="[
      $style.root,
      collapsed && $style.collapsed,
    ]"
  >
    <div v-if="el" :class="$style.NavBar">
      <div v-if="$slots['navbar-header']" :class="$style.header">
        <slot name="navbar-header" />
      </div>

      <div :class="$style.middle">
        <slot />
      </div>

      <div v-if="$slots['navbar-footer']" :class="$style.footer">
        <slot name="navbar-footer" />

        <NavBarItem :text="collapsed ? 'Expand' : 'Collapse'" :icon="collapsed ? 'last_page' : 'first_page'" @click="toggled=!collapsed" />
      </div>
    </div>

    <Container v-if="$slots.main" :class="$style.main">
      <slot name="main" />
    </Container>
  </div>
</template>
<script lang="ts" setup>
import { computed, provide, ref, watch } from 'vue'
import { Container } from '..'
import { useTheme } from '../theme'
import { navBarServiceKey, useElementSize, useSessionStoredRef } from './composables'
import NavBarItem from './NavBarItem.vue'

useTheme()

const el = ref<HTMLElement>()
const { width } = useElementSize(el)
const toggled = useSessionStoredRef<boolean|null>('NavBar-collapse', null)
const threshold = computed(() => width.value < 1000)
const collapsed = computed(() => toggled.value ?? threshold.value)

// Clear user-toggle when resized across threshold
watch(threshold, () => { toggled.value = null })

provide(navBarServiceKey, { collapsed })
</script>
<style module>
body .NavBar {
  background: var(--dodo-color-navbar);
  color: white;
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 220px;
  transition: all .1s;
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
  padding: var(--dodo-gap-s) 0;
  align-content: start;
}
.middle {
  flex: 1;
}
.main {
  flex: 1;
}
</style>
