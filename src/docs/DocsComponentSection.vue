<template>
  <Text v-if="$slots.description" p>
    <slot name="description" />
  </Text>
  <Tabs v-slot="{ tab }" :tabs="[{ name: 'Example' }, { name: 'API' }]">
    <DocsExample v-if="tab.name === 'Example'" :options="example" />
    <PropsTable v-if="tab.name === 'API'" :doc="doc" />
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
