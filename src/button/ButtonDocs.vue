<template>
  <Text p>
    Main button component, with multiple variants and support for async click handlers.
  </Text>
  <DocsExample :options="{ setup, template }" />
</template>
<script setup lang="ts">
import { DocsExample, parseColor, Text } from '..'

const customColor = parseColor('#ff8888')

async function myAsyncSubmit() {
  await new Promise(resolve => setTimeout(resolve, 3000))
}

const setup = () => ({ customColor, myAsyncSubmit })

const template = `
<Row gap="s" wrap>
  <Button variant="solid" color="success">Button 1</Button>
  <Button variant="text">Button 2</Button>
  <Button rounded>Button 3</Button>
  <Button color="info">Button 4</Button>
  <Button variant="solid" :color="customColor" small>Button 5</Button>
  <Button color="success"><Icon name="new_releases" fill />Button 6</Button>
  <Button variant="solid" square color="danger"><Icon name="favorite" fill /></Button>
  <Button variant="solid" color="info" disabled>Disabled</Button>
  <Button color="info" small variant="text" @click="myAsyncSubmit">Async 1</Button>
  <Button variant="solid" color="info" @click="myAsyncSubmit">Async 2</Button>
</Row>
`
</script>
