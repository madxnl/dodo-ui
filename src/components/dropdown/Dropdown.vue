<template>
  <div
    ref="el"
    :class="[
      $style.trigger,
      disabled && $style.disabled,
    ]"
    v-bind="$attrs"
    @click.prevent="toggle(!active)"
  >
    <slot :is-active="active" />
  </div>

  <teleport to="body">
    <div v-if="active" ref="content" :class="$style.Dropdown" :style="dropdownStyles">
      <Column :class="$style.content" :padding="padding ?? ['1', '0']" :gap="gap ?? '0'">
        <slot name="dropdown" :toggle="toggle" />
      </Column>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, provide, ref, watch } from 'vue'
import { Column } from '..'
import { dropdownServiceKey } from '../../composables/composables'
import { Spacing } from '../../theme'

const props = defineProps<{
  /** Use v-model to modify dropdown state from outside */
  modelValue?: boolean
  /** Change padding around dropdown content */
  padding?: Spacing
  /** Change gap between dropdown content */
  gap?: Spacing
  /** (temporaily) disable dropdown functionality */
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const active = ref(false)
const dropdownStyles = ref('')
const content = ref<HTMLElement>()
const el = ref<HTMLElement>()

watch(() => props.modelValue, modelValue => {
  toggle(!!modelValue)
})

onBeforeUnmount(() => {
  toggle(false)
})

async function toggle(show: boolean) {
  if (active.value === show) return
  if (props.disabled && show) return
  active.value = show
  emit('update:modelValue', show)
  if (show) {
    await nextTick()
    updatePositioning()
    window.addEventListener('click', onWindowEvent, { passive: true, capture: true })
    window.addEventListener('scroll', onWindowEvent, { passive: true, capture: true })
    window.addEventListener('resize', onWindowEvent)
  } else {
    window.removeEventListener('click', onWindowEvent, { capture: true })
    window.removeEventListener('scroll', onWindowEvent, { capture: true })
    window.removeEventListener('resize', onWindowEvent)
  }
}

function onWindowEvent(e: Event) {
  // Clicking anywhere outside the dropdown closes it
  if (e.target) {
    const clickOnTrigger = el.value!.contains(e.target as Node)
    const clickOnDropdown = content.value?.contains(e.target as Node)
    if (clickOnTrigger || clickOnDropdown) return
  }
  toggle(false)
}

function updatePositioning() {
  const margin = 24
  const sep = 1
  const { top, left, bottom, width } = el.value!.getBoundingClientRect()
  const W = document.body.clientWidth
  const H = document.body.clientHeight
  const contentEl = content.value
  let styles = `min-width: ${width}px;`
  if (contentEl) {
    const dropdownAbove = Math.min(contentEl.clientHeight, top, 500) > H - bottom
    const maxW = Math.min(W - left - margin, 500)
    styles += `left: ${left}px; max-width: ${maxW}px;`
    if (dropdownAbove) {
      styles += `bottom: ${H - top - sep}px; max-height: ${top - margin - sep}px;`
    } else {
      styles += `top: ${bottom + sep}px; max-height: ${H - bottom - margin - sep}px;`
    }
  }
  // styles += `right: ${W - right}px; max-width: ${right - margin}px;`
  dropdownStyles.value = styles
}

provide(dropdownServiceKey, { toggle })
</script>

<style module>
.Dropdown {
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 100;
}
.trigger:not(.disabled) {
  cursor: pointer;
  flex-grow: 1;
  min-width: 0;
}
.content {
  background: white !important;
  border-radius: 4px;
  border: 1px solid rgba(var(--dodo-rgb-foreground), 0.1);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 120px;
  min-height: 20px;
  width: 100%;
}
</style>
