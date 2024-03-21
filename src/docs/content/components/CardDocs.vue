<template>
  <p>A common card component with customizable styling options.</p>
  <LiveExample :template="example" />
</template>
<script setup lang="ts">
import LiveExample from '@/docs/components/LiveExample.vue'

const example = `<Card padding="m">
  <p>Card content</p>
</Card>
<Card padding="m" gap="0" hoverable>
  <p>Card hoverable</p>
  <p>Second paragraph</p>
</Card>
<Card padding="m" active>
  <p>Card active</p>
</Card>`
</script>
