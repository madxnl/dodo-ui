<template>
  <Container gap="l">
    <Input v-model="value" />

    <Input v-model="value" placeholder="Type here">
      <template #before><Icon name="lock" /></template>
    </Input>

    <Input model-value="Disabled input" disabled />
  </Container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Container from '../../components/Container.vue'
import Icon from '../../components/Icon.vue'
import Input from '../../components/Input.vue'

const value = ref('')
</script>
<style module>
.NavBarExample {
  min-height: 400px;
  min-width: 800px;
  display: grid;
}
</style>
