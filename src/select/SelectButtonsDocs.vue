<template>
  <Text p>
    When there are only few options to choose from, you can display them as buttons instead:
  </Text>
  <Docs.DocsExample :options="{ template, setup }" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Text } from '..'
import * as Docs from '../docs'

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
