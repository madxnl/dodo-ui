<template>
  <Container gap="l" style="max-width:300px">
    <TextInput v-model="value" placeholder="Placeholder" />

    <TextInput v-model="value" placeholder="example@email.com">
      <template #before><Icon name="mail" /></template>
    </TextInput>

    <TextInput v-model="value" placeholder="example@email.com" :rows="5">
      <template #before><Icon name="mail" /></template>
    </TextInput>

    <TextInput model-value="Disabled input" disabled />
  </Container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Container from '../../components/Container.vue'
import Icon from '../../components/Icon.vue'
import TextInput from '../../components/TextInput.vue'

const value = ref('')
</script>
<style module>
.NavBarExample {
  min-height: 400px;
  min-width: 800px;
  display: grid;
}
</style>
