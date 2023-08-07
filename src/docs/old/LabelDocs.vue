<template>
  <DocsExample :options="{ setup, template }">
    <template #description>
      Todo.
    </template>
  </DocsExample>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DocsExample } from '..'

const value = ref('Foo bar')

const setup = () => ({ value })

const template = `
<Label text="Field label">
  <TextInput v-model="value" />
</Label>
<Label text="Field label" error="is required">
  <TextInput v-model="value" />
</Label>
<Label text="Field label" hint="Enter a valid email">
  <TextInput v-model="value" />
</Label>`
</script>
