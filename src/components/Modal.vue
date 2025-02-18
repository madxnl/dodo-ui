<script lang="ts" setup>
import type { GapSize } from '@/composables'
import { computed, ref, watchEffect } from 'vue'
import Card from './Card.vue'
import { useCssModule } from 'vue'

const props = defineProps<{
  open: boolean
  size?: 'S' | 'M' | 'L' | 'XL'
  padding?: GapSize
  gap?: GapSize
}>()

const emit = defineEmits<{
  close: []
}>()

const css = useCssModule()
const dialogElem = ref<HTMLDialogElement>()

watchEffect(() => {
  if (dialogElem.value) {
    dialogElem.value.showModal()
  }
})

function afterEnter() {
  document.body.classList.add(css.hidescroll)
}

function beforeLeave() {
  document.body.classList.remove(css.hidescroll)
}

const open = computed(() => props.open)

function onClickDialog(e: MouseEvent) {
  const clickBackdrop = e.target === dialogElem.value
  if (clickBackdrop) {
    close()
  }
}

function close() {
  emit('close')
}

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <Teleport to="body">
    <Transition
      appear
      :enter-from-class="$style.enter"
      :leave-to-class="$style.enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
    >
      <dialog
        v-if="open"
        v-bind="$attrs"
        ref="dialogElem"
        :class="$style.dialog"
        @cancel.prevent="close"
        @click="onClickDialog"
      >
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
  background: none;
}
.dialog {
  background: rgba(0, 0, 0, 0.25);
  margin: 0;
  border: 0;
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  transition: opacity var(--modal-transition-duration);
  display: grid;
  grid-template-rows: 5vh [modal] auto 1fr;
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
  overflow: hidden;
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
.hidescroll {
  overflow: hidden;
}
</style>
