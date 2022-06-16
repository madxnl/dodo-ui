<template>
  <div>
    <UiButton color="success">Color</UiButton>
    <UiButton variant="text">Text</UiButton>
    <UiButton variant="border" color="danger">Border</UiButton>
  </div>

  <UiButton color="info" size="small">
    Small
    <UiIcon name="heart"  />
  </UiButton>

  <UiButton color="info" size="large">
    Large
    <UiIcon name="heart"  />
  </UiButton>

  <div>
    <UiButton variant="text" color="danger">
      Icon
      <UiIcon name="heart" />
    </UiButton>
    <UiButton square color="danger">
      <UiIcon name="heart" size="large" />
    </UiButton>
  </div>

  <UiButton color="info" disabled>
    Disabled
  </UiButton>

  <UiButton @click="myAsyncSubmit" color="info">
    Async click event
  </UiButton>
</template>
<script lang="ts" setup>
import UiIcon from '../icon/UiIcon.vue';
import UiButton from './UiButton.vue';

async function myAsyncSubmit() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('done')
}
</script>
