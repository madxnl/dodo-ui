<template>
  <label :class="['dodo-label', error && 'dodo-label--error']" :for="props.for" @change="onchange">
    <span class="dodo-label-text">
      {{ text }}
      <span v-if="error" class="dodo-color-danger">{{ error }}</span>
    </span>
    <slot />
    <small v-if="hint" class="dodo-fade-secondary">{{ hint }}</small>
  </label>
</template>

<script lang="ts" setup>
import { formServiceKey, useTheme } from '@/ui'
import { computed, inject } from 'vue'

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
  display: flex;
  flex-flow: column;
  gap: 4px;
}
.dodo-label-text {
  margin-bottom: 4px;
}
.dodo-label--error {
  color: var(--dodo-color-danger);
}
</style>
