<template>
  <p class="d-text">
    These base colors can be customized using the theme service or by overriding the CSS vars.
  </p>
  <div>
    <div v-for="c in colors" :key="c" :class="[$style.swatch, `d-text d-code d-pad-2 d-color-${c}`]">
      <span :class="invertClass(c) && $style.invert">{{ c }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">

const colors = [
  'info',
  'success',
  'warn',
  'danger',
  'background',
  'foreground',
  'primary',
  'secondary',
] as const

function invertClass(c: string) {
  return c === 'background'
}

</script>
<style module>
.swatch {
  background: currentColor;
}
.swatch span {
  color: white;
}
.swatch .invert {
  color: black;
}
</style>
