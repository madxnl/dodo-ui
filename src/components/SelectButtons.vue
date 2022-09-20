<template>
  <div :wrap="multiple" :class="[$style.Select, multiple && $style.multiple]">
    <Button
      v-for="(option,i) in options"
      :key="option.label"
      v-bind="isSelected(option) ? { active: true, color: 'info' } : {}"
      :disabled="disabled"
      :small="small"
      rounded
      @click="toggle(option)"
    >
      <!--
        @slot Menu Item footer
        @binding {object} option icon of the menu item
        @binding {string} index text of the menu item
      -->
      <slot :option="option" :index="i">
        {{ option.label || option.value }}
      </slot>
    </Button>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import Button from './Button.vue'

const props = defineProps<{
  /** Array of available options */
  options: {
    value: any
    label?: string
  }[]
  /** Currently selected value(s) */
  modelValue?: unknown
  /** Allow multiple values to be selected (use array for modelValue) */
  multiple?: boolean
  /** Toggle disable */
  disabled?: boolean
  /** Small buttons */
  small?: boolean
}>()

type Option = typeof props.options[0]

const emit = defineEmits<{
  /**
   * Update of selected value(s), used by v-model syntax
   * @arg {any} value
   */
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

<style module>
.Select {
  display: flex;
  align-items: center;
  min-width: 0;
}
.multiple {
  gap: 4px;
}
.Select:not(.multiple) button:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.Select:not(.multiple) button:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: -1px;
}
</style>
