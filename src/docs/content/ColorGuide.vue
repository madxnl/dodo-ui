<template>
  <p></p>
  <p>
    <Row wrap>
      <code v-for="c in colors" :key="c" :class="[$style.swatch]" :style="`background-color:var(--dodo-color-${c})`">
        <code :class="c === 'text' ? 'dodo-color-background' : 'dodo-color-text'">
          {{ c }}
        </code>
      </code>
    </Row>
  </p>
</template>
<script setup lang="ts">
import { Row } from '@/components'

const colors = [
  'red',
  'pink',
  'purple',
  'blue',
  'teal',
  'green',
  'yellow',
  'orange',
  'info',
  'success',
  'warning',
  'danger',
  'primary',
  'secondary',
  'black',
  'background',
  'gray',
  'text',
  'white'
] as const
</script>
<style module>
.swatch {
  background: currentColor;
  padding: 8px;
}
</style>
