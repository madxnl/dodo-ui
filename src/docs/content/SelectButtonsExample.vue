<template>
  <div>
    <SelectButtons
      v-model="currentValue"
      :options="[
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
      ]"
    />
    <br>
    <SelectButtons
      v-slot="{ option }"
      v-model="currentMultipleValue"
      small
      multiple
      :options="[
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
      ]"
    >
      Multiple {{ option.value }}
    </SelectButtons>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { SelectButtons } from '../..'

const currentValue = ref(1)
const currentMultipleValue = ref([1, 2, 4])

</script>
