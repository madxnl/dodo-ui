<template>
  <component
    :is="$attrs.onClick ? 'button' : 'div'"
    :class="[$style.Chip, variant === 'solid' && $style.solid]"
    :style="css"
  >
    <slot name="before" />
    <div :class="$style.text"><slot /></div>
    <slot name="after" />
  </component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { ColorProp } from '..'

const props = defineProps<{
  color?: ColorProp
  variant?: 'solid'
}>()

const css = computed(() => {
  let s = ''
  if (props.color) s += `--chip-color:var(--dodo-color-${props.color});`
  return s
})
</script>
<style module>
.Chip {
  font: var(--dodo-font-base);
  font-size: var(--dodo-font-small);
  padding: 0 12px;
  --height: 30px;
  height: var(--height);
  line-height: var(--height);
  white-space: nowrap;
  --chip-color: var(--dodo-color-text);
  color: var(--chip-color);
  background: color-mix(in lab, var(--chip-color) 15%, transparent);
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  border: 1px solid color-mix(in lab, var(--chip-color) 10%, transparent);
  border-radius: 99px;
  cursor: default;
  box-sizing: border-box;
  /* max-width: 300px; */
  overflow: hidden;
  gap: 4px;
  font-weight: 500;
  max-width: initial;
}
.solid {
  background: var(--chip-color);
  color: white;
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
}
button.Chip {
  cursor: pointer;
  position: relative;
}
button.Chip:hover {
  cursor: pointer;
}
button.Chip:after {
  content: '';
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: currentColor;
  opacity: 0;
  transition: all 0.1s;
  pointer-events: none;
}
button.Chip:hover:after {
  opacity: 0.1;
}
button.Chip:active:after {
  opacity: 0.2;
}
</style>
