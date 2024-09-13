<script lang="ts" setup>
import { Spinner, type ColorProp } from '@madxnl/dodo-ui'
import { computed, ref, useAttrs } from 'vue'

const props = defineProps<{
  /** Set button color
   * @example color="success"
   */
  color?: ColorProp
  /** Set button variant
   * @example variant="solid"
   * @example variant="link"
   */
  variant?: 'default' | 'solid' | 'clear' | 'link'
  /** Set button type to 'submit' to trigger form submit
   * @example type="submit"
   */
  type?: 'button' | 'submit'
  /** Square button for icons
   * @example square
   */
  size?: 's' | 'm' | 'l'
  /** Style button as active
   * @example active
   */
  active?: boolean
  disabled?: boolean
  loading?: boolean
  round?: boolean
  square?: boolean

  small?: 'deprecated'
  rounded?: 'deprecated'
}>()

defineOptions({
  inheritAttrs: false
})

const css = computed(() => {
  let s = ''
  if (props.color) s += `--button-color:var(--dodo-color-${props.color});`
  return s
})

const attrs = useAttrs()

const clickLoading = ref(false)
const showLoading = computed(() => props.loading || clickLoading.value)

async function onClick(event: Event) {
  if (!clickLoading.value && typeof attrs.onClick === 'function') {
    const result = attrs.onClick(event)
    if (result instanceof Promise) {
      clickLoading.value = true
      await result.finally(() => (clickLoading.value = false))
    }
  }
}
</script>
<template>
  <button
    :style="css"
    :disabled="disabled"
    :type="type ?? 'button'"
    :class="[
      $style.Button,
      $style[props.variant ?? 'default'],
      showLoading && $style.loading,
      size && $style[size],
      active && $style.active,
      square && $style.square,
      round && $style.round
    ]"
    v-bind="{ ...attrs, onClick }"
  >
    <div :class="$style.content">
      <slot />
    </div>
    <Spinner v-if="showLoading" :small="size === 's'" :class="$style.spinner" color="inherit" />
  </button>
</template>
<style module>
.Button {
  --bg-color: var(--dodo-color-background);
  --drop-shadow: var(--dodo-shadow-button);
  --inset-shadow: inset 0 0 0 1px color-mix(in srgb, currentColor 20%, transparent);
  --button-color: var(--dodo-color-text);
  --hover-bg: color-mix(in srgb, var(--button-color) 5%, var(--bg-color));
  --active-bg: color-mix(in srgb, var(--button-color) 10%, var(--bg-color));
  --hover-color: var(--button-color);
  --active-color: var(--button-color);
  --disabled-bg: var(--bg-color);
  --height: var(--dodo-button-height);

  border: none;
  box-shadow: var(--drop-shadow), var(--inset-shadow);
  cursor: pointer;
  font: inherit;
  font-weight: var(--dodo-weight-bold);
  background: var(--dodo-color-background);
  color: var(--button-color);
  border-radius: 8px;
  position: relative;
  user-select: none;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 32px;
  min-width: var(--height);
  height: var(--height);
  white-space: nowrap;
  box-sizing: border-box;
  flex-shrink: 0;
}
.Button:hover {
  background: var(--hover-bg);
  color: var(--hover-color);
}
.Button:active,
.Button.active,
.Button.loading {
  background: var(--active-bg);
  color: var(--active-color);
}
.Button:disabled {
  pointer-events: none;
  background: var(--disabled-bg);
  color: var(--dodo-color-gray);
  box-shadow: none;
}
.content {
  display: flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
}

/* variants */

.solid {
  background: var(--button-color);
  color: white;
  --inset-shadow: 0 0 transparent;
  --hover-color: white;
  --active-color: white;
  --hover-bg: color-mix(in srgb, white 10%, var(--button-color));
  --active-bg: color-mix(in srgb, white 20%, var(--button-color));
}
.solid:disabled {
  color: var(--dodo-color-gray);
  background: color-mix(in srgb, var(--dodo-color-gray) 42%, var(--bg-color));
}
.clear {
  color: var(--button-color);
  box-shadow: none;
  background: transparent;
  --hover-bg: color-mix(in srgb, var(--button-color) 5%, transparent);
  --active-bg: color-mix(in srgb, var(--button-color) 10%, transparent);
  --disabled-bg: transparent;
}
.link {
  height: auto;
  padding: 0;
  color: var(--button-color);
  box-shadow: none;
  background: transparent;
  --hover-bg: transparent;
  --active-bg: transparent;
  --disabled-bg: transparent;
  --hover-color: color-mix(in srgb, white 15%, var(--button-color));
  --active-color: color-mix(in srgb, white 30%, var(--button-color));
}

/* attributes */

.loading {
  pointer-events: none;
}
.loading .content {
  visibility: hidden;
}
.spinner {
  position: absolute;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
}
.s {
  --height: 32px;
  padding: 2px 16px;
  font-size: var(--dodo-font-small);
}
.l {
  --height: 48px;
  padding: 4px 32px;
  font-size: var(--dodo-font-large);
}

.square,
.round {
  padding: 4px;
}
.round {
  border-radius: 99px;
}
</style>
