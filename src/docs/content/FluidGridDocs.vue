<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Arrange items in a responsive grid. The number of columns automatically changes with available space and desired column width.
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { DocsComponentSection } from '..'
import imgUrl from '../assets/placeholder32.png'
// @ts-ignore
import { DOCGEN as doc } from '../../components/layout/FluidGrid.vue'

const setup = () => ({ imgUrl })

const template = `
<FluidGrid :column-size="650">
  <template v-for="i in 7" :key="i">
    <Row style="background:gold" padding="4" :style="\`height:\${i*10}px\`"/>
  </template>
</FluidGrid>
<br>
<FluidGrid :column-size="250">
  <template v-for="i in 7" :key="i">
    <Row style="background:gold" padding="4" :style="\`height:\${i*10}px\`"/>
  </template>
</FluidGrid>
`
</script>
