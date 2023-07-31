<template>
  <p>A label for form inputs, providing text, hint, and error state.</p>

  <DocsExample :exampleSrc="exampleSrc">
    <Label for="name" text="Name" required />
    <TextInput id="name" />
    <Label for="email" text="Email" />
    <TextInput id="email" />
    <Button>Submit</Button>
  </DocsExample>

  <Column>
    <h4>Properties</h4>
    <SyntaxHighlight lang="ts" :code="properties" />
  </Column>
</template>
<script setup lang="ts">
import { DocsExample, SyntaxHighlight } from '..'
import { Button, Column, Label, TextInput } from '../..'

const properties = `text: string
for?: string
hint?: string
required?: boolean`

const exampleSrc = `<Form>
  <Label for="name" text="Name" required />
  <TextInput id="name" />
  <Label for="email" text="Email" />
  <TextInput id="email" />
  <Button>Submit</Button>
</Form>`
</script>
