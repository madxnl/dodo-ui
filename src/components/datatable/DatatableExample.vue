<template>
  <div>
    <Datatable
      :columns="[
        { name: 'Title', value: item => item.title },
        { name: 'Year', value: item => item.year },
        { name: 'Rating', value: item => item.rating },
        { name: 'Actions', slot: 'actions' },
      ]"
      :items="items"
    >
      <template #cell="{ column, item }">
        <template v-if="column.name === 'Column 1'">{{ item.title }}</template>
      </template>
      <template #actions="{ item }">
        [ACTION{{ item.year }}]
      </template>
    </Datatable>
  </div>
</template>
<script lang="ts" setup>
import Datatable from './DatatableTyped.vue'

const items = [
  { title: 'Item 1', year: 2013, rating: '8/10' },
  { title: 'Item 2', year: 2022, rating: '2/10' },
  { title: 'Item 3', year: 2020, rating: '5/10' },
]

</script>
