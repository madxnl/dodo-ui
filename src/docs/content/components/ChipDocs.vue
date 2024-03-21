<template>
  <ComponentDocsSection :example-src="exampleSrc">
    <template #description>
      <p>A chip component that can be styled with different colors.</p>
    </template>
    <template #example>
      <Row>
        <Chip>Default Chip</Chip>
        <Chip color="info">Info Chip</Chip>
        <Chip color="warning">Warning Chip</Chip>
      </Row>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { Chip, Row } from '@/components'
import { ComponentDocsSection } from '@/docs/components'

const exampleSrc = `<Row>
  <Chip>Default Chip</Chip>
  <Chip color="info">Info Chip</Chip>
  <Chip color="warning">Warning Chip</Chip>
</Row>`
</script>
