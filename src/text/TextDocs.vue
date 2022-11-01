<template>
  <Text p>
    Todo
  </Text>
  <Docs.DocsExample :options="{ template, setup }" />
</template>
<script setup lang="ts">
import { Text } from '..'
import * as Docs from '../docs'

const text = 'A quick brown fox jumps over the lazy dog'
const longText = 'A quick brown fox jumps over the lazy dog. '.repeat(5)

const setup = () => ({ text, longText })

const template = `
<Text h1>{{ text }}</Text>
<Text h2>{{ text }}</Text>
<Text h3>{{ text }}</Text>
<Text p nowrap>{{ longText }}</Text>
<Text p emphasis="low">{{ longText }}</Text>
<Text label align="right">{{ text }}</Text>
<Text h4><Text color="danger">Rich</Text> <em>text</em> <a href="#">example</a></Text>`
</script>
