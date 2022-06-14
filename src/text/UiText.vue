<template>
  <component
    class="Text"
    :class="classes"
    :is="tag"
    :style="css"
  ><slot></slot></component>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useTextVariant, useThemeColor } from "../theme";

const props = withDefaults(defineProps<{
  /** Change text color
   * @example color="#FFAA00"
   * @example :color="success"
   */
  color?: string
  /** Change text variant
   * @example fontsize="200%"
   * @example fontsize="12px"
   * @example :fontsize="headingSize"
   */
  variant?: string
  /** Show ellipsis instead of wrapping if text does not fit on one line
   */
  nowrap?: boolean
  /** Set text-align property
   */
  textAlign?: 'left'|'center'|'right'
}>(), {
  variant: 'p',
})

const css = computed(() => {
  let s = ''
  if (props.color) s += `color:${useThemeColor(props.color)};`
  return s
})

const classes = computed(() => useTextVariant(props.variant))

const textTags = 'p b strong i em mark small pre h1 h2 h3 h4 h5 h6 blockquote code'

const tag = computed(() => textTags.includes(props.variant) ? props.variant : 'span')
</script>
<style>
.UiText {
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
.UiText_p {
  font: 14px/22px sans-serif;
  color: #222222;
}
.UiText_h1 {
  font: 24px/30px sans-serif;
  color: black;
}
.UiText_h2 {
  font: 20px/22px sans-serif;
  color: black;
}
.UiText_h3 {
  font: 16px/22px sans-serif;
  color: black;
}
.UiText_small {
  font-size: 12px;
}
</style>
