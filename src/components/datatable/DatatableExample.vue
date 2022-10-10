<template>
  <div>
    <Datatable
      :columns="[
        { name: 'Title', value: row => row.title },
        { name: 'Year', value: row => row.year, width: '10%' },
        { name: 'Rating', value: row => row.rating },
        null,
        { name: 'Actions', slot: 'actions', align: 'end', headerSlot: 'actions-head' },
      ]"
      :rows="items"
      :row-click="clickRow"
      :selectable="row => row.title"
      :load-more="loadMore"
    >
      <template #cell="{ column, row }">
        <template v-if="column.name === 'Column 1'">{{ row.title }}!</template>
      </template>
      <template #actions>
        todo
      </template>
      <template #actions-head="{ column }">
        {{ column.name }}!
      </template>
    </Datatable>
  </div>
</template>
<script lang="ts" setup>
import Datatable from './DatatableTyped.vue'

function clickRow() {}

async function loadMore() {}

const items = [
  { title: 'Item 1', year: 2013, rating: '8/10' },
  { title: 'Item 2', year: 2022, rating: '2/10' },
  { title: 'Item 3', year: 2020, rating: '5/10' },
]

</script>
