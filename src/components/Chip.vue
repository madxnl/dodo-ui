<template>
  <component
    :is="$attrs.onClick ? 'button' : 'span'"
    class="uiChip"
    :style="css"
    :class="classes"
  >
    <slot />
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
  if (props.color) s += `--tag-rgb:${useThemeColorRGB(props.color)};`
  return s
})

const classes = computed(() => [
  // { uiButton_loading: loading.value },
  // `uiButton_${props.variant ?? 'default'}`,
  // props.small ? 'uiButton_small' : null,
  // props.square ? 'uiButton_square' : null,
  // props.active ? 'uiButton_active' : null,
  // props.rounded ? 'uiButton_rounded' : null,
])

</script>
<style>
.uiChip {
  font: var(--ui-font);
  font-weight: 500;
  padding: 0 12px;
  height: 28px;
  line-height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(var(--tag-rgb, var(--rgb-foreground)));
  background: rgba(var(--tag-rgb, var(--rgb-foreground)), 0.2);
  display: inline-block;
  gap: 4px;
  vertical-align: middle;
  border: 0;
  border-radius: 99px;
  cursor: default;
  box-sizing: border-box;
  max-width: 350px;
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
