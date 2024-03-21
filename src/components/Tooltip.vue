<template>
  <div ref="trigger" :class="$style.trigger" @mouseover="activate" @mouseleave="deactivate">
    <slot />
    <teleport v-if="active" to="body">
      <div ref="tooltip" :class="$style.Tooltip" :style="position">
        <div :class="$style.content">
          <small :class="$style.text">
            <slot name="tooltip-text">{{ text }}</slot>
          </small>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, ref, useSlots } from 'vue'
import { useTheme } from '..'

const props = defineProps<{
  text?: string
  disabled?: boolean
  side?: 'left' | 'right' | 'top' | 'bottom'
}>()

const active = ref(false)
const position = ref('')
const trigger = ref<Element>()
const tooltip = ref<Element>()

const slots = useSlots()
const isDisabled = computed(() => props.disabled || !(props.text || slots['tooltip-text']))

onBeforeUnmount(deactivate)

async function activate() {
  if (active.value || isDisabled.value) return
  active.value = true
  await nextTick()

  const rect = trigger.value!.getBoundingClientRect()
  const size = tooltip.value!.getBoundingClientRect()

  // Determine side
  let side = props.side ?? 'bottom'
  const spaceBelow = rect.bottom + size.height < window.innerHeight
  if (!spaceBelow && side === 'bottom') side = 'top'

  // Position
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
  // Constrain to viewport
  y = Math.round(Math.max(Math.min(y, window.innerHeight - size.height), 0))
  x = Math.round(Math.max(Math.min(x, window.innerWidth - size.width), 0))
  position.value = `left:${x}px;top:${y}px`
}

function deactivate() {
  active.value = false
}

useTheme()
</script>
<style module>
.Tooltip {
  padding: var(--dodo-spacing-xs);
  position: fixed;
  pointer-events: none;
  z-index: 1000;
}
.content {
  padding: var(--dodo-spacing-xs) var(--dodo-spacing-s);
  border: 1px solid color-mix(in var(--dodo-mix-mode), var(--dodo-color-foreground) 20%, transparent);
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  background: black;
}
.text {
  color: white;
  font-weight: var(--dodo-weight-bold);
}
.trigger {
  display: inline-block;
}
</style>
