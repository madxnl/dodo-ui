<template>
  <div
    :class="[
      $style.Input,
      disabled && $style.disabled,
    ]"
    :style="[
    ]"
    @click="onClick"
  >
    <!-- @slot Shown before value -->
    <slot name="before" />
    <input
      ref="el"
      :value="modelValue"
      :class="$style.input"
      :placeholder="placeholder"
      :disabled="disabled"
      @change="onChange"
    >
    <!-- @slot Shown after value -->
    <slot name="after" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useTheme } from '../theme'

const props = defineProps<{
  modelValue: string|null|undefined
  placeholder?: string
  disabled?: boolean
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

// <Form :data="data" :rules="{
//   email: ['optional', 'email'],
// }">
//   <Multistep :steps="[
//     { title: 'Step 1', validate: ['email'] }
//     { title: 'Step 2', validate: ['budget'] }
//   ]">
//     <template v-if="step.title === 'Step 1'">
//       <Label for="email">
//         <Input v-model="data.email">
//       </Label>
//     </template>
//     <template v-if="step.title === 'Step 2'">
//       <Label for="budget">
//         <Input v-model="data.budget">
//       </Label>
//     </template>
//   </Multistep>
// </Form>

// Input
// DatePicker
// Input format=email
// Label
// Select
// Slider
// Switch

useTheme()

</script>
<style module>
.Input {
  display: flex;
  gap: 8px;
  max-width: 500px;
  cursor: text;
  border-bottom: 2px solid rgba(0,0,0,.2);
}
.Input:focus-within {
  border-color: var(--dodo-color-info);
}
.input {
  border: none;
  outline: none;
}
.disabled {
  opacity: .5;
  pointer-events: none;
}
</style>
