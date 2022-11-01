<template>
  <Text p>
    Allows contents to scroll if needed.
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
import { _docgen as docgen } from './ScrollContainer.vue'

const setup = () => ({ imgUrl })

const template = `
<Column style="height:300px">
  <ScrollContainer style="background:khaki">
    <Text h2 v-for="i in 15">{{ i }}</Text>
  </ScrollContainer>
</Column>
`
</script>
