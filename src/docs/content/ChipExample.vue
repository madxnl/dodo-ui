<template>
  <Row gap="xs" wrap>
    <Chip>Chip 1</Chip>
    <Chip color="success">Chip 2</Chip>
    <Chip color="info" @click="onClose">
      Chip 3
      <template #after><Icon name="close" small /></template>
    </Chip>
    <Chip>
      Looooooooooooooooooooooooooooooooooooooooooooong
    </Chip>
  </Row>
</template>
<script lang="ts" setup>
import { Chip, Icon, Row } from '../..'

function onClose() {}
</script>
