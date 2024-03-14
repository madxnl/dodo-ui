<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>A common card component with customizable styling options.</p>
    </template>
    <template #example>
      <Card padding="4" gap="2">
        <p>Card content</p>
      </Card>
      <Card padding="4" gap="2" hoverable>
        <p>Card hoverable</p>
      </Card>
      <Card padding="4" gap="2" active>
        <p>Card active</p>
      </Card>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { Card } from '@/components'
import { ComponentDocsSection } from '../components'

const exampleSrc = `<Card padding="4" gap="2">
  <p>Card content</p>
</Card>
<Card padding="4" gap="2" hoverable>
  <p>Card hoverable</p>
</Card>
<Card padding="4" gap="2" active>
  <p>Card active</p>
</Card>`

const props = [
  {
    code: 'hoverable?: boolean',
    description: 'Adds hover effect to the card'
  },
  {
    code: 'active?: boolean',
    description: 'Adds active effect to the card'
  },
  {
    code: "gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'",
    description: 'Spacing between child elements in the card'
  },
  {
    code: "padding?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'",
    description: 'Padding around the card content'
  }
]
</script>
