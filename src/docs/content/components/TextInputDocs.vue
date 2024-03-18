<template>
  <p>The TextInput component is used to capture text input from the user.</p>
  <LiveExample
    template='<TextInput v-model="value" placeholder="Enter value" />'
    :context="{ value }"
    :components="{ TextInput }"
  />
  <br />
  <h4>Label</h4>
  <p>The label and description props are used to specify a label and description.</p>
  <LiveExample
    template='<TextInput v-model="value" label="Label" description="Description" />'
    :context="{ value }"
    :components="{ TextInput }"
  />
  <br />
  <h4>Error</h4>
  <p>The error prop is used to specify an error message.</p>
  <LiveExample
    template='<TextInput v-model="value" error="Error message" />'
    :context="{ value }"
    :components="{ TextInput }"
  />
  <br />
  <h4>Disabled</h4>
  <p>The disabled prop is used to disable the input.</p>
  <LiveExample
    template='<TextInput label="Disabled" v-model="value" disabled />'
    :context="{ value }"
    :components="{ TextInput }"
  />
</template>
<script setup lang="ts">
import { TextInput } from '@/components'
import { LiveExample } from '@/docs/components'
import { ref } from 'vue'

const value = ref('')
</script>
