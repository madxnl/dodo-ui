<template>
  <TransitionGroup v-if="list" name="dodo" :css="!skipAnimations">
    <slot />
  </TransitionGroup>
  <Transition v-else :appear="appear" name="dodo" :css="!skipAnimations" mode="out-in">
    <slot />
  </Transition>
</template>

<script lang="ts" setup>
import { useStyle } from '..'

// Skip animations in test mode
const skipAnimations = false // import.meta.env.MODE === 'test'

defineProps<{
  /* Use TransitionGroup instead of Transition */
  list?: boolean
  appear?: boolean
  // slide?: 'left' | 'right' | 'top' | 'bottom'
}>()

useStyle()
</script>
<style>
.dodo-enter-active,
.dodo-leave-active {
  transition: opacity var(--dodo-transition-duration, 0.15s) ease;
}
.dodo-enter-from,
.dodo-leave-to {
  opacity: 0;
}
</style>
