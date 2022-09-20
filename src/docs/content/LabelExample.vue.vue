<template>
  <Container style="width:500px">
    <Label text="Field label">
      <TextInput v-model="value" />
    </Label>
    <Label text="Field label" error="is required">
      <TextInput v-model="value" />
    </Label>
    <Label text="Field label" hint="Enter a valid email">
      <TextInput v-model="value" />
    </Label>
  </Container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Container, Label, TextInput } from '../..'

const value = ref('Foo bar')

</script>
