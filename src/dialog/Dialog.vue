<template>
  <teleport to="body">
    <div class="Dialog" :style="css"><slot></slot></div>
  </teleport>
</template>
<script lang="ts" setup>
import { computed } from "vue";

// const props = defineProps<{}>()

const css = computed(() => {
  let s = ''
  return s
})
</script>

<style>
.Dialog {
  display: block;
}
</style>
