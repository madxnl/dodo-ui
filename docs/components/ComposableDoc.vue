<script lang="ts" setup>
import { TypedocData } from '~/generated'

defineProps<{
  typedoc: TypedocData
}>()
</script>
<template>
  <div>
    <a :href="`#${typedoc.name}`">
      <h2 :id="typedoc.name">{{ typedoc.name }}</h2>
    </a>
    <pre>
      {{ typedoc }}
    </pre>
    <template v-if="typedoc.type">
      <div>Type: {{ typedoc.type.name }}</div>
      <div>Type: {{ typedoc.type }}</div>
      <!-- <template v-if="'parameters' in typ" v-for="param in typedoc.type..parameters" :key="param.name"> -->
      <!-- <div>Param name: {{ param.name }}</div> -->
      <!-- <div>Param type: {{ param.type }}</div> -->
      <!-- </template> -->
    </template>
    <template v-for="sig in typedoc.signatures" :key="sig.name">
      <template v-if="'parameters' in sig" v-for="param in sig.parameters" :key="param.name">
        <div>Param name: {{ param.name }}</div>
        <div>Param type: {{ param.type }}</div>
      </template>
    </template>
  </div>
</template>
