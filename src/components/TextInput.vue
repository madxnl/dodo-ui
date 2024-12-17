<script lang="ts" setup>
defineProps<{
  modelValue?: string | null
  placeholder?: string
  disabled?: boolean
  maxlength?: number
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'
  name?: string
  autofocus?: boolean
  error?: string
  rows?: never
  autocomplete?: string
}>()

const model = defineModel<string | null>()
</script>

<template>
  <input
    :value="model"
    :class="['dodo-formfield', error && $style.error, $style.input]"
    :placeholder="placeholder"
    :disabled="disabled"
    :maxlength="maxlength"
    :type="type || 'text'"
    :name="name"
    :autofocus="autofocus"
    :autocomplete="autocomplete ?? 'off'"
    @input="model = ($event.target as HTMLInputElement).value"
  />
</template>

<style module>
[data-itemerror] .input,
.error .input {
  border-color: var(--dodo-color-danger);
}
</style>
