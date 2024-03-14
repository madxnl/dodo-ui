<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>A chip component that can be styled with different colors.</p>
    </template>
    <template #example>
      <Row>
        <Chip>Default Chip</Chip>
        <Chip color="info">Info Chip</Chip>
        <Chip color="warn">Warn Chip</Chip>
      </Row>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { Chip, Row } from '@/components'
import { ComponentDocsSection } from '../components'

const exampleSrc = `<Row>
  <Chip>Default Chip</Chip>
  <Chip color="info">Info Chip</Chip>
  <Chip color="warn">Warn Chip</Chip>
</Row>`

const props = [
  {
    code: 'color?: "info" | "warn" | "success" | "danger" | "background" | "foreground" | "primary" | "secondary"',
    description: 'The color of the chip'
  }
]
</script>
