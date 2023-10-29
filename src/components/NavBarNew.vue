<template>
  <div
    :class="[$style.root, mobileToggle && $style.mobileToggle, renderMobile && $style.mobileMenu]"
    @click.self="clickRoot"
  >
    <div v-if="mobileToggle" :class="$style.backdrop" @click="mobileToggle = false" />

    <div :class="$style.NavBar">
      <div :class="$style.middle">
        <!-- @slot Navbar middle section -->
        <slot />
      </div>

      <div v-if="$slots['navbar-footer']" :class="$style.footer">
        <!-- @slot Navbar footer section -->
        <slot name="navbar-footer" />
      </div>
    </div>

    <div :class="$style.wrapMobile">
      <div v-if="renderMobile" :class="$style.mobileNav" data-mobile-nav>
        <h5>{{ headerText }}</h5>

        <Tooltip text="Toggle menu">
          <div :class="$style.menuButton">
            <Icon name="menu" @click="mobileToggle = !mobileToggle" />
          </div>
        </Tooltip>
      </div>

      <Column v-if="$slots.main" :class="$style.main">
        <!-- @slot Main page content -->
        <slot name="main" />
      </Column>
    </div>
  </div>
</template>
<script lang="ts">
import type { ComponentInternalInstance, ComputedRef } from 'vue'
import { computed, getCurrentInstance, onBeforeUnmount, ref, watch, watchEffect } from 'vue'
import { Column, Icon, Tooltip } from '.'
import { useScreenSize, useServiceFactory, useTheme } from '../composables'

const navbarService = useServiceFactory(() => {
  const activeItems = ref<number[]>([])
  const headerText = ref('')
  const expandedMenu = ref<number[]>([])
  const mobileToggle = ref(false)

  watch(activeItems, () => {
    mobileToggle.value = false
  })

  return { headerText, activeItems, expandedMenu, mobileToggle }
})

export const useNavbar = (opts: { active: ComputedRef<boolean>; text: ComputedRef<string> }) => {
  const service = navbarService.injectOptional()
  const instance = getCurrentInstance()
  const parentUids = (p?: ComponentInternalInstance | null): number[] => (p ? [p.uid, ...parentUids(p.parent)] : [])
  const setItemActive = (active: boolean) => {
    if (!active || !service) return
    service.activeItems.value = parentUids(instance)
    service.headerText.value = opts.text.value
  }

  const headerText = computed(() => service?.headerText.value)

  const toggleExpand = () => {
    if (!instance || !service) return
    if (service.expandedMenu.value.includes(instance.uid)) {
      service.expandedMenu.value = []
    } else {
      service.expandedMenu.value = parentUids(instance)
    }
  }

  const showAsActive = computed(() => {
    if (!instance || !service) return false
    return service.activeItems.value.includes(instance.uid)
  })

  const isExpanded = computed(() => {
    if (!instance || !service) return false
    if (service.expandedMenu.value.length) {
      return service.expandedMenu.value.includes(instance.uid)
    } else {
      return service.activeItems.value.includes(instance.uid)
    }
  })

  watch(opts.active, () => setItemActive(opts.active.value), { immediate: true })
  onBeforeUnmount(() => setItemActive(false))

  watchEffect(() => {
    if (headerText.value) document.title = headerText.value
  })

  return { showAsActive, isExpanded, toggleExpand, headerText }
}
</script>
<script lang="ts" setup>
useTheme()
const { headerText, mobileToggle } = navbarService.createAndProvide()

const { screenLarge } = useScreenSize()
const renderMobile = computed(() => !screenLarge.value)

function clickRoot() {
  mobileToggle.value = false
}
</script>
<style module>
.root {
  position: relative;
  display: flex;
}

.NavBar {
  background: var(--dodo-color-foreground);
  color: white;
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 0 0 220px;
  transition: all 0.1s;
}

.NavBar a {
  text-decoration: none;
}

.middle,
.footer {
  display: flex;
  flex-flow: column;
  align-content: flex-start;
}

.middle {
  flex: 1;
}

.wrapMobile {
  min-width: 0;
  display: flex;
  flex-flow: column;
  flex: 1;
}

.main {
  flex: 1;
  align-content: stretch;
  min-height: 0;
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

.menuButton {
  cursor: pointer;
}

.mobileMenu .NavBar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 50;
  max-width: 0;
}

.mobileMenu.mobileToggle .NavBar {
  max-width: 300px;
}

.mobileNav {
  display: flex;
  justify-content: space-between;
  background: var(--dodo-color-foreground);
  padding: var(--dodo-gap-3) var(--dodo-gap-4);
  align-items: center;
  color: white;
}
</style>
