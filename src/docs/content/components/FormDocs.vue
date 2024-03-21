<template>
  <p>The Form component is a simple wrapper around a form element for capturing the submit event on the form.</p>
  <LiveExample :template="template1" :context="{ onSubmit }" />
  <br />
  <h4>Gap</h4>
  <p>Like Column, the Form component supports the gap prop to adjust spacing between child elements.</p>
  <LiveExample :template="template2" :context="{ onSubmit }" />
</template>
<script setup lang="ts">
import { LiveExample } from '@/docs/components'

const template1 = `<Form @submit="onSubmit">
    <TextInput placeholder="Press enter to submit" />
    <Button type="submit">Submit</Button>
</Form>`

const template2 = `<Form @submit="onSubmit" gap="l">
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
</Form>`

function onSubmit() {
  window.alert('Form submitted!')
}
</script>
