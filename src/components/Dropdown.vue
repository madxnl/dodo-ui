<script lang="ts" setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
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
const triggerRect = ref<DOMRect>()
const contentRect = ref<DOMRect>()
const el = ref<HTMLElement>()
const dialogElem = ref<HTMLDialogElement>()

const positionCss = computed(() => {
  if (!triggerRect.value || !contentRect.value) return ''
  const margin = 16
  const distance = 2
  const contentWidth = contentRect.value.width
  const trigger = triggerRect.value
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const spaceBelow = windowHeight - margin - trigger.bottom - distance
  const dropdownAbove = spaceBelow < 300
  const left = Math.max(margin, Math.min(trigger.left, windowWidth - contentWidth - 2 * margin))
  const maxWidth = Math.min(600, windowWidth - margin * 2)
  let top = trigger.bottom + distance
  let maxHeight = spaceBelow
  if (dropdownAbove) {
    top = trigger.top - contentRect.value.height - distance
    maxHeight = trigger.top - margin - distance
  }
  return {
    left: `${Math.round(left)}px`,
    top: `${Math.round(top)}px`,
    maxWidth: `${Math.round(maxWidth)}px`,
    maxHeight: `${Math.round(maxHeight)}px`
  }
})

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
  triggerRect.value = el.value?.getBoundingClientRect()
  contentRect.value = dialogElem.value?.getBoundingClientRect()
  if (isOpen.value) requestAnimationFrame(updateUntilInactive)
}

function onToggle(e: ToggleEvent) {
  isOpen.value = e.newState === 'open'
  emit('update:open', isOpen.value)
  if (isOpen.value) {
    updateUntilInactive()
  }
}
</script>
<template>
  <div ref="el" :class="$style.dropdown">
    <slot name="trigger" :open="isOpen" :toggle="show"> Trigger </slot>

    <div
      ref="dialogElem"
      popover
      :class="$style.dialog"
      :style="positionCss"
      @cancel.prevent="close"
      @toggle="onToggle"
    >
      <Card v-if="isOpen" :class="$style.content" :padding="padding" :gap="gap">
        <slot name="content" :close="close">Modal slot</slot>
      </Card>
    </div>
  </div>
</template>
<style module>
.dropdown {
  display: grid;
}
.content {
  box-shadow: var(--dodo-shadow-modal);
}
.dialog {
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
</style>
