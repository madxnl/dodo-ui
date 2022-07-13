<template>
  <Row gap="xs" wrap>
    <Chip>Chip 1</Chip>
    <Chip color="success">Chip 2</Chip>
    <Chip color="info" closable @close="close">
      Chip 3
    </Chip>
    <Chip>
      Looooooooooooooooooooooooooooooooooooooooooooong
    </Chip>
  </Row>
</template>
<script lang="ts" setup>
import { Chip, Row } from '..'

function close() {
}
</script>
