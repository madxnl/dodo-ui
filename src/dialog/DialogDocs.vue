<template>
  <Text p>
    Create a custom dialog modal that requires user interaction to continue.
  </Text>
  <Docs.DocsExample :options="{ template, setup }" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Text } from '..'
import * as Docs from '../docs'

const showDialog = ref(false)

const setup = () => ({ showDialog })

const template = `
<Button @click="showDialog=true">
  Show dialog example
</Button>

<Dialog :active="showDialog">
  <Text h3>My dialog</Text>
  <Text>Dialog example</Text>
  <template #controls>
    <Button variant="text" @click="showDialog=false">Cancel</Button>
    <Button variant="solid" color="info" @click="showDialog=false">Confirm</Button>
  </template>
</Dialog>`
</script>
