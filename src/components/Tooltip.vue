<template>
  <div ref="el" class="uiTooltip" @mouseenter="hover" @mouseleave="stop">
    <slot />
  </div>
  <Teleport v-if="active" to="body">
    <div class="uiTooltip_box" :style="styles">
      <div ref="label" class="uiTooltip_text">
        <slot name="tooltip" :text="text">{{ text }}</slot>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, ref } from 'vue'

defineProps<{
  text: string
  below?: boolean
  side?: 'left'|'right'|'above'|'below'
}>()

// let overflowY = window.getComputedStyle(node).overflowY;
// let isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

const el = ref<HTMLElement>()
const label = ref<HTMLElement>()
const position = ref('')
const active = ref(true)

async function hover() {
  active.value = true
  document.addEventListener('scroll', updatePosition, { capture: true })
  document.addEventListener('resize', updatePosition)
  document.addEventListener('mousemove', mousemove)
  await nextTick()
  updatePosition()
}

function mousemove(e: Event) {

}

function updatePosition() {
  const rect = el.value!.getBoundingClientRect()
  const dist = 4
  const w = 500
  const sw = document.body.clientWidth
  const top = rect.bottom + dist
  const left = Math.max(dist, Math.min(0.5 * (rect.left + rect.right - w), sw - w - dist))
  const right = Math.max(sw - w - left, dist)
  position.value = `top:${top}px;left:${left}px;right:${right}px`
}

function stop() {
  position.value = ''
  active.value = false
  document.removeEventListener('scroll', updatePosition)
  document.removeEventListener('resize', updatePosition)
  document.removeEventListener('mousemove', mousemove)
}

onBeforeUnmount(stop)

const styles = computed(() => {
  return position.value
})

</script>
<style>
.uiTooltip {
  display: grid;
}
.uiTooltip_box {
  pointer-events: none;
  position: fixed;
  padding: 4px;
  z-index: 1140;
  top: 0; left: 0; bottom: 0; right: 0;
  display: flex;
  align-items: start;
  justify-content: center;
}
.uiTooltip_text {
  padding: 6px 12px;
  color: white;
  background: var(--color-foreground);
  /* font: var(--color-body-medium); */
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  cursor: default;
}
</style>
