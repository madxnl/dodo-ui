<template>
  <div>
    <CrashDialog>
      <Button @click="throwError">
        Show example
      </Button>
    </CrashDialog>
  </div>
</template>
<script lang="ts" setup>
import { onErrorCaptured } from 'vue'
import { Button, CrashDialog } from '../..'

const message = 'Test error'

function throwError() {
  throw new Error(message)
}

// Ignore the example error
onErrorCaptured((err, component, info) => {
  if (err.message === message) return false
})
</script>
