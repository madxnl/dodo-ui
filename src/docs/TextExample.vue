<template>
  <Text tag="h1">{{ txt }}</Text>
  <Text tag="h2">{{ txt }}</Text>
  <Text tag="h3">{{ txt }}</Text>
  <Text>{{ txt }}</Text>
  <Text tag="small">{{ txt }}</Text>
  <Text tag="h1">
    Rich
    <em>text</em>
  </Text>
</template>
<script lang="ts" setup>
import { Text } from '..'

const txt = 'A quick brown fox jumps over the lazy dog'

</script>
