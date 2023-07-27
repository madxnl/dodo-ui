<template>
  <DocsExample :options="{ setup, template }">
    <template #description> Todo. </template>
  </DocsExample>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { DocsExample } from '..'

type Item = { title: string; year: number; rating: string; revenue: number }

const selection = ref([])

function clickRow(_: Item) {}

function totalRevenue() {
  return 15000
}

const loadMore = () => new Promise((resolve) => setTimeout(resolve, 1500))

const setup = () => ({ loadMore, totalRevenue, clickRow, selection })

const template = `
<Datatable
  v-model:selection="selection"
  :rows="[
    { title: 'Item 1', year: 2013, rating: '8/10', revenue: 8000 },
    { title: 'Item 2', year: 2022, rating: '2/10', revenue: 2000 },
    { title: 'Item 3', year: 2020, rating: '5/10', revenue: 5000 },
  ]"
  :columns="[
    { name: 'Title', sort: 'name', value: 'title' },
    { name: 'Year', width: '10%', value: 'year' },
    { name: 'Revenue', value: row => row.revenue, sort: 'revenue' },
    { name: 'Rating', value: 'rating' },
    { name: 'Actions', align: 'end' },
  ]"
  :row-click="clickRow"
  :show-more="loadMore"
  :sort-async="loadMore"
  show-footer
  sticky-header
>
  <template #title-footer>Totals</template>
  <template #revenue-footer>\${{ totalRevenue() }}</template>
  <template #actions>todo</template>
  <template #actions-header="{ column }">{{ column.name }}!</template>
</Datatable>
`
</script>
