<template>
  <Container
    :id="title" :key="title"
    gap="l" class="App_chapter"
  >
    <Text h1>{{ title }}</Text>
    <slot />
  </Container>
</template>
<script setup lang="ts">
import Container from '../components/Container.vue'
import Text from '../components/Text.vue'

defineProps<{
  title: string
}>()
</script>
<style>
/* .App_chapter {} */
</style>
