<template>
  <component
    :is="$attrs.onClick ? 'button' : 'span'"
    class="uiChip"
    :style="css"
    :class="classes"
  >
    <span class="uiChip_text">
      <slot />
    </span>
    <Icon v-if="closable" name="close" small />
  </component>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ThemeColor, useThemeColorRGB } from '../theme'
import Icon from './Icon.vue'

const props = defineProps<{
  color?: ThemeColor
  /* Show close icon */
  closable?: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()

const css = computed(() => {
  let s = ''
  if (props.color) s += `--chip-rgb:${useThemeColorRGB(props.color)};`
  return s
})

const classes = computed(() => [])

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
  background: rgba(var(--chip-rgb, var(--rgb-foreground)), 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  vertical-align: middle;
  border: 0;
  border-radius: 99px;
  cursor: default;
  box-sizing: border-box;
  max-width: 350px;
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
