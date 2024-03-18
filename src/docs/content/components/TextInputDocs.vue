<template>
  <p>The TextInput component is used to capture text input from the user.</p>
  <LiveExample
    template='<TextInput v-model="value" placeholder="Enter value" />'
    :context="{ value }"
    :components="{ TextInput }"
  />
  <br />
  <h4>Disabled</h4>
  <p>The disabled prop is used to disable the input.</p>
  <LiveExample template='<TextInput v-model="value" disabled />' :context="{ value }" :components="{ TextInput }" />
</template>
<script setup lang="ts">
import { TextInput } from '@/components'
import { LiveExample } from '@/docs/components'
import { ref } from 'vue'

const value = ref('')
</script>
