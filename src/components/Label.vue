<template>
  <label :class="['dodo-label', error && 'dodo-label--error']" :for="props.for" @change="onchange">
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

<style>
.dodo-label {
  display: grid;
  gap: 4px;
}
.dodo-label > label {
  color: inherit;
}
.dodo-label > label::first-letter {
  text-transform: uppercase;
}
.dodo-label--error {
  color: var(--dodo-color-danger);
}
</style>
