<template>
  <p>
    Displays a picture for a user or team, or fallback to showing initials on a colored backdrop. The color is chosen
    based on the input text.
  </p>

  <DocsExample :exampleSrc="exampleSrc">
    <Row wrap>
      <Avatar text="Image" :image="imgUrl" />
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
      <Avatar text="J K" />
      <Avatar text="M N" round />
      <Avatar text="N O" round />
      <Avatar text="?" round />
    </Row>
  </DocsExample>

  <Column>
    <h4>Properties</h4>
    <SyntaxHighlight lang="ts" :code="properties" />
  </Column>
</template>
<script setup lang="ts">
import { DocsExample, SyntaxHighlight } from '..'
import { Avatar, Column, Row } from '../..'
import imgUrl from '../assets/placeholder32.png'

const properties = `text: string
image?: string | null
round?: boolean`

const exampleSrc = `<Row wrap>
  <Avatar text="Image" :image="imgUrl" />
  <Avatar text="A" />
  <Avatar text="B" />
  <Avatar text="C" />
  <Avatar text="J K" />
  <Avatar text="M N" round />
  <Avatar text="N O" round />
  <Avatar text="?" round />
</Row>`
</script>
