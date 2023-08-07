<template>
  <DocsExample :options="{ setup, template }">
    <template #description>
      Allows contents to scroll if needed.
    </template>
  </DocsExample>
</template>
<script setup lang="ts">
import { DocsExample } from '..'
import imgUrl from '../assets/placeholder32.png'

const setup = () => ({ imgUrl })

const template = `
<Column style="height:300px">
  <ScrollContainer style="background:khaki">
    <h2 v-for="i in 15">{{ i }}</h2>
  </ScrollContainer>
</Column>
`
</script>
