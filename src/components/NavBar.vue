<template>
  <div ref="el" :class="{NavBar_collapsed: collapsed}" class="NavBar_root">
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

    <Container v-if="$slots.main" class="NavBar_main">
      <slot name="main" />
    </Container>
  </div>
</template>
<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, provide, ref } from 'vue'
import { Container } from '..'
import { useTheme } from '../theme'
import { navBarServiceKey } from './composables'
import NavBarItem from './NavBarItem.vue'

useTheme()

const el = ref<HTMLElement>()
const manualCollapsed = ref<boolean>()
const containerWidth = ref(9999)
const collapseThreshold = 800

const observer = new ResizeObserver(() => updateContainerSize())

const collapsed = computed(() => manualCollapsed.value ?? containerWidth.value < collapseThreshold)

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
  manualCollapsed.value = !collapsed.value
}

provide(navBarServiceKey, { collapsed })
</script>
<script lang="ts">
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
.NavBar_main {
  flex: 1;
}
</style>
