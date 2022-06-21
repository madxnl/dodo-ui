<template>
  <Teleport to=body v-if="currentError">
    <Dialog title="Something went wrong">
      <template #content>
        <div>
          An unexpected error occurred and the application may not function correctly until the page is reloaded.
          Any unsaved changes will be lost if you choose to reload the page.
        </div>
        <div>Please contact us if the problem persists.</div>
      </template>
      <template #controls>
        <Button @click="ignore">Ignore</Button>
        <Button variant="solid" color="info" @click="reload">Reload page</Button>
      </template>
    </Dialog>
  </Teleport>

  <slot></slot>
</template>

<script lang="ts" setup>
import { onErrorCaptured, ref } from 'vue';
import Button from '../button/Button.vue';
import Dialog from '../dialog/Dialog.vue';

const currentError = ref<Error>()

onErrorCaptured((err, component, info) => {
  console.log('onErrorCaptured')
  currentError.value = err
})

function reload() {
  location.reload()
}

function ignore() {
  currentError.value = undefined
}
</script>
