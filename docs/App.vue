<script lang="ts" setup>
import ButtonDocs from './docs/ButtonDocs.vue'
// import { DocsButtonDocs } from '#components'
import { componentList, typedocList } from './generated'

const reflectionKindFunction = 64

const foo = {
  Button: ButtonDocs,
}
</script>
<template>
  <div class="dodo-fonts">
    <component :is="foo.Button" />

    <template v-for="c of componentList" :key="c.name">
      <ComponentDoc :component="c" />
    </template>

    <template v-for="c of typedocList" :key="c.name">
      <ComposableDoc v-if="c.kind === reflectionKindFunction" :typedoc="c" />
    </template>
  </div>
</template>
