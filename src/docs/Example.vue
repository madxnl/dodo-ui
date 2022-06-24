<template>
  <GridResponsive column-width="500px" stretch>
    <Container align="start" pad="m" class="App_Example">
      <component :is="component" />
    </Container>

    <pre class="App_ExampleText language-html" v-html="html" />
  </GridResponsive>
</template>
<script setup lang="ts">
import { DefineComponent, computed } from 'vue'
import Container from '../components/Container.vue'
import GridResponsive from '../components/GridResponsive.vue'
import { highlight, languages } from 'prismjs'
import 'prismjs/themes/prism.min.css'

const props = defineProps<{
  component: DefineComponent<any, any, any>
  code: string
}>()

const html = computed(() => {
  return highlight(props.code, languages.html, 'html')
})
</script>
<style>
.App_chapter {
  min-height: 100vh;
  padding: 32px 0;
}
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
