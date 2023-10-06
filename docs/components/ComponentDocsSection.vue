<template>
  <slot name="description" />
  <br />
  <DocsExample :example-src="exampleSrc">
    <slot name="example" />
  </DocsExample>

  <Column v-if="props">
    <br />
    <h4>Props</h4>
    <template v-for="(prop, i) in props" :key="i">
      <hr v-if="i" />
      <Column gap="1">
        <SyntaxHighlight lang="ts" :code="`${prop.code}`" />
        <p>{{ prop.description }}</p>
      </Column>
    </template>
  </Column>

  <Column v-if="events">
    <br />
    <h4>Events</h4>
    <template v-for="(prop, i) in props" :key="i">
      <hr v-if="i" />
      <Column gap="1">
        <SyntaxHighlight lang="ts" :code="`${prop.code}`" />
        <p>{{ prop.description }}</p>
      </Column>
    </template>
  </Column>

  <Column v-if="slots">
    <br />
    <h4>Slots</h4>
    <template v-for="(prop, i) in props" :key="i">
      <hr v-if="i" />
      <Column gap="1">
        <SyntaxHighlight lang="ts" :code="`${prop.code}`" />
        <p>{{ prop.description }}</p>
      </Column>
    </template>
  </Column>
</template>
<script setup lang="ts">
import { Column } from '../../src'
import SyntaxHighlight from './SyntaxHighlight.vue'

defineProps<{
  exampleSrc: string
  props?: { code: string; description: string }[]
  events?: { code: string; description: string }[]
  slots?: { code: string; description: string }[]
}>()
</script>
