<template>
  <button
    class="Button"
    :style="css"
    @click="click"
    :class="{ loading }"
  ><slot></slot></button>
</template>
<script lang="ts" setup>
import { computed, ref, useAttrs } from "vue";

const props = defineProps<{
  /** Any valid CSS color
   * @example color="#FFAA00"
   * @example :color="success"
   */
  color?: string
  /** Button scales with fontsize when using default theme
   * @example fontsize="200%"
   * @example fontsize="12px"
   * @example :fontsize="headingSize"
   */
  fontsize?: string
}>()

const css = computed(() => {
  let s = ''
  if (props.color) s += `--color:${props.color};`
  if (props.fontsize) s += `font-size:${props.fontsize};`
  return s
})

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
.Button {
  border: 0;
  cursor: pointer;
  font: inherit;
  background: var(--color, grey);
  color: white;
  border-radius: 4px;
  padding: .25em .65em;
  position: relative;
}
.Button:hover {
  filter: brightness(105%);
}
.Button:active {
  filter: brightness(90%);
}
.Button.loading {
  opacity: 0.5;
  pointer-events: none;
}
</style>
