<template>
  <Text p>
    Automatically display a helpful dialog when an unhandled exception occurs anywhere below this component in the component tree.
  </Text>
  <Text p>
    To detect exceptions for your entire project, import this at the App.vue level and put your template code inside the &lt;CrashDialog&gt; tag
  </Text>
  <DocsExample :options="{ template, setup, errorCaptured }" />
</template>
<script setup lang="ts">
import { DocsExample, Text } from '..'

const message = 'Test error'

function throwError() {
  throw new Error(message)
}

// Ignore the example error
function errorCaptured(err: any) {
  if (err.message === message) return false
}

const setup = () => ({ throwError })

const template = `
<CrashDialog>
  <Button @click="throwError">
    Show example
  </Button>
</CrashDialog>
`
</script>
