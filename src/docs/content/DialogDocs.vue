<template>
  <p>
    Create a custom dialog modal that requires user interaction to continue.
  </p>
  <Docs.DocsExample :options="{ template, setup }" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import * as Docs from '..'

const showDialog = ref(false)

const setup = () => ({ showDialog })

const template = `
<Button @click="showDialog=true">
  Show dialog example
</Button>

<Dialog :active="showDialog">
  <h3>My dialog</h3>
  <p>Dialog example</p>
  <template #controls>
    <Button variant="text" @click="showDialog=false">Cancel</Button>
    <Button variant="solid" color="info" @click="showDialog=false">Confirm</Button>
  </template>
</Dialog>`
</script>
