<script lang="ts" setup>
import { componentList, typedocList } from './generated'

const reflectionKindFunction = 64
</script>
<template>
  <div>
    <template v-for="c of componentList" :key="c.name">
      <ComponentDoc :component="c" />
    </template>

    <template v-for="c of typedocList" :key="c.name">
      <ComposableDoc v-if="c.kind === reflectionKindFunction" :typedoc="c" />
    </template>
  </div>
</template>
