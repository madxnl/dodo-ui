<template>
  <div ref="trigger" class="Tooltip_trigger" @mouseover="activate">
    <slot />
    <teleport v-if="active" to="body">
      <div ref="tooltip" class="Tooltip" :style="position">
        <div class="Tooltip_content">
          <Text class="Tooltip_text" small>
            <slot name="tooltip-text">{{ text }}</slot>
          </Text>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, ref, useSlots, watchEffect } from 'vue'
// import { mixHexColors as mixThemeColors, ThemeColor, useTheme } from '../theme'
import { useTheme } from '../theme'
import Text from './Text.vue'

// const baseColors: ThemeColor[] = [
//   'info',
//   'warn',
//   'success',
//   'danger',
// ]

const props = defineProps<{
  text?: string
  disabled?: boolean
  side?: 'left'|'right'|'top'|'bottom'
}>()

const active = ref(false)
const position = ref('')
const trigger = ref<Element>()
const tooltip = ref<Element>()
const tooltipRect = ref<DOMRect>()

function onScroll() {
  deactivate()
}

onBeforeUnmount(() => {
  deactivate()
})

const slots = useSlots()
const isDisabled = computed(() => props.disabled || !(props.text || slots['tooltip-text']))

watchEffect(() => {
  if (isDisabled.value) deactivate()
})

function onMove(event: MouseEvent) {
  const rect = tooltipRect.value!
  if (event.clientX < rect.left || event.clientX > rect.right ||
      event.clientY < rect.top || event.clientY > rect.bottom) {
    deactivate()
  }
}

async function activate() {
  if (active.value || isDisabled.value) return
  active.value = true
  await nextTick()

  const rect = trigger.value!.getBoundingClientRect()
  const size = tooltip.value!.getBoundingClientRect()
  let x = (rect.right + rect.left - size.width) / 2
  let y = rect.bottom
  if (props.side === 'right') {
    x = rect.right
    y = (rect.bottom + rect.top - size.height) / 2
  } else if (props.side === 'top') {
    x = (rect.left + rect.right - size.width) / 2
    y = rect.top - size.height
  } else if (props.side === 'left') {
    x = rect.left - size.width
    y = (rect.bottom + rect.top - size.height) / 2
  }
  y = Math.max(Math.min(y, window.innerHeight - size.height), 0)
  x = Math.max(Math.min(x, window.innerWidth - size.width), 0)
  position.value = `left:${x}px;top:${y}px`
  tooltipRect.value = rect

  window.addEventListener('scroll', onScroll, { capture: true, passive: true })
  window.addEventListener('mousemove', onMove, {})
}

function deactivate() {
  active.value = false
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('mousemove', onMove)
}

useTheme()

</script>
<style>
.Tooltip {
  padding: var(--spacing-xs);
  position: fixed;
}
.Tooltip_content {
  padding: var(--spacing-xs) var(--spacing-s);
  border: 1px solid rgba(var(--rgb-foreground), 0.2);
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  background: black;
}
.Tooltip_text {
  color: white;
  font-weight: 500;
  /* display: inline-grid;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  background: var(--color);
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font: var(--ui-font);
  font-size: calc(var(--ui-font-size) + 2px);
  font-weight: bold; */
}
</style>
