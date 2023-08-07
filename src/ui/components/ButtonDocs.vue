<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>A customizable button component.</p>
    </template>
    <template #example>
      <Row wrap>
        <Button color="primary">Primary Button</Button>
        <Button color="success" variant="solid">Solid Button</Button>
        <Button color="warn" variant="text">Text Button</Button>
        <Button color="danger" :disabled="true">Disabled Button</Button>
        <Button square><Icon name="favorite" /></Button>
        <Button rounded><Icon name="star" /></Button>
        <Button small>Small Button</Button>
        <Button @click="asyncClick">Loading Button</Button>
      </Row>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { ComponentDocsSection } from '@/docs'
import { Button, Icon, Row } from '../..'

const exampleSrc = `<Row wrap>
  <Button color="primary">Primary Button</Button>
  <Button color="success" variant="solid">Solid Button</Button>
  <Button color="warning" variant="text">Text Button</Button>
  <Button color="danger" :disabled="true">Disabled Button</Button>
  <Button square><Icon name="favorite" /></Button>
  <Button rounded><Icon name="star" /></Button>
  <Button small>Small Button</Button>
  <Button @click="asyncClick">Loading Button</Button>
</Row>`

const props = [
  {
    code: 'color?: ColorProp',
    description: 'Sets the button color',
  },
  {
    code: "variant?: 'text' | 'solid'",
    description: 'Sets the button variant',
  },
  {
    code: "type?: 'button' | 'submit'",
    description: 'Specifies the button type',
  },
  {
    code: 'square?: boolean',
    description: 'Creates a square button for icons',
  },
  {
    code: 'rounded?: boolean',
    description: 'Creates a rounded button',
  },
  {
    code: 'small?: boolean',
    description: 'Changes the button size to small',
  },
  {
    code: 'active?: boolean',
    description: 'Styles the button as active',
  },
  {
    code: 'disabled?: boolean',
    description: 'Disables the button',
  },
]

async function asyncClick() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
</script>
