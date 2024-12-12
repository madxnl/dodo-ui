<template>
  <p>The TextInput component is used to capture text input from the user.</p>
  <DocsExample :example-src="exampleSrc1" :context="context" />
  <br />
  <p>The disabled prop is used to disable the input.</p>
  <DocsExample :example-src="exampleSrc2" :context="context" />
  <br />
  <p>Updates are debounced by default, and the minimum the delay between update events can be overridden:</p>
  <DocsExample :example-src="exampleSrc3" :context="context" />
</template>
<script setup lang="ts">
import { DocsExample } from '@/docs/components'
import { ref } from 'vue'

const value = ref('')
const value2 = ref('')
const context = { value, value2 }

const exampleSrc1 = `
<TextInput v-model="value" placeholder="Enter value" />
<p>Value: {{ value }}</p>
`

const exampleSrc2 = `
<TextInput disabled model-value="Disabled value" />
`

const exampleSrc3 = `
<TextInput v-model="value2" placeholder="Enter value" debounced />
<p>Value: {{ value2 }}</p>
`
</script>
