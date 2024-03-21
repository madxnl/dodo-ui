<template>
  <ComponentDocsSection :example-src="exampleSrc">
    <template #description>
      <p>A container for arranging and aligning multiple child elements in a row.</p>
    </template>
    <template #example>
      <Row justify="between" gap="s" padding="s" style="background: var(--dodo-color-box)">
        <Button>Button 4</Button>
        <Row>
          <Button>Button 5</Button>
          <Button>Button 6</Button>
        </Row>
      </Row>
      <Row justify="center" align="start" padding="s" gap="m" style="background: var(--dodo-color-box)">
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

const exampleSrc = `<Row justify="between" gap="s" padding="s" style="background: pink">
  <Button>Button 4</Button>
  <Row>
    <Button>Button 5</Button>
    <Button>Button 6</Button>
  </Row>
</Row>
<Row justify="center" align="start" padding="s" gap="m" style="background: pink">
  <Button>Button 1</Button>
  <Column>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </Column>
</Row>`
</script>
