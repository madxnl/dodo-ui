<template>
  <ComponentDocsSection :example-src="exampleSrc">
    <template #description>
      <p>A container for arranging and aligning multiple child elements in a column.</p>
    </template>
    <template #example>
      <Column justify="between" gap="s" padding="m" style="background: lightblue">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Row>
          <Button>Button 3</Button>
          <Button>Button 4</Button>
        </Row>
      </Column>
      <Column justify="center" align="end" padding="s" gap="m" style="background: lightblue">
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
import { Button, Column, Row } from '@/components'
import { ComponentDocsSection } from '@/docs/components'

const exampleSrc = `<Column justify="between" gap="s" padding="m" style="background: lightblue">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Row>
    <Button>Button 3</Button>
    <Button>Button 4</Button>
  </Row>
</Column>
<Column justify="center" align="end" padding="s" gap="m" style="background: lightblue">
  <Button>Button 5</Button>
  <Row>
    <Button>Button 6</Button>
    <Button>Button 7</Button>
  </Row>
</Column>`
</script>
