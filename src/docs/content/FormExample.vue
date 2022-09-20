<template>
  <Container style="max-width:500px">
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
  </Container>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { Form } from '../..'
import Container from '../../components/Container.vue'
import Label from '../../components/Label.vue'
import Text from '../../components/Text.vue'
import TextInput from '../../components/TextInput.vue'

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
</script>
