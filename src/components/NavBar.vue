<template>
  <div ref="el" :class="{NavBar_collapsed: collapsed}" class="NavBar_root">
    <div class="NavBar_pane">
      <div class="NavBar">
        <div v-if="$slots['navbar-header']" class="NavBar_header">
          <slot name="navbar-header" />
        </div>

        <div class="NavBar_middle">
          <slot />
        </div>

        <div v-if="$slots['navbar-footer']" class="NavBar_footer">
          <slot name="navbar-footer" />

          <NavBarItem :text="collapsed ? 'Expand' : 'Collapse'" :icon="collapsed ? 'last_page' : 'first_page'" @click="toggleCollapse" />
        </div>
      </div>
    </div>

    <Container v-if="$slots.main" style="flex:1">
      <slot name="main" />
    </Container>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import { Container } from '..'
import { useTheme } from '../theme'
import NavBarItem from './NavBarItem.vue'

useTheme()

const el = ref<HTMLElement>()
const collapsed = ref(false)
const containerWidth = ref(9999)
const collapseThreshold = 800

const observer = new ResizeObserver(() => updateContainerSize())

watchEffect(() => {
  collapsed.value = containerWidth.value < collapseThreshold
})

onMounted(() => {
  observer.observe(el.value!)
  updateContainerSize()
})

onBeforeUnmount(() => {
  observer.disconnect()
})

function updateContainerSize() {
  containerWidth.value = el.value!?.clientWidth ?? 9999
}

function toggleCollapse() {
  collapsed.value = !collapsed.value
}
</script>

<style>
.NavBar {
  background: var(--color-navbar);
  color: white;
  display: flex;
  flex-flow: column;
  overflow: auto;
}
.NavBar_root {
  display: flex;
}
.NavBar_pane {
  position: relative;
}
.NavBar_header,
.NavBar_middle,
.NavBar_footer {
  display: grid;
  padding: var(--spacing-s) 0;
  align-content: start;
}
.NavBar_middle {
  flex: 1;
}
</style>
