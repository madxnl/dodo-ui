<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>
        The <code>Datatable</code> component is a powerful table component that supports sorting, filtering, pagination,
        and more.
      </p>
    </template>
    <template #example>
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
          { name: 'Revenue', value: (row) => row.revenue, sort: 'revenue' },
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
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { ComponentDocsSection } from '@/docs'
import { ref } from 'vue'
import { Datatable } from '../..'

const exampleSrc = `<Datatable
  v-model:selection="selection"
  :rows="[
    { title: 'Item 1', year: 2013, rating: '8/10', revenue: 8000 },
    { title: 'Item 2', year: 2022, rating: '2/10', revenue: 2000 },
    { title: 'Item 3', year: 2020, rating: '5/10', revenue: 5000 },
  ]"
  :columns="[
    { name: 'Title', sort: 'name', value: 'title' },
    { name: 'Year', width: '10%', value: 'year' },
    { name: 'Revenue', value: (row) => row.revenue, sort: 'revenue' },
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
</Datatable>`

const props = [
  {
    code: 'columns: Column[]',
    description: 'The columns to display in the table.',
  },
  {
    code: 'rows: Row[]',
    description: 'The rows to display in the table.',
  },
  {
    code: 'row-click?: (row: Row) => void',
    description: 'A function to call when a row is clicked.',
  },
  {
    code: 'show-more?: () => Promise<void>',
    description: 'A function to call when the user scrolls to the bottom of the table.',
  },
  {
    code: 'sort-async?: () => Promise<void>',
    description: 'A function to call when the user sorts a column.',
  },
  {
    code: 'show-footer?: boolean',
    description: 'Whether to show the footer.',
  },
  {
    code: 'sticky-header?: boolean',
    description: 'Whether to make the header sticky.',
  },
  {
    code: 'v-model:selection: Row[]',
    description: 'The selected rows.',
  },
]

type Item = { title: string; year: number; rating: string; revenue: number }

const selection = ref([])

function clickRow(_: Item) {}

function totalRevenue() {
  return 15000
}

const loadMore = () => new Promise((resolve) => setTimeout(resolve, 1500))
</script>
