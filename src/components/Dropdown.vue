<script lang="ts" setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import type { GapSize } from '..'
import Card from './Card.vue'

declare module 'vue' {
  interface HTMLAttributes {
    popover?: boolean
  }
}

const props = defineProps<{
  open?: boolean
  padding?: GapSize
  gap?: GapSize
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
}>()

defineSlots<{
  trigger(props: { toggle: () => void; open: boolean }): void
  content(props: { close: () => void }): void
}>()

const isOpen = ref(false)
const triggerEl = ref<HTMLElement>()
const contentElem = ref<HTMLElement>()
const dialogElem = ref<HTMLDialogElement>()

const positionCss = ref('')

function computeCss() {
  positionCss.value = ''
  if (!triggerEl.value || !contentElem.value) return
  const triggerRect = triggerEl.value.getBoundingClientRect()
  const contentRect = contentElem.value.getBoundingClientRect()

  const margin = 16
  const distance = 4
  // const minSpaceBelow = 500
  const maxWidthBase = 600

  const spaceBelow = window.innerHeight - margin - triggerRect.bottom - distance
  const contentHeight = contentElem.value.scrollHeight
  const spaceAbove = triggerRect.top - margin - distance
  const dropdownAbove = spaceBelow < spaceAbove && contentHeight + distance > spaceBelow
  const space = dropdownAbove ? spaceAbove : spaceBelow
  const maxHeight = Math.min(space, 600)
  const height = Math.min(contentHeight, maxHeight)
  const top = dropdownAbove ? triggerRect.top - height - distance : triggerRect.bottom + distance

  const availableWidth = window.innerWidth - 2 * margin
  const minWidth = triggerRect.right - triggerRect.left
  const maxWidth = Math.max(minWidth, Math.min(maxWidthBase, availableWidth))
  const width = Math.min(maxWidth, contentRect.width)
  const maxLeft = window.innerWidth - width - 2 * margin
  const left = Math.max(margin, Math.min(triggerRect.left, maxLeft))

  positionCss.value = `
    left: ${Math.round(left)}px;
    top: ${Math.round(top)}px;
    min-width: ${Math.round(minWidth)}px;
    max-width: ${Math.round(maxWidth)}px;
    max-height: ${Math.round(maxHeight)}px;
  `
  // max-width: ${Math.round(maxWidth)}px;
}

onBeforeUnmount(close)

watch(() => [dialogElem.value, props.open], onPropChange, { immediate: true })

function onPropChange() {
  if (props.open !== isOpen.value) toggle()
}

function toggle() {
  if (!props.disabled) dialogElem.value?.togglePopover()
}

function show() {
  if (!props.disabled && !isOpen.value) dialogElem.value?.showPopover()
}

function close() {
  dialogElem.value?.hidePopover()
}

function updateUntilInactive() {
  computeCss()
  if (isOpen.value) requestAnimationFrame(updateUntilInactive)
}

function onToggle(e: ToggleEvent) {
  const opened = e.newState === 'open'
  if (isOpen.value === opened) return
  isOpen.value = opened
  emit('update:open', opened)
  if (opened) {
    updateUntilInactive()
  }
}
</script>
<template>
  <div :class="$style.dropdown">
    <div ref="triggerEl" :class="$style.trigger">
      <slot name="trigger" :open="isOpen" :toggle="show"> Trigger </slot>
    </div>

    <div ref="dialogElem" popover :class="$style.dialog" :style="positionCss" @toggle="onToggle">
      <Card v-if="isOpen" :class="$style.card" padding="0">
        <div ref="contentElem" :class="$style.content">
          <slot name="content" :close="close">Modal slot</slot>
        </div>
      </Card>
    </div>
  </div>
</template>
<style module>
.dropdown {
  display: grid;
}
.trigger {
  display: grid;
}
.dialog {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0;
  background: none;
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  overflow: visible;
  z-index: 100;
}
.card {
  box-shadow: var(--dodo-shadow-modal);
  overflow: hidden;
}
.content {
  box-sizing: border-box;
  scrollbar-width: thin;
  overflow: auto;
  display: grid;
  gap: var(--dodo-spacing-s);
  padding: var(--dodo-spacing-m);
}
</style>
