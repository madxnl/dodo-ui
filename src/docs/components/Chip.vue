<template>
  <p>A small, rounded container for displaying short snippets of information.</p>

  <DocsExample :exampleSrc="exampleSrc">
    <Row>
      <Chip>Default</Chip>
      <Chip color="info">Info</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warn">Warning</Chip>
      <Chip color="danger">Danger</Chip>
    </Row>
  </DocsExample>

  <Column>
    <h4>Properties</h4>
    <SyntaxHighlight lang="ts" :code="properties" />
  </Column>
</template>
<script setup lang="ts">
import { DocsExample, SyntaxHighlight } from '..'
import { Chip, Column, Row } from '../..'

const properties = `color?: ColorProp`

const exampleSrc = `<Row>
  <Chip>Default</Chip>
  <Chip color="info">Info</Chip>
  <Chip color="success">Success</Chip>
  <Chip color="warn">Warning</Chip>
  <Chip color="danger">Danger</Chip>
</Row>`
</script>
