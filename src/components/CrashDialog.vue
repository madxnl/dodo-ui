<template>
  <Dialog :active="showDialog">
    <h3>Something went wrong</h3>
    <slot name="body" :error="lastError" :default-text="defaultText">
      <p>
        {{ defaultText }}
      </p>
    </slot>
    <template #controls>
      <Button variant="text" @click="service.ignoreError">Ignore</Button>
      <Button variant="solid" color="info" @click="service.reloadPage">Reload page</Button>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { Button, Dialog, useCrashService } from '..'

const service = useCrashService()
const lastError = computed(() => service.currentError.value)
const showDialog = ref(false)
const defaultText = `
  An unexpected error occurred and the application may not function correctly until the page is reloaded.
  Any unsaved changes will be lost if you choose to reload the page.
`

watchEffect(() => {
  showDialog.value = !!lastError.value
})
</script>
