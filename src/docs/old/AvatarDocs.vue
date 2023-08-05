<template>
  <h2>Avatar</h2>
  <p>
    Displays a picture for a user or team, or fallback to showing initials on a colored backdrop. The color is chosen
    based on the input text.
  </p>

  <Column>
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
  </Column>

  <Column v-if="propTypes">
    <h4>Props</h4>
    <SyntaxHighlight :code="propTypes" lang="ts" />
  </Column>
</template>
<script setup lang="ts">
import { DocsExample } from '..'
import { Avatar, Column, Row } from '../..'
import SyntaxHighlight from '../SyntaxHighlight.vue'
import imgUrl from '../assets/placeholder32.png'

const propTypes = `text: string
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
