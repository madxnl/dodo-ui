<template>
  <button
    class="UiButton"
    :style="css"
    :class="classes"
    v-bind="{ ...$attrs, onClick }"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts"> // use normal <script> to declare options
export default {
  inheritAttrs: false
}
</script>
<script lang="ts" setup>
import { computed, ref, useAttrs } from "vue";
import { useButtonVariant, useThemeColor } from "../theme";

const props = defineProps<{
  /** Set button color
   * @example color="success"
   */
  color?: string
  /** Set button variant
   * @example variant="border"
   * @example variant="text"
   */
  variant?: string
  /** Change button size
   * @example size="small"
   */
  size?: 'default'|'small'|'large'
  /** Square button for icons
   * @example square
   */
  square?: boolean
}>()

const css = computed(() => {
  let s = ''
  if (props.color) s += '--color: ' + useThemeColor(props.color)
  return s
})

const classes = computed(() => [
  { UiButton_loading: loading.value },
  useButtonVariant(props.variant ?? 'default'),
  props.size ? `UiButton_${props.size}` : null,
  props.square ? 'UiButton_square' : null,
])

const attrs = useAttrs()

const loading = ref(false)

function onClick(event: Event) {
  if (!loading.value && typeof attrs.onClick === 'function') {
    const result = attrs.onClick(event)
    if (result instanceof Promise) {
      loading.value = true
      result.finally(() => {
        loading.value = false
      })
    }
  }
}
</script>

<style lang="css">
.UiButton {
  border: 0;
  cursor: pointer;
  font: inherit;
  background: var(--color, gray);
  color: white;
  border-radius: 4px;
  padding: 2px 12px;
  min-height: 36px;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  gap: 4px;
}
.UiButton_square {
  padding: 2px;
  min-width: 36px;
}
.UiButton_border {
  background: transparent;
  color: var(--color, black);
  border: 1px solid var(--color, gray);
}
.UiButton_text {
  background: transparent;
  color: var(--color, inherit);
  box-shadow: none;
}
.UiButton_loading {
  pointer-events: none;
}
.UiButton:active,
.UiButton.UiButton_loading {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
}
.UiButton:disabled {
  opacity: 0.5;
  pointer-events: none;
}
.UiButton_small {
  padding: 2px 8px;
  min-height: 28px;
  font-size: 90%;
}
.UiButton_large {
  padding: 2px 16px;
  min-height: 40px;
  font-size: 125%;
}
.UiButton:after {
  content: '';
  border-radius: inherit;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: currentColor;
  opacity: 0;
  transition: all .1s;
  pointer-events: none;
}
.UiButton:hover:after {
  opacity: 0.1;
}
.UiButton:active:after,
.UiButton.UiButton_loading:after {
  opacity: 0.2;
}
</style>
