<template>
  <Container style="width:500px">
    <Select
      v-model="currentValue" :options="[
        { value: 1, label: 'Value 1' },
        { value: 2, label: 'Value 2' },
        { value: 3, label: 'Value 3' },
      ]"
    />

    <Select
      v-slot="{option}"
      v-model="currentValueArray"
      :options="[
        { value: 1, label: 'Value 1' },
        { value: 2, label: 'Value 2' + ' bla'.repeat(99) },
        { value: 3, label: 'Value 3' },
      ]"
    >
      <Icon name="star" fill size="s" color="warn" />
      {{ option.label }}
    </Select>
  </Container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Container, Select } from '../..'
import Icon from '../../components/Icon.vue'

const currentValue = ref<number|undefined>(undefined)
const currentValueArray = ref([1, 2])

</script>
