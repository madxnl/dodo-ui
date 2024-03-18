<script lang="ts" setup>
import FormItem from './FormItem.vue'

defineProps<{
  modelValue?: string | null
  id?: string | null
  placeholder?: string
  disabled?: boolean
  maxlength?: number
  type?: 'text' | 'email' | 'password'
  name?: string
  autofocus?: boolean
  label?: string
  error?: string
  description?: string
  optional?: boolean
  rows?: never
  autocomplete?: string
}>()

const model = defineModel<string | null>()
</script>

<template>
  <FormItem
    v-slot="{ entryId }"
    :label="label"
    :error="error"
    :description="description"
    :class="error && $style.error"
    :optional="optional"
    :for="id ?? undefined"
  >
    <input
      :id="id ?? entryId"
      v-model="model"
      :class="['dodo-formfield', $style.input]"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxlength"
      :type="type || 'text'"
      :name="name"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
    />
  </FormItem>
</template>

<style module>
.error .input {
  border-color: var(--dodo-color-danger);
}
</style>
