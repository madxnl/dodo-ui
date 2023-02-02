<template>
  <Text p>
    Automatically display a helpful dialog when an unhandled exception occurs. Requires the <code>CrashService</code> to be registered with app.use().
  </Text>
  <Docs.DocsExample :options="{ template, setup }" />
</template>
<script setup lang="ts">
import { Text } from '..'
import * as Docs from '../docs'

const message = 'Test error'

const setup = () => {
  function throwError() {
    throw new Error(message)
  }
  return { throwError }
}

const template = `
  <Button @click="throwError">
    Show example
  </Button>
  <CrashDialog />
`
</script>
