<template>
  <Container style="width:500px">
    <Select
      v-model="currentValue" :options="[
        { value: 1, text: 'Value 1' },
        { value: 2, text: 'Value 2' },
        { value: 3, text: 'Value 3' },
      ]"
    />

    <Select
      v-model="currentValue" :options="[...Array(115)].map((_,i)=>({text:''+i,value:i}))"
    />

    <Select
      v-slot="{option}"
      v-model="currentValueArray"
      multiple
      :options="[
        { value: 1, text: 'Value 1' },
        { value: 2, text: 'Value 2' + ' bla'.repeat(99) },
        { value: 3, text: 'Value 3' },
      ]"
    >
      <Icon name="star" fill size="s" color="warn" />
      {{ option.text }}
    </Select>
  </Container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Container, Select } from '../..'
import Icon from '../../components/Icon.vue'

const currentValue = ref<number|undefined>(undefined)
currentValue.value = 111
const currentValueArray = ref([1, 2])

</script>
