<template>
  <Container :class="$style.Datatable" overflow="auto" :content-loading="contentLoading || sortingAsync">
    <table>
      <tr :class="stickyHeader && $style.stickyHeader">
        <th v-if="selectBy" style="width:0">
          <Checkbox
            :indeterminate="visibleSelected.length > 0 && visibleSelected.length < rows.length"
            :model-value="visibleSelected.length > 0 && visibleSelected.length === rows.length"
            @update:model-value="toggleSelectAll"
          />
        </th>

        <th
          v-for="col in enabledColumns" :key="col.name"
          :class="[
            canSortCol(col) ? $style.sortable : '',
            isSortCol(col) && $style.sortActive,
          ]"
          :style="[
            col.align ? `text-align:${col.align}` : '',
            col.width ? `width:${col.width}` : '',
          ]"
          @click="toggleColumnSort(col)"
        >
          <span :class="$style.colName">
            <span>
              <slot :name="col.headerSlot ?? 'header'" :column="col">{{ col.name }}</slot>
            </span>
            <Icon v-if="canSortCol(col)" :name="getColumnSortIcon(col)" :class="$style.sortIcon" />
          </span>
        </th>
      </tr>

      <tr
        v-for="(row, i) in sortedItems" :key="i" :class="[
          rowClick && $style.clickableRow,
          isSelected(row) && $style.rowSelected,
        ]"
        @click="rowClick && rowClick(row)"
      >
        <td v-if="selectBy">
          <Checkbox :model-value="isSelected(row)" @update:model-value="toggleSelect(row)" />
        </td>
        <td v-for="col in enabledColumns" :key="col.name" :class="[]" :style="col.align && `text-align:${col.align}`">
          <slot :name="col.slot ?? 'cell'" :row="row" :index="i" :column="col">
            {{ getDisplayValue(col, row) }}
          </slot>
        </td>
      </tr>

      <tr v-if="!rows.length" :class="$style.noResults">
        <td :colspan="columns.length">
          No results
        </td>
      </tr>

      <tr v-if="rows.length && showMore" :class="$style.showMore">
        <td :colspan="columns.length">
          <Button variant="text" color="info" @click="showMore">Show more</Button>
        </td>
      </tr>

      <tr v-if="enabledColumns.some(c => c.footer)" :class="[$style.footer, stickyHeader && $style.stickyFooter]">
        <th v-if="selectBy" />
        <th v-for="col in enabledColumns" :key="col.name" :style="col.align && `text-align:${col.align}`">
          <slot :name="col.footerSlot ?? 'footer'" :column="col">
            {{ col.footer }}
          </slot>
        </th>
      </tr>
    </table>
  </Container>
</template>
<script lang="ts" setup>
import { computed, ref, VNode, watch, watchEffect } from 'vue'
import { Icon } from '..'
import Button from '../Button.vue'
import Checkbox from '../Checkbox.vue'
import Container from '../Container.vue'

export interface Column<T> {
  name: string
  field?: keyof T
  slot?: string
  align?: 'start'|'end'
  width?: string
  headerSlot?: string
  footerSlot?: string
  footer?: string|number
  sortBy?: string
}

export type DatatableSlots<T> = Record<string, (context: { row: T; column: Column<T> }) => Array<VNode> | undefined>

export interface DatatableProps<T> {
  rows: T[]
  columns: (Column<T>|null)[]
  selection?: unknown[]
  rowClick?: (row: T) => void
  selectBy?: keyof T
  stickyHeader?: boolean
  ordering?: string
  contentLoading?: boolean
  showMore?: () => Promise<unknown>
  sortAsync?: () => Promise<unknown>
}

const props = defineProps<DatatableProps<unknown>>()

const emit = defineEmits<{
  (e: 'update:selection', selection: unknown[]): void
  (e: 'update:ordering', order: string|undefined): void
}>()

const ordering = ref<string>()
const selection = ref<unknown[]>([])
const sortingAsync = ref(false)

