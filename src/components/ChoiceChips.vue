<template>
  <div :class="[$style.ChoiceChips, multiple && $style.multiple]">
    <Chip
      v-for="(option, i) in options"
      :key="option.label"
      :color="isSelected(option) ? 'info' : undefined"
      :variant="!multiple && isSelected(option) ? 'solid' : undefined"
      :disabled="disabled"
      :small="small"
      rounded
      @click="toggle(option)"
    >
      <Icon v-if="multiple && isSelected(option)" name="check" />
      <!--
        @slot Menu Item footer
        @binding {object} option icon of the menu item
        @binding {string} index text of the menu item
      -->
      <slot :option="option" :index="i">
        {{ option.label || option.value }}
      </slot>
    </Chip>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import Chip from './Chip.vue'
import Icon from './Icon.vue'

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

type Option = (typeof props.options)[0]

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
  return modelValueArray.value.some((x) => compareValue(option, x))
}

function toggle(option: Option) {
  let newValue = option.value
  const alreadySelected = isSelected(option)
  if (alreadySelected && props.multiple) {
    // remove from selection
    newValue = modelValueArray.value.filter((x) => !compareValue(option, x))
  } else if (props.multiple) {
    // append to selection
    newValue = [...modelValueArray.value, option.value]
  }
  emit('update:modelValue', newValue)
}
</script>

<style module>
.ChoiceChips {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-width: 0;
  gap: 4px;
}
</style>
