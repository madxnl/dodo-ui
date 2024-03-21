<template>
  <p>A chip component that can be styled with different colors.</p>
  <LiveExample :template="exampleSrc" />
</template>
<script setup lang="ts">
import LiveExample from '@/docs/components/LiveExample.vue'

const exampleSrc = `<Row>
  <Chip>Default</Chip>
  <Chip color="gray">Gray</Chip>
  <Chip color="info">Info</Chip>
  <Chip color="success">Success</Chip>
  <Chip color="warning">Warning</Chip>
  <Chip color="danger">Danger</Chip>
</Row>`
</script>
