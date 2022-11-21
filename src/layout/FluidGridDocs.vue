<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Arrange items in a responsive grid. The number of columns automatically changes with available space and desired column width.
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import imgUrl from '../assets/placeholder32.png'
import { DocsComponentSection } from '../docs'
// @ts-ignore
import { DOCGEN as doc } from './FluidGrid.vue'

const setup = () => ({ imgUrl })

const template = `
<FluidGrid column-size="150px">
  <template v-for="i in 7" :key="i">
    <Row style="background:gold" padding="4" />
  </template>
</FluidGrid>
<br>
<FluidGrid column-size="250px">
  <template v-for="i in 7" :key="i">
    <Row style="background:gold" padding="4" />
  </template>
</FluidGrid>
`
</script>
