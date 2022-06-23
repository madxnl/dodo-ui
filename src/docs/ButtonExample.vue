<template>
  <Row gap="s" wrap>
    <Button variant="solid" color="success">
      Color
    </Button>
    <Button variant="text">Text</Button>
    <Button rounded>Rounded</Button>
    <Button color="foreground">Border</Button>

    <Button variant="solid" color="info" small>
      Small
    </Button>

    <Button>
      Icon
      <Icon name="heart" />
    </Button>
    <Button variant="solid" square color="danger">
      <Icon name="heart" size="large" />
    </Button>

    <Button variant="solid" color="info" disabled>
      Disabled
    </Button>

    <Button color="info" small variant="text" @click="myAsyncSubmit">Async click</Button>
    <Button variant="solid" color="info" @click="myAsyncSubmit">Async click</Button>
  </Row>
</template>
<script lang="ts" setup>
import { Icon, Row, Button } from '..'

async function myAsyncSubmit() {
  await new Promise(resolve => setTimeout(resolve, 3000))
}
</script>
