<template>
  <label :class="[$style.FormLabel, error && $style.FormLabel_hasError]" :for="props.for" @change="onchange">
    <label>{{ text }} {{ error }}</label>
    <slot />
    <small v-if="hint">{{ hint }}</small>
  </label>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { useTheme } from '..'
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

useTheme()

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
  color: var(--dodo-color-danger);
}
</style>
