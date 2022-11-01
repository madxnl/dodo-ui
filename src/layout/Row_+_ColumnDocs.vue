<template>
  <Text p>
    Most layouts can be broken down into simple horizontal and vertical groupings of items.
    These components help you quickly build layouts with props for simplified spacing, padding and alignment.
  </Text>
  <Tabs :tabs="[{ name: 'Example' }, { name: 'API' }]">
    <template #Example><DocsExample :options="{ setup, template }" /></template>
    <template #API><PropsTable :docgen="docgen" /></template>
  </Tabs>
</template>
<script setup lang="ts">
import { Tabs, Text } from '..'
import imgUrl from '../assets/placeholder32.png'
import { DocsExample, PropsTable } from '../docs'
// @ts-ignore no exported member:
import { _docgen as docgen } from './Row.vue'

const setup = () => ({ imgUrl })

const template = `
<Column padding="m" style="background:tomato">
  <Row padding="s" style="background:orange">
    <img :src="imgUrl" style="height:100%">
    <Column gap="0" style="background:gold">
      <Text h4>Aaaa</Text>
      <Text>Bbbb</Text>
    </Column>
    <Row grow justify="end">
      <Text>Cccc</Text>
    </Row>
  </Row>
  <Row justify="center" style="background:orange">
    <Text style="background:gold">Aaaa</Text>
    <Text style="background:gold">Bbbb</Text>
  </Row>
  <Row gap="m" align="start">
    <Column gap="0" padding="s" style="background:orange"><Text h4>Aaaa</Text></Column>
    <Column gap="0" padding="m" style="background:orange"><Text h4>Aaaa</Text></Column>
    <Column gap="0" padding="l" style="background:orange"><Text h4>Aaaa</Text></Column>
  </Row>
</Column>
`
</script>
