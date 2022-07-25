<template>
  <Row gap="s" wrap>
    <Button variant="solid" color="success">
      Button 1
    </Button>
    <Button variant="text">Button 2</Button>
    <Button rounded>Button 3</Button>
    <Button color="info">Button 4</Button>

    <Button variant="solid" :color="customColor" small>
      Button 5
    </Button>

    <Button color="success">
      Button 6
      <Icon name="thumb_up" fill small />
    </Button>
    <Button variant="solid" square color="danger">
      <Icon name="favorite" large fill />
    </Button>

    <Button variant="solid" color="info" disabled>
      Disabled
    </Button>

    <Button color="info" small variant="text" @click="myAsyncSubmit">Async 1</Button>
    <Button variant="solid" color="info" @click="myAsyncSubmit">Async 2</Button>
  </Row>
</template>
<script lang="ts" setup>
import { Button, Icon, Row, useCustomColor } from '../..'

const customColor = useCustomColor('#ff8888')

async function myAsyncSubmit() {
  await new Promise(resolve => setTimeout(resolve, 3000))
}
</script>
