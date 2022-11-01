<template>
  <Text p>
    Input field for single or multiline text.
  </Text>
  <Docs.DocsExample :options="{ template, setup }" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Text } from '..'
import * as Docs from '../docs'

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
