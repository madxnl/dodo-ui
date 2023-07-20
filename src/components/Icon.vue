<template>
  <span
    ref="el"
    :style="[
      color ? `color: ${useColorProp(color)};` : '',
      webfont.isReady ? '' : 'visibility:hidden',
    ]"
    :class="[
      $style.Icon,
      'material-symbols-' + theme.iconStyle.toLowerCase(),
      props.size && $style[props.size],
      props.fill && $style.fill,
    ]"
  >
    {{ name }}
  </span>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ColorProp, useColorProp, useTheme } from '..'
import { useWebFont } from '../composables'
import { IconName } from './iconNames'

const props = defineProps<{
  /** The icon name
   * @example icon="plus"
   */
  name: IconName
  /** Change icon color
   * @example color="success"
   */
  color?: ColorProp
  /** Filled variant
   */
  fill?: boolean
  size?: 'xs'|'s'|'m'|'l'|'xl'
}>()

const theme = useTheme()

const el = ref<HTMLElement>()

const webfont = useWebFont({
  id: 'DodoMaterialIcon',
  href: () => `https://fonts.googleapis.com/css2?family=Material+Symbols+${theme.iconStyle}:wght,FILL@${theme.iconWeight},0..1`,
  font: () => `${theme.iconWeight} 1em 'Material Symbols ${theme.iconStyle}'`,
})

</script>

<style module>
span.Icon {
  height: 1em;
  width: 1em;
  display: inline-block;
  font-size: 1.5em;
  user-select: none;
  vertical-align: -25%;
  overflow: hidden;
  flex-grow: 0;
}
.Icon.fill {
  font-variation-settings: 'FILL' 1;
}
.Icon.xs { font-size: 1em; }
.Icon.s { font-size: 1.25em; }
.Icon.l { font-size: 2em; }
.Icon.xl { font-size: 2.5em; }
</style>
