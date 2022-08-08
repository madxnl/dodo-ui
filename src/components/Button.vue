<template>
  <button
    :style="css"
    :type="type ?? 'button'"
    :class="[
      $style.Button,
      $style[props.variant ?? 'default'],
      loading && $style.loading,
      small && $style.small,
      square && $style.square,
      active && $style.active,
      rounded && $style.rounded,
    ]"
    v-bind="{ ...$attrs, onClick }"
  >
    <div :class="$style.content"><slot /></div>
    <Spinner v-if="loading" :small="small" :class="$style.spinner" color="inherit" />
  </button>
</template>
<script lang="ts" setup>
import { computed, ref, useAttrs } from 'vue'
import { Spinner } from '../components'
import { ColorProp, colorPropToRGB, useTheme } from '../theme'

const props = defineProps<{
/** Set button color
 * @example color="success"
 */
  color?: ColorProp
/** Set button variant
 * @example variant="border"
 * @example variant="text"
 */
  variant?: 'text'|'solid'
/** Set button type to 'submit' to trigger form submit
 * @example type="submit"
 */
  type?: 'button'|'submit'
/** Square button for icons
 * @example square
 */
  square?: boolean
/** Square button for icons
 * @example square
 */
  rounded?: boolean
/** Change button size
 * @example small
 */
  small?: boolean
/** Style button as active
 * @example active
 */
  active?: boolean
}>()

useTheme()

const css = computed(() => {
  let s = ''
  if (props.color) s += `--bnt-rgb:${colorPropToRGB(props.color)};`
  return s
})

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
<script lang="ts"> // use normal <script> to declare options
export default {
  inheritAttrs: false,
}
</script>
<style module>
.Button {
  border: 0;
  cursor: pointer;
  font: var(--dodo-font);
  font-weight: 500;
  background: var(--dodo-color-background);
  color: rgb(var(--bnt-rgb, var(--dodo-rgb-foreground)));
  border-radius: 4px;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  user-select: none;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  --height: 36px;
  min-width: var(--height);
  min-height: var(--height);
  line-height: var(--height);
  white-space: nowrap;
  box-sizing: border-box;
}
.content {
  display: flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
}
.solid {
  background: rgb(var(--bnt-rgb, var(--dodo-rgb-foreground)));
  color: white;
}
.default {
  border: 1px solid rgba(var(--bnt-rgb, var(--dodo-rgb-foreground)), 0.35);
}
.rounded {
  border-radius: 99px;
}
.text {
  background: transparent;
  color: rgb(var(--bnt-rgb, var(--dodo-rgb-foreground)));
  box-shadow: none;
}
.loading {
  pointer-events: none;
}
.loading .content {
  visibility: hidden;
}
.spinner {
  position: absolute;
  top: auto; left: auto; right: auto; bottom: auto;
}
.Button:active,
.active,
.Button.loading {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
}
.Button:disabled {
  opacity: 0.5;
  pointer-events: none;
}
.small {
  padding: 0 10px;
  --height: 28px;
  font-size: calc(var(--dodo-font-size) - 1px);
}
.square {
  padding: 0;
}
.Button:after {
  content: '';
  border-radius: inherit;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: currentColor;
  opacity: 0;
  transition: all .1s;
  pointer-events: none;
}
.Button:hover:after {
  opacity: 0.1;
}
.Button:active:after,
.Button.active:after,
.Button.loading:after {
  opacity: 0.2;
}
</style>
