
<template>
  <div :class="[$style.ScrollContainer]" :style="css">
    <div><slot /></div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from '../theme'

defineProps<{
  // /**
  //  * Set a background color
  //  * @example background="info"
  //  */
  // background?: ColorProp

}>()

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
}
/* .ScrollContainer > div {
  display: inline-block;
} */
</style>
