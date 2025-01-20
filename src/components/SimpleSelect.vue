<script lang="ts" setup generic="T extends string | undefined | null">
import { computed } from 'vue'
import FormItem from './FormItem.vue'
import Icon from './Icon.vue'

const props = defineProps<{
  modelValue: T
  options: { label: string; value: T }[]

  id?: string | null
  placeholder?: string
  disabled?: boolean
  name?: string
  autofocus?: boolean
  label?: string
  error?: string
  description?: string
  optional?: boolean
  autocomplete?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: T]
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <FormItem
    v-slot="{ entryId }"
    :class="error && $style.error"
    :label="label"
    :error="error"
    :description="description"
    :optional="optional"
    :for="id ?? undefined"
  >
    <div :class="$style.select">
      <select :id="id ?? entryId" v-model="model" :disabled="disabled" :class="['dodo-formfield']">
        <option v-for="option in options" :key="option.label" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <span :class="$style.icon">
        <Icon name="unfold_more" />
      </span>
    </div>
  </FormItem>
</template>

<style module>
.select {
  padding: 0;
  display: grid;
  position: relative;
}
.select select {
  padding: 2px 6px;
  padding-right: 24px;
  min-height: var(--dodo-button-height);
  appearance: none;
  font: inherit;
}
.icon {
  position: absolute;
  right: 6px;
  top: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
}
.error select {
  border-color: var(--dodo-color-danger);
}
</style>
