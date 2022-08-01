<template>
  <Container column-width="500px" gap="0">
    <Container pad="m" class="App_Example">
      <component :is="component" />
    </Container>

    <SyntaxHighlight class="App_ExampleText" :code="code" lang="html" />
  </Container>
</template>
<script setup lang="ts">
import { DefineComponent } from 'vue'
import Container from '../components/Container.vue'
import SyntaxHighlight from './SyntaxHighlight.vue'

defineProps<{
  component: DefineComponent<any, any, any>
  code: string
}>()

</script>
<style>
.App_Example {
  border: 1px solid rgba(0,0,0,0.15);
}
.App_ExampleText {
  border: 1px solid rgba(0,0,0,0.15);
  border-left: 0;
  margin: 0 !important;
  white-space: pre-wrap !important;
}
</style>
