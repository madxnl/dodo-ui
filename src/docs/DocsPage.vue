<template>
  <Container
    :id="title" :key="title"
    gap="l" class="App_chapter"
  >
    <h2>{{ title }}</h2>
    <slot />
  </Container>
</template>
<script setup lang="ts">
import Container from '../components/Container.vue'
defineProps<{
  title: string
}>()
</script>
<style>
.App_chapter {
  min-height: 100vh;
  padding: 32px 0;
}
</style>
