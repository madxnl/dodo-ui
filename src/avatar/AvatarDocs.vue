<template>
  <D.Text p>
    Displays a picture for a user or team, or fallback to showing initials on a colored backdrop. The color is randomized based on text.
  </D.Text>
  <D.Tabs
    :tabs="[
      { name: 'Example', slot: 'example' },
      { name: 'API', slot: 'api' },
    ]"
  >
    <template #example><Docs.DocsExample :options="{ setup, template }" /></template>
    <template #api><Docs.PropsTable :docgen="docgen" /></template>
  </D.Tabs>
</template>
<script setup lang="ts">
import * as D from '..'
import imgUrl from '../assets/placeholder32.png'
import * as Docs from '../docs'
// @ts-ignore no exported member:
import { _docgen as docgen } from './Avatar.vue'

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
