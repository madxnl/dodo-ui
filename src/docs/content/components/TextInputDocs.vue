<template>
  <p>The TextInput component is used to capture text input from the user.</p>
  <LiveExample template='<TextInput v-model="value" placeholder="Enter value" />' :context="{ value }" />
  <br />
  <h4>Disabled</h4>
  <p>The disabled prop is used to disable the input.</p>
  <LiveExample template='<TextInput v-model="value" disabled />' :context="{ value }" />
</template>
<script setup lang="ts">
import { LiveExample } from '@/docs/components'
import { ref } from 'vue'

const value = ref('')
</script>
