<template>
  <span
    ref="el"
    :style="color ? `color: ${useColorProp(color)};` : ''"
    :class="[
      $style.Icon,
      'material-symbols-' + theme.iconStyle.toLowerCase(),
      props.small && $style.small,
      props.large && $style.large,
      props.fill && $style.fill,
    ]"
  >
    {{ name }}
  </span>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { ColorProp, useColorProp, useTheme } from '../theme'
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
  small?: boolean
  large?: boolean
}>()

const theme = useTheme()

const el = ref<HTMLElement>()

watchEffect(() => {
  const id = 'ui-icon-import'
  const href = 'https://fonts.googleapis.com/css2?family=' +
    `Material+Symbols+${theme.iconStyle}:wght,FILL@${theme.iconWeight},0..1`
  let link = document.getElementById(id)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('id', id)
    document.head.appendChild(link)
  }
  if (link.getAttribute('href') !== href) {
    link.setAttribute('href', href)
  }
})

</script>

<style module>
.Icon {
  height: 1em;
  width: 1em;
  font-size: 24px;
  user-select: none;
  vertical-align: middle;
}
.Icon.small {
  font-size: 18px;
}
.Icon.large {
  font-size: 32px;
}
.Icon.fill {
  font-variation-settings: 'FILL' 1;
}
</style>
