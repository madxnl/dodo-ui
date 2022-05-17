
<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}
#app {
  background: skyblue;
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: auto;
}
</style>
