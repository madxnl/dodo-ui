<template>
  <Modal :active="showDialog">
    <Text h2>Something went wrong</Text>
    <Text>
      An unexpected error occurred and the application may not function correctly until the page is reloaded.
      Any unsaved changes will be lost if you choose to reload the page.
    </Text>
    <Text>Please contact us if the problem persists.</Text>
    <template #controls>
      <Button variant="text" @click="ignore">Ignore</Button>
      <Button variant="solid" color="info" @click="reload">Reload page</Button>
    </template>
  </Modal>

  <slot />
</template>

<script lang="ts" setup>
import { onErrorCaptured, ref } from 'vue'
import Button from './Button.vue'
import Modal from './Modal.vue'
import Text from './Text.vue'

const emit = defineEmits<{
  (e: 'error', error: Error): void
}>()

const showDialog = ref(false)
const ignored = ref(false)
const ignoreDuration = 600 * 1000

onErrorCaptured((err, component, info) => {
  // eslint-disable-next-line no-console
  console.error(err)

  if (!ignored.value) {
    showDialog.value = true
  }
  emit('error', err)
})

function reload() {
  location.reload()
}

function ignore() {
  showDialog.value = false
  ignored.value = true
  setTimeout(() => { ignored.value = false }, ignoreDuration)
}
</script>
