<template>
  <Row align="stretch" justify="center" style="min-height: 0">
    <Column tag="aside" :class="$style.sidebar" padding="8">
      <slot name="sidebar">
        <p>sidebar</p>
      </slot>
    </Column>
    <Column tag="main" padding="8">
      <slot></slot>
    </Column>
  </Row>
</template>
<script setup lang="ts">
import { Column, Row } from '../dodo'

defineProps<{}>()
</script>
<style module>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: sticky;
  top: 0;
  align-self: flex-start;
  bottom: 0;
}
</style>
