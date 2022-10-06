<template>
  <div>
    <Datatable
      :columns="[
        { name: 'Title', value: item => item.title },
        { name: 'Year', value: item => item.year, width: '10%' },
        { name: 'Rating', value: item => item.rating },
        { name: 'Actions', slot: 'actions', align: 'end' },
      ]"
      :rows="items"
      :row-click="clickRow"
    >
      <template #cell="{ column, row }">
        <template v-if="column.name === 'Column 1'">{{ row.title }}!</template>
      </template>
      <template #actions>
        todo
      </template>
    </Datatable>
  </div>
</template>
<script lang="ts" setup>
import Datatable from './DatatableTyped.vue'

function clickRow() {}

const items = [
  { title: 'Item 1', year: 2013, rating: '8/10' },
  { title: 'Item 2', year: 2022, rating: '2/10' },
  { title: 'Item 3', year: 2020, rating: '5/10' },
]

</script>
