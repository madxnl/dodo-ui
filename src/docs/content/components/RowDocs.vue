<template>
  <p>A container for arranging and aligning multiple child elements in a row.</p>
  <br />
  <DocsExample :example-src="exampleSrc" />
</template>
<script setup lang="ts">
import { DocsExample } from '@/docs/components'

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
