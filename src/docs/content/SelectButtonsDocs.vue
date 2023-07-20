<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      When there are only few options to choose from, you can display them as buttons instead:
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DocsComponentSection } from '..'
// @ts-ignore
import { DOCGEN as doc } from '../../components/SelectButtons.vue'

const currentValue = ref(1)
const currentMultipleValue = ref([1, 2, 4])

const setup = () => ({ currentValue, currentMultipleValue })

const template = `
<SelectButtons
  v-model="currentValue"
  :options="[
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ]"
/>

<SelectButtons
  v-slot="{ option }"
  v-model="currentMultipleValue"
  small
  multiple
  :options="[
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ]"
>
  Multiple {{ option.value }}
</SelectButtons>`
</script>
