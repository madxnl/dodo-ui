<template>
  <input
    :id="id ?? undefined"
    ref="el"
    :value="modelValue"
    class="dodo-formfield dodo-input"
    :placeholder="placeholder"
    :disabled="disabled"
    :maxlength="maxlength"
    :type="type"
    :name="name"
    :autofocus="autofocus"
    @input="handleInput"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useTheme } from '../composables'

defineProps<{
  modelValue?: string | null
  id?: string | null
  placeholder?: string
  disabled?: boolean
  maxlength?: number
  type?: string
  tabIndex?: number
  name?: string
  autofocus?: boolean
}>()

const el = ref<HTMLInputElement | null>(null)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function handleInput() {
  emit('update:modelValue', el.value!.value)
}

useTheme()
</script>
<style>
.dodo-input input {
  border: none;
  outline: none;
  font: inherit;
  /* background: transparent;
  padding: 0;
  flex-grow: 1;
  min-width: 0; */
}
</style>
