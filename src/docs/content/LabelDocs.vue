<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Todo.
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DocsComponentSection } from '..'
// @ts-ignore
import { DOCGEN as doc } from '../../components/form/Label.vue'

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
