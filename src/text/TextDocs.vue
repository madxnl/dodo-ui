<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Basic text component
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { DocsComponentSection } from '../docs'
// @ts-ignore
import { DOCGEN as doc } from './Text.vue'

const text = 'A quick brown fox jumps over the lazy dog'
const longText = 'A quick brown fox jumps over the lazy dog. '.repeat(5)

const setup = () => ({ text, longText })

const template = `
<Text h1>{{ text }}</Text>
<Text h2>{{ text }}</Text>
<Text h3>{{ text }}</Text>
<Text p nowrap>{{ longText }}</Text>
<Text p variant="muted">{{ longText }}</Text>
<Text label align="right">{{ text }}</Text>
<Text h4><Text color="danger">Rich</Text> <em>text</em> <a href="#">example</a></Text>
<Text color="info"><strong>Color</strong> Some <Text strong>Color</Text> text</Text>`
</script>
