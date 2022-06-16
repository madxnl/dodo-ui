<template>
  <div>
    <UiButton color="success">UiButton</UiButton>
    <UiButton variant="text">Text</UiButton>
    <UiButton variant="border" color="danger">Border</UiButton>
  </div>
  <div>
    <UiButton color="info" disabled>Disabled</UiButton>
    <UiButton color="info" size="small">Small <UiIcon name="delete"  /></UiButton>
    <UiButton color="info" size="large">Large</UiButton>
  </div>
  <div>
    <UiButton variant="text" color="danger">
      Heart <UiIcon name="heart" />
    </UiButton>
    <UiButton color="danger">
      <UiIcon name="plus"  />
      Heart
    </UiButton>
    <UiButton square color="danger">
      <UiIcon name="close" size="large" />
    </UiButton>
    <UiButton square variant="text" color="danger">
      <UiIcon name="close" size="large" />
    </UiButton>
    <UiButton square color="danger">
      <UiIcon name="delete" size="large" />
    </UiButton>
    <UiButton square variant="text" color="danger">
      <UiIcon name="delete" size="large" />
    </UiButton>
  </div>
  <UiButton @click="myAsyncSubmit" color="info">Async (click me!)</UiButton>
</template>
<script lang="ts" setup>
import UiIcon from '../icon/UiIcon.vue';
import UiButton from './UiButton.vue';

async function myAsyncSubmit() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('done')
}
</script>
