<template>
  <DocsExample :options="{ setup, template }">
    <template #description>
      Input field for single or multiline text.
    </template>
  </DocsExample>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DocsExample } from '..'


const value = ref('')

const setup = () => ({ value })

const template = `
<TextInput v-model="value" placeholder="Placeholder" />

<TextInput v-model="value" placeholder="example@email.com">
  <template #before><Icon name="mail" /></template>
</TextInput>

<TextInput v-model="value" placeholder="example@email.com" :rows="5">
  <template #before><Icon name="mail" /></template>
</TextInput>

<TextInput model-value="Disabled input" disabled />`
</script>
