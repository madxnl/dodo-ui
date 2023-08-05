<template>
  <teleport to="body">
    <Transition name="Dialog">
      <div v-if="active" ref="el" :class="$style.Dialog">
        <div :class="$style.window">
          <Column padding="4">
            <slot />
          </Column>
          <Row padding="4" justify="end" gap="2">
            <slot name="controls" />
          </Row>
        </div>
      </div>
    </Transition>
  </teleport>
</template>
<script lang="ts" setup>
import { Column, Row } from '@/index'
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  active: boolean
}>()

const el = ref<HTMLElement>()

watchEffect(() => {
  // Make sure active element is on top
  if (props.active && el.value) {
    el.value.parentNode!.appendChild(el.value)
  }
})
</script>
<style module>
.Dialog {
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  justify-content: stretch;
  overflow: auto;
}
.window {
  background: white;
  border-radius: 4px;
  width: 500px;
  max-width: 100%;
  box-shadow: var(--dodo-shadow-5);
}

.Dialog-enter-active,
.Dialog-leave-active {
  transition: opacity 0.1s ease;
}
.Dialog-enter-from,
.Dialog-leave-to {
  opacity: 0;
}
.Dialog-enter-active .window,
.Dialog-leave-active .window {
  transition: top 0.1s ease;
  position: relative;
  top: 0;
}
.Dialog-enter-from .window,
.Dialog-leave-to .window {
  top: -16px;
}
</style>
