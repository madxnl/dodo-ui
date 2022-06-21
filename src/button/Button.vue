<template>
  <button
    class="uiButton"
    :style="css"
    :type="type ?? 'button'"
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
import { useButtonVariant, useThemeColor, useThemeCssVars } from "../theme";

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
  /** Set button type to 'submit' to trigger form submit
   * @example type="submit"
   */
  type?: 'button'|'submit'
  /** Square button for icons
   * @example square
   */
  square?: boolean
  /** Change button size
   * @example small
   */
  small?: boolean
}>()

useThemeCssVars()

const css = computed(() => {
  let s = ''
  if (props.color) s += '--color: ' + useThemeColor(props.color)
  return s
})

const classes = computed(() => [
  { uiButton_loading: loading.value },
  useButtonVariant(props.variant ?? 'default'),
  props.small ? `uiButton_small` : null,
  props.square ? 'uiButton_square' : null,
])

const attrs = useAttrs()

const loading = ref(false)

async function onClick(event: Event) {
  if (!loading.value && typeof attrs.onClick === 'function') {
    const result = attrs.onClick(event)
    if (result instanceof Promise) {
      loading.value = true
      await result.finally(() => {
        loading.value = false
      })
    }
  }
}
</script>

<style lang="css">
.uiButton {
  border: 0;
  cursor: pointer;
  font: inherit;
  background: transparent;
  color: var(--color, var(--color-heading));
  border-radius: 4px;
  padding: 2px 14px;
  min-height: 36px;
  min-width: 36px;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  gap: 4px;
}
.uiButton_solid {
  background: var(--color, var(--color-heading));
  color: white;
}
.uiButton_default:before {
  content: '';
  border-radius: inherit;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  opacity: 0.35;
  pointer-events: none;
  border: 1px solid currentColor;
}
.uiButton_text {
  background: transparent;
  color: var(--color, inherit);
  box-shadow: none;
}
.uiButton_loading {
  pointer-events: none;
}
.uiButton:active,
.uiButton.uiButton_loading {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
}
.uiButton:disabled {
  opacity: 0.5;
  pointer-events: none;
}
.uiButton_small {
  padding: 2px 12px;
  min-height: 30px;
  min-width: 30px;
  font-size: 95%;
}
.uiButton_square {
  padding: 2px;
}
.uiButton:after {
  content: '';
  border-radius: inherit;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: currentColor;
  opacity: 0;
  transition: all .1s;
  pointer-events: none;
}
.uiButton:hover:after {
  opacity: 0.1;
}
.uiButton:active:after,
.uiButton.uiButton_loading:after {
  opacity: 0.2;
}
</style>
