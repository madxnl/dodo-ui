<template>
  <UiButton color="success">UiButton</UiButton>
  <UiButton variant="text" color="info">Text</UiButton>
  <UiButton variant="border" fontsize="22px" color="danger">
    Border
  </UiButton>
  <UiButton @click="myAsyncSubmit">Async (click me!)</UiButton>
</template>
<script lang="ts" setup>
import UiButton from './UiButton.vue';

async function myAsyncSubmit() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  throw new Error('foo')
}
</script>
