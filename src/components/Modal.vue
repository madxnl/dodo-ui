<script lang="ts" setup>
import type { GapSize } from '@/composables'
import { computed, ref, watch, watchEffect } from 'vue'
import Card from './Card.vue'

const props = defineProps<{
  open: boolean
  size?: 'S' | 'M' | 'L' | 'XL'
  padding?: GapSize
  gap?: GapSize
}>()

const emit = defineEmits<{
  close: []
}>()

const dialogElem = ref<HTMLDialogElement>()

watchEffect(() => {
  dialogElem.value?.showModal()
})

const open = computed(() => props.open)

watch(open, (value) => {
  if (value) {
    // Hide the body scrollbar while the modal is open
    const scrollbarWidth = window.innerWidth - document.body.clientWidth
    document.body.style.setProperty('padding-right', `${scrollbarWidth}px`)
    document.body.style.setProperty('overflow', `hidden`)
  }
})

function onPointerdown(e: MouseEvent) {
  const el = dialogElem.value!
  if (e.target === el && e.clientX < el.scrollWidth) {
    close()
  }
}

function close() {
  emit('close')
}

async function afterLeave() {
  document.body.style.removeProperty('padding-right')
  document.body.style.removeProperty('overflow')
}
</script>

<template>
  <Teleport to="body">
    <Transition appear :enter-from-class="$style.enter" :leave-to-class="$style.enter" @after-leave="afterLeave">
      <dialog v-if="open" ref="dialogElem" :class="$style.dialog" @cancel.prevent="close" @pointerdown="onPointerdown">
        <div :class="[$style.modal, size && $style[size]]">
          <Card :class="$style.card" :padding="padding ?? 'l'" :gap="gap ?? 'm'">
            <slot :close="close">Modal slot</slot>
          </Card>
        </div>
      </dialog>
    </Transition>
  </Teleport>
</template>

<style module>
:root {
  --modal-transition-duration: 0.2s;
}
.dialog::backdrop {
  background: rgba(0, 0, 0, 0.25);
}
.dialog {
  margin: 0;
  border: 0;
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  background: none;
  transition: opacity var(--modal-transition-duration);
  display: grid;
  grid-template-rows: 1fr [modal] auto 2fr;
  justify-content: center;
}
.enter {
  opacity: 0;
}
.modal {
  grid-row: modal;
  width: 480px;
  max-width: 100%;
  margin: var(--dodo-spacing-l);
  transition: transform var(--modal-transition-duration);
}
.card {
  box-shadow: var(--dodo-shadow-modal);
  color: var(--dodo-color-text);
}
.enter .modal {
  transform: translateY(-16px);
}
.S {
  width: 320px;
}
.L {
  width: 640px;
}
.XL {
  width: 960px;
}
</style>
