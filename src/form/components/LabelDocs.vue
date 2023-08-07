<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>A label component for form inputs.</p>
    </template>
    <template #example>
      <Label text="Name" for="name">
        <TextInput id="name" />
      </Label>
      <Label text="Email" for="email" hint="Please enter a valid email address" :required="true">
        <TextInput id="email" />
      </Label>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { ComponentDocsSection } from '@/docs'
import { Label, TextInput } from '../..'

const exampleSrc = `<Label text="Name" for="name">
  <TextInput id="name" />
</Label>
<Label text="Email" for="email" hint="Please enter a valid email address" :required="true">
  <TextInput id="email" />
</Label>`

const props = [
  {
    code: 'text: string',
    description: 'The label text',
  },
  {
    code: 'for?: string',
    description: 'The ID of the associated input field',
  },
  {
    code: 'hint?: string',
    description: 'A hint to provide additional information',
  },
  {
    code: 'required?: boolean',
    description: 'Indicates if the input is required',
  },
]
</script>
