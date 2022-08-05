<template>
  <div
    ref="el" :class="[
      $style.trigger,
      disabled && $style.disabled,
    ]" @click.prevent="toggle(!active)"
  >
    <slot :is-active="active" />
  </div>

  <teleport to="body">
    <div v-if="active" ref="content" :class="$style.Dropdown" :style="dropdownStyles">
      <Container :class="$style.content" :pad="padding ?? ['xs', '0']" :gap="gap ?? '0'">
        <slot name="dropdown" :toggle="toggle" />
      </Container>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, provide, ref, watch } from 'vue'
import { Spacing } from '../theme'
import { dropdownServiceKey } from './composables'
import Container from './Container.vue'

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
    window.addEventListener('click', clickWindow, { passive: true, capture: true })
    window.addEventListener('scroll', updatePositioning, { passive: true, capture: true })
    window.addEventListener('resize', updatePositioning)
  } else {
    window.removeEventListener('click', clickWindow, { capture: true })
    window.removeEventListener('scroll', updatePositioning, { capture: true })
    window.removeEventListener('resize', updatePositioning)
  }
}

function clickWindow(e: Event) {
  // Clicking anywhere outside the dropdown closes it
  const clickOnTrigger = el.value!.contains(e.target as Node)
  const clickOnDropdown = content.value!.contains(e.target as Node)
  if (active.value && !clickOnTrigger && !clickOnDropdown) {
    toggle(false)
  }
}

function updatePositioning() {
  const contentEl = content.value!
  const { top, left, bottom, right, width } = el.value!.getBoundingClientRect()
  const dropdownAbove = Math.min(contentEl.clientHeight, top, 500) > document.documentElement.clientHeight - bottom
  const rightAligned = Math.min(contentEl.clientWidth, left) > document.documentElement.clientWidth - left
  let styles = `min-width: ${width}px;`
  if (dropdownAbove) {
    styles += `bottom: ${document.documentElement.clientHeight - top}px; max-height: ${top}px;`
  } else {
    styles += `top: ${bottom}px; max-height: ${document.documentElement.clientHeight - bottom}px;`
  }
  if (rightAligned) {
    styles += `right: ${document.documentElement.clientWidth - right}px; max-width: ${right}px;`
  } else {
    styles += `left: ${left}px; max-width: ${document.documentElement.clientWidth - left}px;`
  }
  dropdownStyles.value = styles
}

provide(dropdownServiceKey, { toggle })
</script>

<style module>
.Dropdown {
  position: fixed;
  display: grid;
  z-index: 100;
}
.trigger:not(.disabled) {
  cursor: pointer;
}
.content {
  min-width: 120px;
  min-height: 20px;
  background: white !important;
  border-radius: 4px;
  border: 1px solid rgba(var(--rgb-foreground), 0.1);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
