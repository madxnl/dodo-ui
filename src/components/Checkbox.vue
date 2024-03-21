<template>
  <span :class="[$style.Checkbox, modelValue && $style.checked]" @click.stop="onClick">
    <Icon :name="indeterminate ? 'indeterminate_check_box' : modelValue ? 'check_box' : 'check_box_outline_blank'" />
    <slot />
    <input type="checkbox" :checked="modelValue" @change="onChange" />
  </span>
</template>
<script lang="ts" setup>
import { Icon } from '.'
import { useTheme } from '../composables'

const props = defineProps<{
  modelValue: boolean
  indeterminate?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function onClick() {
  emit('update:modelValue', props.indeterminate || !props.modelValue)
}

function onChange(e: Event) {
  const input = e.target as HTMLInputElement
  if (input.checked !== props.modelValue) {
    onClick()
  }
}

useTheme()
</script>
<style module>
.Checkbox {
  cursor: pointer;
  transition: opacity 0.1s;
  opacity: 0.7;
  color: var(--dodo-color-foreground);
}
.Checkbox input[type='checkbox'] {
  pointer-events: none;
  width: 0;
  height: 0;
  position: fixed;
}
.Checkbox:focus-within {
  outline: 2px solid var(--dodo-color-info);
  opacity: 1;
}
.Checkbox:hover {
  opacity: 1;
}
.checked {
  opacity: 1;
}
</style>
