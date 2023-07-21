<template>
  <Text p>
    These base colors can be customized using the theme service or by the RGB CSS vars (eg <code>--dodo-rgb-danger: 255,0,0;</code>).
  </Text>
  <Text>
    <code v-for="c in colors" :key="c" :class="[$style.swatch]" :style="`color:${theme.colorCss(c)}`">
      <span :class="invertClass(c) && $style.invert">{{ c }}</span>
    </code>
  </Text>
</template>
<script setup lang="ts">
import { Text, useTheme } from '../..'

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

const theme = useTheme()

</script>
<style module>
.swatch {
  background: currentColor;
  padding: 8px;
}
.swatch span {
  color: white;
}
.swatch .invert {
  color: black;
}
</style>
