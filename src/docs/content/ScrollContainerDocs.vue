<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Allows contents to scroll if needed.
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { DocsComponentSection } from '..'
import imgUrl from '../assets/placeholder32.png'
// @ts-ignore
import { DOCGEN as doc } from '../../components/layout/ScrollContainer.vue'

const setup = () => ({ imgUrl })

const template = `
<Column style="height:300px">
  <ScrollContainer style="background:khaki">
    <Text h2 v-for="i in 15">{{ i }}</Text>
  </ScrollContainer>
</Column>
`
</script>
