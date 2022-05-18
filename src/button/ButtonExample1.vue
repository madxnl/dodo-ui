<template>
  <Button color="#00aa55">Button</Button>
  <Button class="text" color="blue">Text</Button>
  <Button class="border" fontsize="22px" color="#f00">
    Border
  </Button>
  <Button @click="myAsyncSubmit">Async support (click me)</Button>
</template>
<script lang="ts" setup>
import Button from './Button.vue';

async function myAsyncSubmit() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  // throw new Error('foo')
}
</script>
