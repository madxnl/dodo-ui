<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  placeholder?: string
  disabled?: boolean
  name?: string
  autofocus?: boolean
  error?: string | boolean
  minRows?: number
  maxRows?: number
  autocomplete?: string
}>()

const model = defineModel<string | null>()
const textarea = ref<HTMLTextAreaElement | null>(null)
const rowsCalculated = ref(props.minRows)

function calculateRows() {
  const maxRows = props.maxRows && props.maxRows > 0 ? props.maxRows : 12
  const minRows = props.minRows && props.minRows > 0 ? props.minRows : 4

  const el = textarea.value
  if (!el) return minRows

  // Calculate the number of rows based on the content
  let i = minRows
  el.style.overflow = 'hidden'
  el.setAttribute('rows', `${i}`)
  while (el.scrollHeight > el.offsetHeight && i < maxRows) {
    el.setAttribute('rows', `${++i}`)
  }
  el.style.overflow = ''
  // console.log('calc rows', [el, props.modelValue], i)
  return i
}

function updateLoop() {
  rowsCalculated.value = calculateRows()
  if (!stopUpdating.value) window.requestAnimationFrame(updateLoop)
}

const stopUpdating = ref(false)

onMounted(updateLoop)

onBeforeUnmount(() => {
  stopUpdating.value = true
})
</script>

<template>
  <textarea
    ref="textarea"
    v-model="model"
    :class="['dodo-formfield', error && $style.error, $style.textarea]"
    :placeholder="placeholder"
    :disabled="disabled"
    :name="name"
    :autofocus="autofocus"
    :rows="rowsCalculated"
    :autocomplete="autocomplete"
    resize="false"
  />
</template>

<style module>
.textarea {
  resize: none;
  padding: 8px 12px;
}
[data-itemerror] .textarea,
.error .textarea {
  border-color: var(--dodo-color-danger);
}
</style>
