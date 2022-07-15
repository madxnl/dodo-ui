<template>
  <Container column-width="500px" gap="0">
    <Container align="start" pad="m" class="App_Example">
      <component :is="component" />
    </Container>

    <pre class="App_ExampleText language-html" v-html="html" />
  </Container>
</template>
<script setup lang="ts">
import { highlight, languages } from 'prismjs'
import 'prismjs/themes/prism.min.css'
import { computed, DefineComponent } from 'vue'
import Container from '../components/Container.vue'

const props = defineProps<{
  component: DefineComponent<any, any, any>
  code: string
}>()

const html = computed(() => {
  return highlight(props.code, languages.html, 'html')
})
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
