<template>
  <div ref="trigger" :class="$style.trigger" @mouseenter="activate" @mouseleave="deactivate">
    <slot />
    <teleport v-if="active" to="body">
      <div ref="tooltip" :class="$style.Tooltip" :style="position">
        <div :class="$style.content">
          <Text :class="$style.text" small>
            <slot name="tooltip-text">{{ text }}</slot>
          </Text>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, ref, useSlots } from 'vue'
import { Text } from '..'
import { useTheme } from '../theme'

const props = defineProps<{
  text?: string
  disabled?: boolean
  side?: 'left'|'right'|'top'|'bottom'
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
  padding: var(--dodo-gap-1);
  position: fixed;
  pointer-events: none;
}
.content {
  padding: var(--dodo-gap-1) var(--dodo-gap-2);
  border: 1px solid rgba(var(--dodo-rgb-foreground), 0.2);
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  background: black;
}
.text {
  color: white;
  font-weight: var(--dodo-font-weightSemi);
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
  font: var(--dodo-font-base);
  font-size: calc(var(--dodo-font-size) + 2px);
  font-weight: bold; */
}
</style>
