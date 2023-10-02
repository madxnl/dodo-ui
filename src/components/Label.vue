<template>
  <label :class="['dodo-label', error && 'dodo-label--error']" :for="props.for">
    <span class="dodo-label-text">
      {{ text }}
    </span>
    <slot />
    <small v-if="error" class="dodo-color-danger">{{ error }}</small>
    <small v-else-if="hint" class="dodo-fade-secondary">{{ hint }}</small>
  </label>
</template>

<script lang="ts" setup>
import { useTheme } from '../composables'

const props = defineProps<{
  text: string
  for?: string
  error?: string
  hint?: string
  required?: boolean
}>()

useTheme()
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
