<template>
  <div>
    <Datatable
      v-model:selection="selection"
      sticky-header
      :columns="[
        { name: 'Title', field: 'title', footer: 'Totals', sort: 'name' },
        { name: 'Year', field: 'year', width: '10%' },
        { name: 'Revenue', field: 'revenue', footer: totalRevenue() },
        { name: 'Rating', field: 'rating' },
        null,
        { name: 'Actions', slot: 'actions', align: 'end', headerSlot: 'actions-head' },
      ]"
      :rows="items"
      :row-click="clickRow"
      :show-more="loadMore"
      :sort-async="loadMore"
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
import { ref } from 'vue'
import Datatable from './DatatableTyped.vue'

const loadMore = () => new Promise(resolve => setTimeout(resolve, 1500))

const items = [
  { title: 'Item 1', year: 2013, rating: '8/10', revenue: 8000 },
  { title: 'Item 2', year: 2022, rating: '2/10', revenue: 2000 },
  { title: 'Item 3', year: 2020, rating: '5/10', revenue: 5000 },
]

type Item = typeof items[number]

const selection = ref(items.slice(0, 0))

function clickRow(r: Item) {
  console.log('foo')
}

function totalRevenue() {
  return items.reduce((sum, row) => sum + row.revenue, 0)
}

</script>
