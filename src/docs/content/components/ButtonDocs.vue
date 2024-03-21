<template>
  <ComponentDocsSection :example-src="exampleSrc">
    <template #description>
      <p>A customizable button component.</p>
    </template>
    <template #example>
      <Row wrap>
        <Button color="primary">Primary Button</Button>
        <Button color="success" variant="solid">Solid Button</Button>
        <Button color="warning" variant="text">Text Button</Button>
        <Button color="danger" :disabled="true">Disabled Button</Button>
        <Button square><Icon name="favorite" /></Button>
        <Button rounded><Icon name="star" /></Button>
        <Button small>Small Button</Button>
        <Button color="success" @click="asyncClick">Loading Button</Button>
      </Row>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { Button, Icon, Row } from '@/components'
import { ComponentDocsSection } from '@/docs/components'

const exampleSrc = `<Row wrap>
  <Button color="primary">Primary Button</Button>
  <Button color="success" variant="solid">Solid Button</Button>
  <Button color="warning" variant="text">Text Button</Button>
  <Button color="danger" :disabled="true">Disabled Button</Button>
  <Button square><Icon name="favorite" /></Button>
  <Button rounded><Icon name="star" /></Button>
  <Button small>Small Button</Button>
  <Button color="success" @click="asyncClick">Loading Button</Button>
</Row>`

async function asyncClick() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
</script>
