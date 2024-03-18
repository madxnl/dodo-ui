<template>
  <p>The SimpleSelect component is used to capture text input from the user.</p>
  <LiveExample
    template='<SimpleSelect v-model="value" placeholder="Enter value" :options="options" />'
    :context="{ value, options }"
  />
  <br />
  <h4>Disabled</h4>
  <p>SimpleSelect can be disabled using the disabled prop.</p>
  <LiveExample template='<SimpleSelect v-model="value" :options="options" disabled />' :context="{ value, options }" />
</template>
<script setup lang="ts">
import { LiveExample } from '@/docs/components'
import { ref } from 'vue'

const value = ref('1')
const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' }
]
</script>
