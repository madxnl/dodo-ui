<template>
  <span
    ref="el"
    :style="[color ? `color: var(--dodo-color-${color});` : '', webfont.isReady ? '' : 'visibility:hidden']"
    :class="[
      $style.icon,
      'material-symbols-' + iconStyle.toLowerCase(),
      props.size && $style[props.size],
      props.fill && $style.fill
    ]"
  >
    {{ name }}
  </span>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { ColorProp, IconName } from '..'
import { useWebFont } from '../composables'

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
  small?: -1
  large?: -1
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
}>()

const iconStyle = 'Outlined' as 'Outlined' | 'Sharp' | 'Rounded'
const iconWeight = '300' as '100' | '200' | '300' | '400' | '500' | '600' | '700'

const el = ref<HTMLElement>()

const webfont = useWebFont({
  weight: iconWeight,
  name: `Material Symbols ${iconStyle}`,
  href: `https://fonts.googleapis.com/css2?family=Material+Symbols+${iconStyle}:wght,FILL@${iconWeight},0..1`
})
</script>

<style module>
span.icon {
  height: 1em;
  width: 1em;
  display: inline-block;
  font-size: 1.5em;
  user-select: none;
  vertical-align: -25%;
  overflow: hidden;
  flex-grow: 0;
}
.icon.fill {
  font-variation-settings: 'FILL' 1;
}
.icon.xs {
  font-size: 1em;
}
.icon.s {
  font-size: 1.25em;
}
.icon.l {
  font-size: 2em;
}
.icon.xl {
  font-size: 2.5em;
}
</style>
