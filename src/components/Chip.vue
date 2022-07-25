<template>
  <component
    :is="$attrs.onClick ? 'button' : 'span'"
    class="uiChip"
    :style="css"
  >
    <slot name="before" />
    <span class="uiChip_text"><slot /></span>
    <slot name="after" />
  </component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ThemeColor, useThemeColorRGB } from '../theme'

const props = defineProps<{
  color?: ThemeColor
}>()

const css = computed(() => {
  let s = ''
  if (props.color) s += `--chip-rgb:${useThemeColorRGB(props.color)};`
  return s
})

</script>
<style>
.uiChip {
  font: var(--ui-font);
  font-size: calc(var(--ui-font-size) - 1px);
  font-weight: 500;
  padding: 0 10px;
  --height: 28px;
  height: var(--height);
  line-height: var(--height);
  white-space: nowrap;
  color: rgb(var(--chip-rgb, var(--rgb-foreground)));
  background: rgba(var(--chip-rgb, var(--rgb-foreground)), 0.15);
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
.uiChip_text {
  overflow: hidden;
  text-overflow: ellipsis;
}
button.uiChip {
  cursor: pointer;
  position: relative;
}
button.uiChip:hover {
  cursor: pointer;
}
button.uiChip:after {
  content: '';
  border-radius: inherit;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: currentColor;
  opacity: 0;
  transition: all .1s;
  pointer-events: none;
}
button.uiChip:hover:after {
  opacity: 0.1;
}
button.uiChip:active:after {
  opacity: 0.2;
}
</style>
