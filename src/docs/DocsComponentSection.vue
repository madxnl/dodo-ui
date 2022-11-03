<template>
  <Text v-if="$slots.description" p>
    <slot name="description" />
  </Text>
  <Tabs :tabs="[{ name: 'Example' }, { name: 'API' }]">
    <template #Example><DocsExample :options="example" /></template>
    <template #API><PropsTable :doc="doc" /></template>
  </Tabs>
</template>
<script lang="ts" setup>
import { ComponentOptions } from 'vue'
import type { ComponentDoc } from 'vue-docgen-api'
import { Tabs, Text } from '..'
import DocsExample from './DocsExample.vue'
import PropsTable from './PropsTable.vue'

defineProps<{
  example: ComponentOptions
  doc: ComponentDoc
}>()
</script>
