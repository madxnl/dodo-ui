<template>
  <p>A container for content with a shadow, border, and optional hover and active states.</p>

  <DocsExample :exampleSrc="exampleSrc">
    <Card>
      <h4>Title</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <Button>Click Me</Button>
    </Card>
  </DocsExample>

  <Column>
    <h4>Properties</h4>
    <SyntaxHighlight lang="ts" :code="properties" />
  </Column>
</template>
<script setup lang="ts">
import { DocsExample, SyntaxHighlight } from '..'
import { Button, Card, Column } from '../..'

const properties = `hoverable?: boolean
active?: boolean
gap?: GapSize
padding?: GapSize`

const exampleSrc = `<Card>
  <h4>Title</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <Button>Click Me</Button>
</Card>`
</script>
