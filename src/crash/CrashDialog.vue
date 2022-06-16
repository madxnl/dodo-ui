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
        <UiButton variant="border" @click="ignore">Ignore</UiButton>
        <UiButton color="info" @click="reload">Reload page</UiButton>
      </template>
    </Dialog>
  </Teleport>

  <slot></slot>
</template>

<script lang="ts" setup>
import { onErrorCaptured, ref } from 'vue';
import UiButton from '../button/UiButton.vue';
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
