<template>
  <div
    ref="el" :class="[
      $style.root,
      collapsed && $style.collapsed,
    ]"
  >
    <div :class="$style.NavBar">
      <div v-if="$slots['navbar-header']" :class="$style.header">
        <slot name="navbar-header" />
      </div>

      <div :class="$style.middle">
        <slot />
      </div>

      <div v-if="$slots['navbar-footer']" :class="$style.footer">
        <slot name="navbar-footer" />

        <NavBarItem :text="collapsed ? 'Expand' : 'Collapse'" :icon="collapsed ? 'last_page' : 'first_page'" @click="toggleCollapse" />
      </div>
    </div>

    <Container v-if="$slots.main" :class="$style.main">
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
<style module>
.NavBar {
  background: var(--color-navbar);
  color: white;
  display: flex;
  flex-flow: column;
  overflow: auto;
}
.root {
  display: flex;
}
.header,
.middle,
.footer {
  display: grid;
  padding: var(--spacing-s) 0;
  align-content: start;
}
.middle {
  flex: 1;
}
.main {
  flex: 1;
}
</style>
