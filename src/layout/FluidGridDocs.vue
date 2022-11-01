<template>
  <Text p>
    Arrange items in a responsive grid. The number of columns automatically changes with available space and desired column width.
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
import { _docgen as docgen } from './FluidGrid.vue'

const setup = () => ({ imgUrl })

const template = `
<FluidGrid column-size="150px">
  <template v-for="i in 7" :key="i">
    <Row style="background:gold" padding="m" />
  </template>
</FluidGrid>
<br>
<FluidGrid column-size="250px">
  <template v-for="i in 7" :key="i">
    <Row style="background:gold" padding="m" />
  </template>
</FluidGrid>
`
</script>
