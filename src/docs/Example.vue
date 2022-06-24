<template>
  <GridResponsive column-width="500px" stretch>
    <Container align="start" pad="m" class="App_Example">
      <component :is="component" />
    </Container>

    <div class="App_ExampleText">
      <pre><code>{{ source }}</code></pre>
    </div>
  </GridResponsive>
</template>
<script setup lang="ts">
import { DefineComponent } from 'vue'
import Container from '../components/Container.vue'
import GridResponsive from '../components/GridResponsive.vue'

defineProps<{
  component: DefineComponent<any, any, any>
  source: string
}>()
</script>
<style>
.App_chapter {
  min-height: 100vh;
  padding: 32px 0;
}
</style>
