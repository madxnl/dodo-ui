<template>
  <Row gap="s" wrap>
    <Chip color="success">Chip 1</Chip>
    <Chip>Chip 2</Chip>
    <Chip color="info" @click="click">Chip 3 <Icon name="close" small /></Chip>
    <Chip>Chip long long long long long long long long long long long long long long long long long long long long</Chip>
  </Row>
</template>
<script lang="ts" setup>
import { Chip, Icon, Row } from '..'

function click() {
}
</script>
