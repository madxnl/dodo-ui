<script lang="ts" setup>
import { componentsList, composablesList } from './generated'
</script>
<template>
  <div>
    <template v-for="c of componentsList" :key="c.name">
      <ComponentDoc :component="c" />
    </template>
    <template v-for="c of composablesList" :key="c.name">
      <ComposableDoc :component="c" />
    </template>
  </div>
</template>
