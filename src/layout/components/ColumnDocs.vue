<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>A container for arranging and aligning multiple child elements in a column.</p>
    </template>
    <template #example>
      <Column justify="between" gap="2" padding="4" style="background: lightblue">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Row>
          <Button>Button 3</Button>
          <Button>Button 4</Button>
        </Row>
      </Column>
      <Column justify="center" align="end" padding="2" gap="4" style="background: lightblue">
        <Button>Button 5</Button>
        <Row>
          <Button>Button 6</Button>
          <Button>Button 7</Button>
        </Row>
      </Column>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { ComponentDocsSection } from '@/docs'
import { Button } from '@/ui'
import { Column, Row } from '.'

const exampleSrc = `<Column justify="between" gap="2" padding="4" style="background: lightblue">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Row>
    <Button>Button 3</Button>
    <Button>Button 4</Button>
  </Row>
</Column>
<Column justify="center" align="end" padding="2" gap="4" style="background: lightblue">
  <Button>Button 5</Button>
  <Row>
    <Button>Button 6</Button>
    <Button>Button 7</Button>
  </Row>
</Column>`

const props = [
  {
    code: "gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'",
    description: 'Spacing between child elements',
  },
  {
    code: "padding?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'",
    description: 'Amount of padding around the content',
  },
  {
    code: 'grow?: boolean',
    description: 'Grow to take up available space (when nested inside another Column)',
  },
  {
    code: "justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'",
    description: 'Justify content along container axis',
  },
  {
    code: "align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'",
    description: 'Aligns children along cross-axis direction',
  },
  {
    code: 'wrap?: boolean',
    description: 'Wrap contents over instead of shrinking',
  },
]
</script>