watchEffect(() => { ordering.value = props.ordering })
watchEffect(() => { selection.value = props.selection ?? [] })
watch(ordering, v => { emit('update:ordering', v) })
watch(selection, v => { emit('update:selection', v) })

const sortReverse = computed(() => ordering.value?.startsWith('-'))
const enabledColumns = computed(() => props.columns.filter(Boolean).map(c => c!))

const sortedItems = computed(() => {
  const sortCol = enabledColumns.value.find(isSortCol)
  if (props.sortAsync || !sortCol?.field) return props.rows
  return props.rows.slice().sort((a: any, b: any) => {
    const x = a[sortCol.field!]
    const y = b[sortCol.field!]
    const numbers = typeof x === 'number' && typeof y === 'number'
    const d = numbers ? y - x : `${y}`.localeCompare(`${x}`)
    return sortReverse.value ? d : -d
  })
})

function getColumnSortIcon(col: Column<unknown>) {
  return (isSortCol(col) && sortReverse.value) ? 'arrow_drop_up' : 'arrow_drop_down'
}

function isSortCol(col: Column<unknown>) {
  return ordering.value?.replace('-', '') === col.field
}

function canSortCol(col: Column<unknown>) {
  return !!col.sortBy
}

async function toggleColumnSort(col: Column<unknown>) {
  if (!col.field) return
  ordering.value = isSortCol(col) ? sortReverse.value ? undefined : '-' + col.sortBy : col.sortBy
  if (props.sortAsync) {
    sortingAsync.value = true
    await props.sortAsync().finally(() => { sortingAsync.value = false })
  }
}

function getRowSelectId(row: any) {
  return row[props.selectBy!]
}

function toggleSelect(row: unknown) {
  const id = getRowSelectId(row)
  if (selection.value.includes(id)) {
    selection.value = selection.value.filter(x => x !== id)
  } else {
    selection.value = selection.value.concat(id)
  }
}

function getDisplayValue(col: Column<unknown>, row: any) {
  return col.field ? row[col.field] : ''
}

function isSelected(row: unknown) {
  if (!props.selectBy) return false
  const id = getRowSelectId(row)
  return selection.value.includes(id)
}

const visibleSelected = computed(() => {
  if (!props.selectBy) return []
  return props.rows.filter(r => selection.value.includes(getRowSelectId(r)))
})

function toggleSelectAll() {
  const allSelected = visibleSelected.value.length === props.rows.length
  selection.value = allSelected ? [] : props.rows.map(getRowSelectId)
}

</script>

<style module>
.Datatable {
  font: var(--dodo-font-base);
  color: var(--dodo-color-foreground);
  background: var(--dodo-color-background);
}
.Datatable table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
.Datatable th {
  text-align: start;
  font-weight: var(--dodo-font-weightSemi);
}
.colName {
  display: flex;
  gap: 8px;
  align-items: center;
}
.colName > :first-child {
  flex-grow: 1;
}
.sortable {
  cursor: pointer;
  user-select: none;
  transition: all .1s;
}
.sortIcon {
  transition: all .1s;
  opacity: 0;
}
.sortable:hover {
  background: rgba(0,0,0,0.03);
}
.sortable.sortActive .sortIcon {
  opacity: 1;
}
.Datatable th,
.Datatable td {
  padding: 8px 12px;
  box-sizing: border-box;
}
.noResults {
  height: 100px;
}
.noResults,
.showMore {
  text-align: center;
}
.showMore button {
  width: 100%;
}
.Datatable tr:not(:last-child) {
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
.clickableRow:hover {
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
.Datatable .rowSelected {
  background: rgba(var(--dodo-rgb-info), 0.3);
}
.stickyHeader,
.stickyFooter {
  position: sticky;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  background: var(--dodo-color-background);
  z-index: 1;
}
.stickyHeader {
  top: 0;
}
.stickyFooter {
  bottom: 0;
}
</style>
