<template>
  <Row gap="s">
    <Button variant="solid" color="success">Color</Button>
    <Button variant="text">Text</Button>
    <Button >Text</Button>
    <Button  color="foreground">Border</Button>
  </Row>

  <Button variant="solid" color="info" small>
    Small
    <UiIcon name="heart"  />
  </Button>

  <Button>
    Some button
  </Button>

  <Row gap="s">
    <Button  color="danger">
      Icon
      <UiIcon name="heart" />
    </Button>
    <Button variant="solid" square color="danger">
      <UiIcon name="heart" size="large" />
    </Button>
  </Row>

  <Button variant="solid" color="info" disabled>
    Disabled
  </Button>

  <Button variant="solid" @click="myAsyncSubmit" color="info">
    Async click event
  </Button>
</template>
<script lang="ts" setup>
import UiIcon from '../icon/UiIcon.vue';
import Row from '../layout/Row.vue';
import Button from './Button.vue';

async function myAsyncSubmit() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('done')
}
</script>
