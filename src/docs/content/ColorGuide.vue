<template>
  <p>These base colors can be overridden using RGB CSS vars (eg <code>--dodo-rgb-danger: 255,0,0;</code>).</p>
  <p>
    <Row>
      <code v-for="c in colors" :key="c" :class="[$style.swatch]" :style="`background-color:${theme.colorCss(c)}`">
        <code :class="c === 'foreground' ? 'dodo-color-background' : 'dodo-color-foreground'">
          {{ c }}
          {{ theme.colorHexStr(c) }}
        </code>
      </code>
    </Row>
  </p>
</template>
<script setup lang="ts">
import { Row, useTheme } from '../..'

const colors = ['info', 'success', 'warn', 'danger', 'background', 'foreground', 'primary', 'secondary'] as const

const theme = useTheme()
</script>
<style module>
.swatch {
  background: currentColor;
  padding: 8px;
}
</style>
