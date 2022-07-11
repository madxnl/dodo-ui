<template>
  <Text h1>{{ text }}</Text>
  <Text h2>{{ text }}</Text>
  <Text h3>{{ text }}</Text>
  <Text nowrap>{{ paragraph }}</Text>
  <Text p>{{ paragraph }}</Text>
  <Text small align="right">{{ text }}</Text>
  <Text h1>
    Rich <em>text</em> <a href="#">example</a>
  </Text>
</template>
<script lang="ts" setup>
import { Text } from '..'

const text = 'A quick brown fox jumps over the lazy dog'
const paragraph = 'A quick brown fox jumps over the lazy dog. '.repeat(5)

</script>
