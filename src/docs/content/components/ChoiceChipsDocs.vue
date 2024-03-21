<template>
  <p>A component for selecting either one or multiple options from a list of options.</p>
  <LiveExample
    :template="template1"
    :setup="`const currentValue = ref(1)
return { currentValue }`"
  />
  <br />
  <h4>Multiselect</h4>
  <p>To enable multiselect, set the <code>multiple</code> prop to <code>true</code>.</p>
  <LiveExample
    :template="template2"
    :setup="`const currentValues = ref([1, 2])
return { currentValues }`"
  />
</template>
<script setup lang="ts">
import LiveExample from '@/docs/components/LiveExample.vue'

const template1 = `<ChoiceChips v-model="currentValue" :options="[
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
]" />`

const template2 = `<ChoiceChips v-model="currentValues" multiple :options="[
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
]" />`
</script>
