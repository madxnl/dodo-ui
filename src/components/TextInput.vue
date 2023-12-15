<template>
  <Field :class="[$style.TextInput]" :disabled="disabled" @click.self="onClick">
    <!-- @slot Shown before value -->
    <template #before><slot name="before" /></template>
    <component
      :is="rows && rows > 1 ? 'textarea' : 'input'"
      :id="id"
      ref="el"
      :value="modelValue"
      :class="$style.input"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :maxlength="maxlength"
      :type="type"
      :name="name"
      :tab-index="tabIndex"
      :autofocus="autofocus"
      @input="onChange"
    />
    <!-- @slot Shown after value -->
    <template #after><slot name="after" /></template>
  </Field>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { Field } from '.'
import { useTheme } from '../composables'

const props = defineProps<{
  id?: string | null
  modelValue?: string | null
  placeholder?: string
  disabled?: boolean
  rows?: number
  maxlength?: number
  type?: 'search'
  tabIndex?: number
  name?: string
  autofocus?: boolean
}>()

const el = ref<HTMLInputElement>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onClick() {
  el.value!.focus()
}

function onChange() {
  emit('update:modelValue', el.value!.value)
}

watchEffect(() => {
  if (props.autofocus && el.value) {
    el.value.focus()
  }
})

useTheme()
</script>
<style module>
.TextInput input,
.TextInput textarea {
  background: transparent;
  font: inherit;
  border: none;
  outline: none;
  padding: 0;
  flex-grow: 1;
  min-width: 0;
}
.TextInput:focus-within {
  border-color: var(--dodo-color-info);
}
</style>
