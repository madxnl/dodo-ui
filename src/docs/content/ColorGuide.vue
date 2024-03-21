<template>
  <p></p>
  <p>
    <Row>
      <code v-for="c in colors" :key="c" :class="[$style.swatch]" :style="`background-color:${theme.colorCss(c)}`">
        <code :class="c === 'foreground' ? 'dodo-color-background' : 'dodo-color-foreground'">
          {{ c }}
        </code>
      </code>
    </Row>
  </p>
</template>
<script setup lang="ts">
import { Row } from '@/components'
import { useTheme } from '@/composables'

const colors = ['info', 'success', 'warning', 'danger', 'background', 'foreground', 'primary', 'secondary'] as const

const theme = useTheme()
</script>
<style module>
.swatch {
  background: currentColor;
  padding: 8px;
}
</style>
