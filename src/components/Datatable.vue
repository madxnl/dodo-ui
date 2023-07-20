<template>
  <div :class="[$style.Datatable, contentLoading && $style.loading]">
    <table>
      <tr :class="stickyHeader && $style.stickyHeader">
        <th v-if="showSelect" style="width:0" scope="col">
          <Checkbox
            :indeterminate="visibleSelected.length > 0 && visibleSelected.length < rows.length"
            :model-value="visibleSelected.length > 0 && visibleSelected.length === rows.length"
            @update:model-value="toggleSelectAll"
          />
        </th>

        <th
          v-for="col in enabledColumns" :key="col.name"
          scope="col" :class="[
            canSortCol(col) ? $style.sortable : '',
            isSortCol(col) && $style.sortActive,
          ]"
          :style="[alignStyle(col), widthStyle(col)]"
          @click="toggleColumnSort(col)"
        >
          <span :class="$style.colName">
            <span>
              <slot :name="`${slotName(col)}-header`" :column="col">{{ col.name }}</slot>
            </span>
            <Icon v-if="getColumnSortIcon(col)" :name="getColumnSortIcon(col)!" :class="$style.sortIcon" />
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
        <td v-if="showSelect">
          <Checkbox :model-value="isSelected(row)" @update:model-value="toggleSelect(row)" />
        </td>
        <td v-for="col in enabledColumns" :key="col.name" :class="[]" :style="alignStyle(col)">
          <slot :name="slotName(col)" :row="row" :column="col">
            {{ getValue(col, row) }}
          </slot>
        </td>
      </tr>

      <tr v-if="!rows.length" :class="$style.noResults">
        <td colspan="999">
          No results
        </td>
      </tr>

      <tr v-if="rows.length && showMore" :class="$style.showMore">
        <td colspan="999">
          <Button variant="text" color="info" @click="showMore">Show more results</Button>
        </td>
      </tr>

      <tr v-if="showFooter" :class="[$style.footer, stickyHeader && $style.stickyFooter]">
        <td v-if="showSelect" />
        <th v-for="col in enabledColumns" :key="col.name" :style="alignStyle(col)" scope="col">
          <slot :name="`${slotName(col)}-footer`" :column="col" />
        </th>
      </tr>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, VNode, watch, watchEffect } from 'vue'
import { Button, Checkbox, Icon } from '..'

export interface DatatableColumn<T=object> {
  name: string
  value?: keyof T|((row: T) => unknown)
  align?: 'start'|'end'
  width?: string
  sort?: string
  disabled?: boolean
  slot?: string
}

export type DatatableSlots<T> = Record<string, (context: { row: T; column: DatatableColumn<T> }) => Array<VNode> | undefined>

export interface DatatableProps<T> {
  rows: T[]
  columns: DatatableColumn<T>[]
  selection?: unknown[]
  rowClick?: (row: T) => void
  selectBy?: keyof T
  stickyHeader?: boolean
  contentLoading?: boolean
  showFooter?: boolean
  showMore?: () => Promise<unknown>
  sortValue?: string
  sortAsync?: (sortBy: string|undefined) => Promise<unknown>
}

const props = defineProps<DatatableProps<unknown>>() as DatatableProps<unknown>

const emit = defineEmits<{
  (e: 'update:selection', selection: unknown[]): void
  (e: 'update:sortValue', order: string|undefined): void
}>()

const sort = ref<string>()
const selection = ref<unknown[]>([])
const sortingAsync = ref(false)

watchEffect(() => { sort.value = props.sortValue })
watchEffect(() => { selection.value = props.selection ?? [] })
watch(sort, v => { emit('update:sortValue', v) })
watch(selection, v => { emit('update:selection', v) })

const sortReverse = computed(() => sort.value?.startsWith('-'))
const enabledColumns = computed(() => props.columns.filter(c => !c.disabled))
const showSelect = computed(() => !!props.selection)

const sortedItems = computed(() => {
  const sortCol = enabledColumns.value.find(isSortCol)
  if (props.sortAsync || !sortCol) return props.rows
  return props.rows.slice().sort((a: any, b: any) => {
    const x = getValue(sortCol, a)
    const y = getValue(sortCol, b)
    const numbers = typeof x === 'number' && typeof y === 'number'
    const d = numbers ? y - x : `${y}`.localeCompare(`${x}`)
    return sortReverse.value ? d : -d
  })
})

function getColumnSortIcon(col: DatatableColumn) {
  if (!isSortCol(col)) return undefined
  return sortReverse.value ? 'arrow_drop_up' : 'arrow_drop_down'
}

function isSortCol(col: DatatableColumn) {
  return sort.value?.replace('-', '') === col.sort
}

function slotName(col: DatatableColumn) {
  return col.slot || col.name.toLowerCase().trim().replace(/\W/g, '')
}

function canSortCol(col: DatatableColumn) {
  return !!col.sort
}

function alignStyle(col: DatatableColumn) {
  return col.align ? `text-align:${col.align}` : ''
}

function widthStyle(col: DatatableColumn) {
  return col.width ? `width:${col.width}` : ''
}

async function toggleColumnSort(col: DatatableColumn) {
  if (!canSortCol(col)) return
  if (isSortCol(col)) {
    sort.value = sortReverse.value ? undefined : '-' + col.sort
  } else {
    sort.value = col.sort
  }
  if (props.sortAsync) {
    sortingAsync.value = true
    await props.sortAsync(sort.value).finally(() => { sortingAsync.value = false })
  }
}

function getRowSelectValue(row: any) {
  return props.selectBy ? row[props.selectBy] : row
}

function toggleSelect(row: unknown) {
  const id = getRowSelectValue(row)
  if (selection.value.includes(id)) {
    selection.value = selection.value.filter(x => x !== id)
  } else {
    selection.value = selection.value.concat(id)
  }
}

function getValue(col: DatatableColumn, row: any) {
  if (typeof col.value === 'function') return col.value(row)
  if (typeof col.value === 'string') return row[col.value]
  return ''
}

function isSelected(row: unknown) {
  if (!showSelect.value) return false
  const id = getRowSelectValue(row)
  return selection.value.includes(id)
}

const visibleSelected = computed(() => {
  if (!showSelect.value) return []
  return props.rows.filter(r => selection.value.includes(getRowSelectValue(r)))
})

function toggleSelectAll() {
  const allSelected = visibleSelected.value.length === props.rows.length
  selection.value = allSelected ? [] : props.rows.map(getRowSelectValue)
}

</script>

<style module>
.Datatable {
  font: var(--dodo-font-base);
  color: rgb(var(--dodo-rgb-foreground));
  background: rgb(var(--dodo-rgb-background));
  display: flex;
  flex-flow: column;
  gap: var(--dodo-gap-4);
}
.Datatable table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
.Datatable th {
  text-align: start;
  font-weight: var(--dodo-weight-bold);
}
.colName {
  display: flex;
  gap: 4px;
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
.noResults,
.showMore {
  text-align: center;
  height: 100px;
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
  background: rgb(var(--dodo-rgb-background));
  z-index: 1;
}
.stickyHeader {
  top: 0;
}
.stickyFooter {
  bottom: 0;
}
.loading {
  pointer-events: none;
  opacity: 0.5;
}
</style>