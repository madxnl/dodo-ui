<template>
  <ComponentDocsSection :example-src="exampleSrc">
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
          { title: 'Item 3', year: 2020, rating: '5/10', revenue: 5000 }
        ]"
        :columns="[
          { name: 'Title', sort: 'name', value: 'title' },
          { name: 'Year', width: '10%', value: 'year' },
          { name: 'Revenue', value: (row) => row.revenue, sort: 'revenue' },
          { name: 'Rating', value: 'rating' },
          { name: 'Actions', align: 'end' }
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
import { Datatable } from '@/components'
import { ComponentDocsSection } from '@/docs/components'
import { ref } from 'vue'

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

type Item = { title: string; year: number; rating: string; revenue: number }

const selection = ref([])

function clickRow(_: Item) {}

function totalRevenue() {
  return 15000
}

const loadMore = () => new Promise((resolve) => setTimeout(resolve, 1500))
</script>
