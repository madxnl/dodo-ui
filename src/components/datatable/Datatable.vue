<template>
  <Container :class="$style.Datatable" overflow="auto" :content-loading="contentLoading || sortingAsync">
    <table>
      <tr :class="stickyHeader && $style.stickyHeader">
        <th v-if="selectable" style="width:0">
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
          :style="`text-align:${col.align};width:${col.width}`"
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
        <td v-if="selectable">
          <Checkbox :model-value="isSelected(row)" @update:model-value="toggleSelect(row)" />
        </td>
        <td v-for="col in enabledColumns" :key="col.name" :class="[]" :style="`text-align:${col.align}`">
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
        <th v-if="selectable" />
        <th v-for="col in enabledColumns" :key="col.name" :style="`text-align:${col.align}`">
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
}

export type DatatableSlots<T> = Record<string, (context: { row: T; column: Column<T> }) => Array<VNode> | undefined>

export interface DatatableProps<T> {
  rows: T[]
  columns: (Column<T>|null)[]
  selection?: unknown[]
  rowClick?: (row: T) => void
  selectable?: (row: T) => unknown
  stickyHeader?: boolean
  sortBy?: string
  contentLoading?: boolean
  showMore?: () => Promise<unknown>
  sortAsync?: () => Promise<unknown>
}

const props = defineProps<DatatableProps<unknown>>()

const emit = defineEmits<{
  (e: 'update:selection', selection: unknown[]): void
  (e: 'update:sortBy', order: string|undefined): void
}>()

const sortBy = ref<string>()
const selection = ref<unknown[]>([])
const sortingAsync = ref(false)

watchEffect(() => { sortBy.value = props.sortBy })
watchEffect(() => { selection.value = props.selection ?? [] })
watch(sortBy, v => { emit('update:sortBy', v) })
watch(selection, v => { emit('update:selection', v) })

const sortReverse = computed(() => sortBy.value?.startsWith('-'))
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
  return sortBy.value?.replace('-', '') === col.field
}

function canSortCol(col: Column<unknown>) {
  return !!col.field
}

async function toggleColumnSort(col: Column<unknown>) {
  if (!col.field) return
  sortBy.value = isSortCol(col) ? sortReverse.value ? undefined : '-' + col.field : col.field
  if (props.sortAsync) {
    sortingAsync.value = true
    await props.sortAsync().finally(() => { sortingAsync.value = false })
  }
}

function toggleSelect(row: unknown) {
  const id = props.selectable!(row)
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
  if (!props.selectable) return false
  const id = props.selectable(row)
  return selection.value.includes(id)
}

const visibleSelected = computed(() => {
  if (!props.selectable) return []
  return props.rows.filter(r => selection.value.includes(props.selectable!(r)))
})

function toggleSelectAll() {
  const allSelected = visibleSelected.value.length === props.rows.length
  selection.value = allSelected ? [] : props.rows.map(props.selectable!)
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
