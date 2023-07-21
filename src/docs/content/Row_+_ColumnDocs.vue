<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Most layouts can be broken down into simple horizontal and vertical groupings of items.
      These components help you quickly build layouts with props for simplified spacing, padding and alignment.
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { DocsComponentSection } from '..'
import imgUrl from '../assets/placeholder32.png'
// @ts-ignore
import { DOCGEN as doc } from '../../components/Row.vue'

const setup = () => ({ imgUrl })

const template = `
<Column padding="4" style="background:tomato">
  <Row padding="2" style="background:orange">
    <img :src="imgUrl" style="height:100%">
    <Column gap="0" style="background:gold">
      <h4>Aaaa</h4>
      <p>Bbbb</p>
    </Column>
    <Row grow justify="end">
      <p>Cccc</p>
    </Row>
  </Row>
  <Row justify="center" style="background:orange">
    <p style="background:gold">Aaaa</p>
    <p style="background:gold">Bbbb</p>
  </Row>
  <Row gap="4" align="start">
    <Column gap="0" padding="2" style="background:orange"><h4>Aaaa</h4></Column>
    <Column gap="0" padding="4" style="background:orange"><h4>Aaaa</h4></Column>
    <Column gap="0" padding="6" style="background:orange"><h4>Aaaa</h4></Column>
  </Row>
</Column>
`
</script>
