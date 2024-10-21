<template>
  <p>A customizable button component.</p>
  <br />
  <DocsExample :example-src="exampleSrc" :context="{ asyncClick }" />
</template>
<script setup lang="ts">
import { DocsExample } from '@/docs/components'

const exampleSrc = `<Row wrap>
  <Button><Icon name="home" /> Default Button</Button>
  <Button color="success" variant="solid">Solid Button</Button>
  <Button color="warning" variant="link">Text Button</Button>
  <Button variant="solid" color="danger" :disabled="true">Disabled Button</Button>
  <Button square><Icon name="favorite" /></Button>
  <Button round variant="solid" color="danger"><Icon name="star" /></Button>
  <Button size="s">Small Button</Button>
  <Button color="success" @click="asyncClick">Async click</Button>
</Row>`

async function asyncClick() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
</script>
