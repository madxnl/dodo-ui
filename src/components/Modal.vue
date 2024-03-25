<script lang="ts" setup>
import type { GapSize } from '@/composables'
import { computed, ref, watch, watchEffect } from 'vue'
import Card from './Card.vue'

const props = defineProps<{
  open: boolean
  size?: 'S' | 'L'
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

function onClick(e: MouseEvent) {
  const el = dialogElem.value!
  if (e.target === el) {
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
  <Transition appear :enter-from-class="$style.enter" :leave-to-class="$style.enter" @after-leave="afterLeave">
    <dialog v-if="open" ref="dialogElem" :class="$style.background" @click="onClick">
      <Card :class="[$style.modal, size && $style[size]]" :padding="padding" :gap="gap">
        <slot :close="close">Modal slot</slot>
      </Card>
    </dialog>
  </Transition>
</template>

<style module>
:root {
  --modal-transition-duration: 0.2s;
}
.background {
  background: rgba(0, 0, 0, 0.25);
  transition: opacity var(--modal-transition-duration);
  border: none;
  min-width: 100%;
  min-height: 100%;
  display: grid;
  place-items: center;
}
.background::backdrop {
  background: none;
}
.enter {
  opacity: 0;
}
.modal {
  width: 480px;
  max-width: calc(100vw - 32px);
  box-shadow: var(--dodo-shadow-modal);
  box-sizing: border-box;
  transition: transform var(--modal-transition-duration);
  color: var(--dodo-color-text);
  padding: var(--dodo-spacing-m);
  gap: var(--dodo-spacing-m);
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
</style>
