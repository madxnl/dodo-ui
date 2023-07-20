<template>
  <label
    :class="[
      $style.FormLabel,
      error && $style.FormLabel_hasError
    ]"
    :for="props.for"
    @change="onchange"
  >
    <Text label>{{ text }} {{ error }}</Text>
    <slot />
    <Text v-if="hint" small>{{ hint }}</Text>
  </label>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { Text, useThemeOld } from '..'
import { formServiceKey } from '../composables'

const props = defineProps<{
  text: string
  for?: string
  hint?: string
  required?: boolean
}>()

const form = inject(formServiceKey, undefined)

const error = computed(() => {
  return form?.errors[props.for!]
})

useThemeOld()

async function onchange() {
  if (error.value) {
    await form?.validateField(props.for!)
  }
}
</script>

<style module>
.FormLabel {
  display: grid;
  gap: 4px;
}
.FormLabel > label {
  color: inherit;
}
.FormLabel > label::first-letter {
  text-transform: uppercase;
}
.FormLabel_hasError {
  color: rgb(var(--dodo-rgb-danger));
}
</style>
