<template>
  <div
    ref="el"
    :class="[$style.trigger, disabled && $style.disabled]"
    v-bind="$attrs"
    @click="onClick"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    <slot :is-active="active" />
  </div>

  <teleport to="body">
    <div v-if="active" :class="[$style.container, 'dodo-fonts']" :style="dropdownStyles">
      <div ref="content" :class="$style.content" @mouseleave="onMouseLeave">
        <Column :padding="padding ?? '2'" :gap="gap ?? '2'">
          <slot name="dropdown" :toggle="toggle" />
        </Column>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { Column } from '@/layout'
import { GapSize } from '@/ui'
import { nextTick, onBeforeUnmount, provide, ref, watch } from 'vue'
import { dropdownServiceKey } from '../composables'

const props = defineProps<{
  /** Use v-model to modify dropdown state from outside */
  modelValue?: boolean
  /** Change padding around dropdown content */
  padding?: GapSize
  /** Change gap between dropdown content */
  gap?: GapSize
  /** (temporaily) disable dropdown functionality */
  disabled?: boolean
  /** Change trigger event */
  trigger?: 'hover'
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const active = ref(false)
const dropdownStyles = ref('')
const content = ref<HTMLElement>()
const el = ref<HTMLElement>()

watch(
  () => props.modelValue,
  () => toggle(!!props.modelValue),
  { immediate: true },
)

onBeforeUnmount(() => {
  toggle(false)
})

function toggle(show: boolean) {
  if (active.value === show) return
  if (props.disabled && show) return
  active.value = show
  emit('update:modelValue', show)
  if (show) {
    nextTick().then(() => {
      updatePositioning()
      window.addEventListener('click', onWindowClick, { passive: true, capture: true })
      window.addEventListener('scroll', onWindowScroll, { passive: true, capture: true })
      window.addEventListener('resize', onWindowScroll)
    })
  } else {
    window.removeEventListener('click', onWindowClick, { capture: true })
    window.removeEventListener('scroll', onWindowScroll, { capture: true })
    window.removeEventListener('resize', onWindowScroll)
  }
}

function onClick() {
  if (props.trigger !== 'hover') {
    toggle(!active.value)
  }
}

function onMouseOver() {
  if (props.trigger === 'hover') {
    toggle(true)
  }
}

function onMouseLeave(e: MouseEvent) {
  if (!active.value || props.trigger !== 'hover') return
  const cur = e.relatedTarget as HTMLElement
  const clickOnTrigger = el.value?.contains(cur)
  const clickOnDropdown = content.value?.contains(cur)
  if (clickOnTrigger || clickOnDropdown) return
  toggle(false)
}

function onWindowClick(e: Event) {
  // Clicking anywhere outside the dropdown closes it
  if (e.target) {
    const clickOnTrigger = el.value?.contains(e.target as Node)
    const clickOnDropdown = content.value?.contains(e.target as Node)
    if (clickOnTrigger || clickOnDropdown) return
  }
  toggle(false)
}

function onWindowScroll() {
  toggle(false)
}

function updatePositioning() {
  const margin = 16
  const contentEl = content.value
  if (!contentEl) return
  const contentWidth = contentEl.scrollWidth
  const buttonRect = el.value!.getBoundingClientRect()
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const dropdownAbove = buttonRect.bottom + 300 + margin > windowHeight
  const left = Math.max(margin, Math.min(buttonRect.left, windowWidth - contentWidth - margin))
  const maxWidth = Math.min(600, windowWidth - margin * 2)
  let styles = `left: ${left}px; max-width:${maxWidth}px;`
  if (dropdownAbove) {
    styles += `bottom: ${windowHeight - buttonRect.top}px; max-height: ${buttonRect.top - margin}px;`
  } else {
    styles += `top: ${buttonRect.bottom}px; max-height: ${windowHeight - buttonRect.bottom - margin}px;`
  }
  dropdownStyles.value = styles
}

provide(dropdownServiceKey, { toggle })
</script>

<style module>
.trigger:not(.disabled) {
  cursor: pointer;
  min-width: 0;
}
.container {
  position: fixed;
  display: flex;
  z-index: 100;
}
.content {
  background: white !important;
  border-radius: 4px;
  border: 1px solid rgba(var(--dodo-rgb-foreground), 0.1);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  overflow: auto;
}
</style>
