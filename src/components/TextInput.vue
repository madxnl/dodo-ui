<template>
  <Field
    :class="[
      $style.TextInput,
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <!-- @slot Shown before value -->
    <template #before><slot name="before" /></template>
    <component
      :is="rows && rows > 1 ? 'textarea' : 'input'"
      ref="el"
      :value="modelValue"
      :class="$style.input"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :maxlength="maxlength"
      :type="type"
      :tab-index="tabIndex"
      @input="onChange"
    />
    <!-- @slot Shown after value -->
    <template #after><slot name="after" /></template>
  </Field>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useTheme } from '../theme'
import Field from './Field.vue'

defineProps<{
  modelValue: string|null|undefined
  placeholder?: string
  disabled?: boolean
  rows?: number
  maxlength?: number
  type?: 'search'
  tabIndex?: number
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
}
.TextInput:focus-within {
  border-color: var(--dodo-color-info);
}
</style>
