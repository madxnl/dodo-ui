<template>
  <Column gap="4">
    <Column gap="0">
      <div :class="$style.bar">
        <button v-if="showArrows" :class="[$style.arrow, !spaceLeft && $style.arrowOff]" @click="clickArrow(-1)">
          <Icon name="navigate_before" size="l" />
        </button>
        <div ref="tabsDiv" :class="[$style.tabs, dragging && $style.dragging]">
          <div
            v-for="(tab, i) in tabs"
            :key="keyFor(tab)"
            :class="[$style.tab, current === keyFor(tab) && $style.active, tab.disabled && $style.disabled]"
            @click="current = keyFor(tab)"
          >
            <Text h5 :class="$style.tabName">
              <slot name="tab-title" :i="i" :tab="tab">
                {{ tab.name }}
              </slot>
            </Text>
          </div>
        </div>
        <button v-if="showArrows" :class="[$style.arrow, !spaceRight && $style.arrowOff]" @click="clickArrow(1)">
          <Icon name="navigate_next" size="l" />
        </button>
      </div>
      <Text><hr></Text>
    </Column>
    <template v-if="currentTab">
      <slot :name="currentTab.slot ?? 'default'" :tab="currentTab" />
    </template>
  </Column>
</template>

<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useCssModule, watch, watchEffect } from 'vue'
import { Column, Icon, Text, useResizeObserver } from '..'

export interface Tab {
  name: string
  disabled?: boolean
  slot?: string
}

const props = defineProps<{
  tabs: Tab[]
  tabIndex?: number
}>()

const emit = defineEmits<{
  (e: 'update:tabIndex', i: number): void
}>()

const style = useCssModule()
const tabsDiv = ref<HTMLElement>()
const current = ref('')
const currentTab = computed(() => props.tabs.find((t) => keyFor(t) === current.value))
const spaceLeft = ref(false)
const spaceRight = ref(false)
const showArrows = computed(() => spaceLeft.value || spaceRight.value)
const dragging = ref<{ startX: number; startScroll: number }>()

useResizeObserver(tabsDiv, onResizeScroll)

onMounted(() => {
  const el = tabsDiv.value!
  el.addEventListener('scroll', onResizeScroll, { passive: true })
  el.addEventListener('mousedown', mouseDownHandler)
  el.addEventListener('touchstart', mouseDownHandler)
})

onBeforeUnmount(() => {
  tabsDiv.value?.removeEventListener('scroll', onResizeScroll)
})

watchEffect(() => {
  if (!currentTab.value && props.tabs.length) {
    current.value = keyFor(props.tabs[0])
  }
})

watch(currentTab, async () => {
  await nextTick()
  const activeEl = tabsDiv.value?.querySelector('.' + style.active) as HTMLElement
  activeEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
})

watch(
  () => props.tabIndex,
  () => {
    if (props.tabIndex != null && props.tabs[props.tabIndex]) {
      current.value = keyFor(props.tabs[props.tabIndex])
    }
  },
  { immediate: true },
)

watch(
  () => currentTab.value,
  () => {
    if (currentTab.value) emit('update:tabIndex', props.tabs.indexOf(currentTab.value))
  },
  { immediate: true },
)

function mouseDownHandler(e: MouseEvent | TouchEvent) {
  const el = tabsDiv.value!
  const pos = e instanceof TouchEvent ? e.touches[0] : e
  dragging.value = { startScroll: el.scrollLeft, startX: pos.clientX }
  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('touchmove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)
  document.addEventListener('touchup', mouseUpHandler)
}

function mouseUpHandler() {
  dragging.value = undefined
  document.removeEventListener('mousemove', mouseMoveHandler)
  document.removeEventListener('touchmove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHandler)
  document.removeEventListener('touchend', mouseUpHandler)
}

function mouseMoveHandler(e: MouseEvent | TouchEvent) {
  // How far the mouse has been moved
  const pos = e instanceof TouchEvent ? e.touches[0] : e
  const dx = pos.clientX - dragging.value!.startX
  const el = tabsDiv.value
  if (!el) return
  el.scrollLeft = dragging.value!.startScroll - dx
}

function onResizeScroll() {
  const el = tabsDiv.value
  if (!el) return
  const containerWidth = el.parentElement?.clientWidth ?? 0
  const contentWidth = el.scrollWidth ?? 0
  spaceLeft.value = el.scrollLeft > 0
  spaceRight.value = el.scrollLeft + containerWidth < contentWidth
}

function keyFor(tab: Tab) {
  return tab.slot ?? tab.name
}

function clickArrow(direction: number) {
  if (!tabsDiv.value) return
  const amount = tabsDiv.value.clientWidth * 0.75
  tabsDiv.value.scrollBy({ left: direction * amount, behavior: 'smooth' })
}
</script>

<style module>
.bar {
  display: flex;
  overflow: hidden;
  user-select: none;
}
.tabs {
  overflow: hidden;
  display: flex;
  flex-grow: 1;
}
.dragging * {
  cursor: grabbing;
}
.tab {
  cursor: pointer;
  transition: all var(--dodo-transition-duration, 0.15s);
  white-space: nowrap;
  line-height: 1.7;
  padding: 0 var(--dodo-gap-2);
}
.tab::first-letter {
  text-transform: uppercase;
}
.tabName {
  border-bottom: 2px solid transparent;
  transition: all var(--dodo-transition-duration, 0.15s);
}
.tab.active .tabName {
  color: var(--dodo-color-info);
  border-color: currentColor;
}
.tab.disabled {
  pointer-events: none;
  opacity: 0.5;
}
.arrow {
  background: none;
  cursor: pointer;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  padding: 0 var(--dodo-gap-1);
}
.arrowOff {
  pointer-events: none;
  opacity: 0.35;
  box-shadow: none;
}
</style>
