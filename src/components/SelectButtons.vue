<template>
  <Row wrap>
    <Button
      v-for="(option,i) in options"
      :key="option.label"
      variant="default"
      rounded
      v-bind="isSelected(option) ? { active: true, color: 'info' } : {}"
      :disabled="disabled"
      @click="toggle(option)"
    >
      <slot :option="option" :index="i">
        {{ option.label || option.value }}
      </slot>
    </Button>
  </Row>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import Button from './Button.vue'
import Row from './Row.vue'

const props = defineProps<{
  options: {
    value: any
    label?: string
  }[]
  modelValue?: unknown
  multiple?: boolean
  disabled?: boolean
}>()

type Option = typeof props.options[0]

const emit = defineEmits<{
  (e: 'update:modelValue', value: unknown): void
}>()

const modelValueArray = computed(() => {
  return props.multiple ? [props.modelValue].flat() : [props.modelValue]
})

function compareValue(option: Option, value: unknown) {
  return option.value === value
}

function isSelected(option: Option) {
  return modelValueArray.value.some(x => compareValue(option, x))
}

function toggle(option: Option) {
  let newValue = option.value
  const alreadySelected = isSelected(option)
  if (alreadySelected && props.multiple) { // remove from selection
    newValue = modelValueArray.value.filter(x => !compareValue(option, x))
  } else if (props.multiple) { // append to selection
    newValue = [...modelValueArray.value, option.value]
  }
  emit('update:modelValue', newValue)
}
</script>
