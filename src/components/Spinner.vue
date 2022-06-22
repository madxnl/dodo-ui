<template>
  <svg
    class="uiSpinner"
    :class="classes"
    viewBox="0 0 18 18"
  >
    <path stroke="currentColor" fill="none" d="M 9 1 A 8 8 0 0 1 9 17" stroke-width="2" />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useThemeCssVars } from '../theme'

useThemeCssVars()

const classes = computed(() => [
])
</script>
<style lang="css">
.uiSpinner {
  width: 18px;
  height: 18px;
  animation: uiSpinner 1s linear infinite;
}
@keyframes uiSpinner {
  from { transform:none }
  to { transform:rotate(360deg)}
}
</style>
