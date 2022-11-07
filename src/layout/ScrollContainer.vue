
<template>
  <div :class="[$style.ScrollContainer]" :style="css">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from '../theme'

useTheme()

const css = computed(() => {
  const s = ''
  return s
})
</script>

<style module>
.ScrollContainer {
  overflow: auto;
  scrollbar-width: thin;
  display: grid;
}
/* .ScrollContainer > div { */
  /* display: inline-block; */
/* } */
</style>
