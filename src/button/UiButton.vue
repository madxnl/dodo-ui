<template>
  <button
    class="UiButton"
    :style="css"
    @click="click"
    :class="classes"
  ><slot></slot></button>
</template>
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
}>()

const css = computed(() => {
  let s = ''
  s += '--color: ' + useThemeColor(props.color ?? 'info')
  return s
})

const classes = computed(() => [
  { loading: loading.value },
  useButtonVariant(props.variant ?? 'default'),
])

const attrs = useAttrs()

const loading = ref(false)

function click(event: Event) {
  if (loading.value) {
    return
  }
  const { onClick } = attrs
  if (onClick instanceof Function) {
    const result = onClick(event)
    if (result instanceof Promise) {
      document.body.style.cursor = 'wait'
      loading.value = true
      result.finally(() => {
        document.body.style.cursor = ''
        loading.value = false
      })
    }
  }
}
</script>

<style>
.UiButton {
  border: 0;
  cursor: pointer;
  font: inherit;
  background: var(--color, grey);
  color: white;
  border-radius: 4px;
  padding: .25em .65em;
  position: relative;
}
.UiButton_loading {
  opacity: 0.5;
  pointer-events: none;
}
.UiButton_border {
  background: transparent;
  color: var(--color, black);
  border: 1px solid var(--color, grey);
}
.UiButton_text {
  background: transparent;
  color: var(--color, black);
}
.UiButton:hover {
  filter: brightness(105%);
}
.UiButton:active {
  filter: brightness(90%);
}
</style>
