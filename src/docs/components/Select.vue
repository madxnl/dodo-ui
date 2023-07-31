<template>
  <ComponentDocsSection :exampleSrc="exampleSrc" :props="props">
    <template #description>
      <p>A select component that allows users to choose options from a dropdown or a set of buttons.</p>
    </template>
    <template #example>
      <Select
        :options="[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]"
        v-model="selectedOption"
      />
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ComponentDocsSection } from '..'
import { Select } from '../..'

const exampleSrc = `<Select
  :options="[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]"
  v-model="selectedOption"
/>`

const props = [
  {
    code: 'options: Option[]',
    description: 'Array of available options',
  },
  {
    code: 'modelValue?: unknown',
    description: 'v-model binding',
  },
  {
    code: 'disabled?: boolean',
    description: 'Disables the select component',
  },
  {
    code: 'placeholder?: string',
    description: 'Set placeholder text',
  },
  {
    code: 'multiple?: boolean',
    description: 'Allow multiple select',
  },
  {
    code: "variant?: 'buttons'",
    description: 'Display options as buttons',
  },
  {
    code: "size?: 's'",
    description: 'Set the size of the select component',
  },
]

const selectedOption = ref('option1')
</script>
