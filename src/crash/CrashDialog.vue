<template>
  <Dialog
    v-if="crashInfo.getError()"
    modal-title="Something went wrong">
    <template #content>
      <p>
        An unexpected error occurred and the application may not function correctly until the page is reloaded.
        Any unsaved changes will be lost if you choose to reload the page.
      </p>
      <p>Please contact us if the problem persists.</p>
    </template>
    <template #controls>
      <Button @click="ignore">Ignore</Button>
      <Button color="brand-600" variant="solid" @click="reload">Reload page</Button>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import Button from '../button/Button.vue';
import Dialog from '../dialog/Dialog.vue';
// import { Button, Dialog } from '..'
import { useCrashInfo } from './crashInfo';

const crashInfo = useCrashInfo()

function reload() {
  location.reload()
}

function ignore() {
  crashInfo.setError(null)
}
</script>
