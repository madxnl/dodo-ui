<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>A container for arranging and aligning multiple child elements in a row.</p>
    </template>
    <template #example>
      <Row justify="between" gap="2" padding="2" style="background: var(--dodo-color-box)">
        <Button>Button 4</Button>
        <Row>
          <Button>Button 5</Button>
          <Button>Button 6</Button>
        </Row>
      </Row>
      <Row justify="center" align="start" padding="2" gap="4" style="background: var(--dodo-color-box)">
        <Button>Button 1</Button>
        <Column>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </Column>
      </Row>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { Button, Column, Row } from '@/components'
import { ComponentDocsSection } from '@/docs/components'

const exampleSrc = `<Row justify="between" gap="2" padding="2" style="background: pink">
  <Button>Button 4</Button>
  <Row>
    <Button>Button 5</Button>
    <Button>Button 6</Button>
  </Row>
</Row>
<Row justify="center" align="start" padding="2" gap="4" style="background: pink">
  <Button>Button 1</Button>
  <Column>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </Column>
</Row>`

const props = [
  {
    code: "gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'",
    description: 'Spacing between child elements'
  },
  {
    code: "padding?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'",
    description: 'Amount of padding around the contents'
  },
  {
    code: "justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'",
    description: 'Justify content along container axis'
  },
  {
    code: "align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'",
    description: 'Aligns children along cross-axis direction'
  },
  {
    code: 'wrap?: boolean',
    description: 'Child elements will wrap instead of shrinking'
  },
  {
    code: 'grow?: boolean',
    description: 'Grow to take up available space'
  }
]
</script>
