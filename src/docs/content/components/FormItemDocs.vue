<template>
  <p>
    The FormItem is a container component that renders the label, description and error messages each field in a form.
  </p>
  <LiveExample
    :template="`<FormItem label=&quot;Label&quot; description=&quot;Description&quot; >
    <TextInput v-model=&quot;value&quot; placeholder=&quot;Enter value&quot; />
</FormItem>`"
    :context="{ value }"
    :components="{ FormItem, TextInput }"
  />
  <br />
  <h4>Error</h4>
  <p>The error prop is used to specify an error message.</p>
  <LiveExample
    :template="`<FormItem label=&quot;Label&quot; error=&quot;Some error&quot; >
    <TextInput v-model=&quot;value&quot; placeholder=&quot;Enter value&quot; />
</FormItem>`"
    :context="{ value }"
    :components="{ FormItem, TextInput }"
  />
  <br />
  <h4>Optional</h4>
  <p>
    The optional prop is used to specify that the field is optional. Similarly, the required prop can be used to mark
    required fields in a form with mainly optional fields.
  </p>
  <LiveExample
    :template="`<FormItem label=&quot;Label&quot; optional >
    <TextInput v-model=&quot;value&quot; placeholder=&quot;Enter value&quot; />
</FormItem>`"
    :context="{ value }"
    :components="{ FormItem, TextInput }"
  />
</template>
<script setup lang="ts">
import { FormItem, TextInput } from '@/components'
import { LiveExample } from '@/docs/components'
import { ref } from 'vue'

const value = ref('')
</script>
