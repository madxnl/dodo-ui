<script lang="ts" setup>
import type { SpacingValue } from '@/composables'
import { useTheme } from '@/composables'

defineProps<{
  gap?: SpacingValue
}>()

const emit = defineEmits<{
  submit: []
}>()

const theme = useTheme()

function onSubmit() {
  emit('submit')
}
</script>

<template>
  <form :class="[$style.form, theme.gap(gap)]" @submit.prevent="onSubmit">
    <slot />
  </form>
</template>

<style module>
.form {
  display: flex;
  flex-direction: column;
  gap: var(--dodo-spacing-m);
}
</style>
