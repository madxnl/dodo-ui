<template>
  <Text p>
    Displays a picture for a user or team, or fallback to showing initials on a colored backdrop. The color is randomized based on text.
  </Text>
  <DocsExample :options="{ setup, template }" />
</template>
<script setup lang="ts">
import { DocsExample, Text } from '..'
import imgUrl from '../assets/placeholder32.png'

const setup = () => ({ imgUrl })

const template = `
<Row wrap>
  <Avatar text="Image" :image="imgUrl" />
  <Avatar text="A" />
  <Avatar text="B" />
  <Avatar text="C" />
  <Avatar text="D" />
  <Avatar text="H" />
  <Avatar text="J K" />
  <Avatar text="K L" />
  <Avatar text="L M" />
  <Avatar text="M N" round />
  <Avatar text="N O" round />
  <Avatar text="?" round />
</Row>
`
</script>
