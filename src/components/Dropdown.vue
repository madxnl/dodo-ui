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

  <div v-if="active" :class="[$style.container]" :style="dropdownStyles">
    <div ref="content" :class="$style.content" @mouseleave="onMouseLeave">
      <Column :padding="padding ?? 's'" :gap="gap ?? 's'">
        <slot name="dropdown" :toggle="toggle" />
      </Column>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, provide, ref, watch } from 'vue'
import { Column } from '.'
import type { GapSize } from '..'
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
  () => {
    toggle(!!props.modelValue)
  },
  { immediate: true }
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
      updateUntilInactive()
      window.addEventListener('click', onWindowClick, { passive: true, capture: true })
    })
  } else {
    window.removeEventListener('click', onWindowClick, { capture: true })
  }
}

function onClick(e: Event) {
  if (props.trigger !== 'hover') {
    toggle(!active.value)
    e.preventDefault() // prevent double click inside label
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

function updateUntilInactive() {
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

  if (active.value) requestAnimationFrame(updateUntilInactive)
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
  background: var(--dodo-color-box) !important;
  border-radius: 4px;
  border: 1px solid color-mix(in var(--dodo-mix-mode), var(--dodo-color-foreground) 10%, transparent);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  overflow: auto;
}
</style>
