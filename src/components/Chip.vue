<template>
  <component
    :is="$attrs.onClick ? 'button' : 'span'"
    :class="$style.Chip"
    :style="css"
  >
    <slot name="before" />
    <span :class="$style.text"><slot /></span>
    <slot name="after" />
  </component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ColorProp, colorPropToRGB } from '../theme'

const props = defineProps<{
  color?: ColorProp
}>()

const css = computed(() => {
  let s = ''
  if (props.color) s += `--chip-rgb:${colorPropToRGB(props.color)};`
  return s
})

</script>
<style module>
.Chip {
  font: var(--dodo-font-family);
  font-size: calc(var(--dodo-font-size) - 1px);
  font-weight: 500;
  padding: 0 10px;
  --height: 28px;
  height: var(--height);
  line-height: var(--height);
  white-space: nowrap;
  color: rgb(var(--chip-rgb, var(--dodo-rgb-foreground)));
  background: rgba(var(--chip-rgb, var(--dodo-rgb-foreground)), 0.15);
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  border: 0;
  border-radius: 99px;
  cursor: default;
  box-sizing: border-box;
  max-width: 300px;
  overflow: hidden;
  gap: 4px;
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
  top: 0; left: 0; right: 0; bottom: 0;
  background: currentColor;
  opacity: 0;
  transition: all .1s;
  pointer-events: none;
}
button.Chip:hover:after {
  opacity: 0.1;
}
button.Chip:active:after {
  opacity: 0.2;
}
</style>
