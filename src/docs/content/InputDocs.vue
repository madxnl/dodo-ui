<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>A basic input field component.</p>
    </template>
    <template #example>
      <Input placeholder="Enter your name" />
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { Input } from '@/components'
import { ComponentDocsSection } from '../components'

const exampleSrc = `<Input placeholder="Enter your name" />`

const props = [
  {
    code: 'id?: string | null',
    description: 'The ID of the input field'
  },
  {
    code: 'placeholder?: string',
    description: 'The placeholder text'
  },
  {
    code: 'disabled?: boolean',
    description: 'Disables the input field'
  },
  {
    code: 'maxlength?: number',
    description: 'The maximum number of characters allowed'
  },
  {
    code: 'type?: string',
    description: 'The type of input field (e.g., text, password, email)'
  },
  {
    code: 'tabIndex?: number',
    description: 'The tab order of the input field'
  },
  {
    code: 'name?: string',
    description: 'The name attribute of the input field'
  },
  {
    code: 'autofocus?: boolean',
    description: 'Sets focus on the input field when the page loads'
  }
]
</script>
