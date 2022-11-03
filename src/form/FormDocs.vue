<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Todo.
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { DocsComponentSection } from '../docs'
// @ts-ignore
import { DOCGEN as doc } from './Form.vue'

const form1 = reactive({
  email: '',
})

const form2 = reactive({
  email: '',
  message: '',
})

function validateEmail(value: string) {
  if (!value.includes('@')) return 'must be a valid email address'
}

function onValidSubmit() {
}

const setup = () => ({ form1, form2, validateEmail, onValidSubmit })

const template = `
<Text>Single step form with validation:</Text>
<Form :validate="{ email: { value: form1.email } }" @submit="onValidSubmit">
  <Label text="Email" for="email">
    <TextInput v-model="form1.email" placeholder="example@email.com" />
  </Label>
</Form>

<Text>Multi-step step form:</Text>
<Form
  v-slot="{ stepIndex }"
  :validate="{
    email: { value: form2.email },
    message: { value: form2.message, optional: true, validator: validateEmail },
  }"
  :steps="[
    { name: 'Enter email', fields: ['email'] },
    { name: 'Message', fields: ['message'] },
    { name: 'Review', fields: [] },
  ]"
  @submit="onValidSubmit"
>
  <template v-if="stepIndex === 0">
    <Label text="Name" for="name">
      <TextInput v-model="form2.email" />
    </Label>
  </template>
  <template v-if="stepIndex === 1">
    <Label text="Message" for="message">
      <TextInput v-model="form2.message" placeholder="Optional message" :rows="4" />
    </Label>
  </template>
  <template v-if="stepIndex === 2">
    <Text p>Email: {{ form2.message }}</Text>
    <Text p>Name: {{ form2.email }}</Text>
  </template>
</Form>
`
</script>
