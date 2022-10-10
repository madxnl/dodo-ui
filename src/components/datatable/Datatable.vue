<template>
  <table :class="$style.Datatable">
    <tr>
      <th v-if="selectable" style="width:0">
        <Checkbox
          :indeterminate="visibleSelected.length > 0 && visibleSelected.length < rows.length"
          :model-value="visibleSelected.length === rows.length"
          @update:model-value="toggleSelectAll"
        />
      </th>

      <th
        v-for="col in enabledColumns" :key="col.name"
        :class="[
          col.value ? $style.sortable : '',
          isSortCol(col) && $style.sortActive,
        ]"
        :style="`text-align:${col.align};width:${col.width}`"
        @click="toggleColumnSort(col)"
      >
        <span :class="$style.colName">
          <Text strong>
            <slot :name="col.headerSlot ?? 'header'" :column="col">
              {{ col.name }}
            </slot>
          </Text>
          <Icon v-if="col.value" :name="getColumnSortIcon(col)" :class="$style.sortIcon" />
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
      <td
        v-for="col in enabledColumns" :key="col.name" :class="[
        ]"
        :style="`text-align:${col.align}`"
      >
        <!-- <FormCheckbox
              v-if="selection && col==columns[0]"
              :model-value="itemSelected(row)" @update:model-value="toggleSelectItem(row)" /> -->
        <slot :name="col.slot ?? 'cell'" :row="row" :index="i" :column="col">
          {{ col.value ? col.value(row) : '' }}
        </slot>
      </td>
    </tr>
    <!-- <div v-if="$slots.tfoot">
      <span v-for="col,i in columns" :key="col.name" :class="colClass(i)">
         <FormCheckbox
              v-if="selection && col==columns[0]"
              :model-value="everythingSelected" :indeterminate="!everythingSelected && someSelected"
              @update:model-value="toggleSelectAll" />
        <slot name="tfoot" :column="col" :column-index="i" />
      </span>
    </div> -->
    <!-- <BaseDiv :padding="64">
      <BaseDetectVisible v-if="loadMore" v-model:visible="bottomVisible">
        <BaseSpinner />
      </BaseDetectVisible>
    </BaseDiv> -->

    <tr v-if="!rows.length" :class="$style.noResults">
      <td :colspan="columns.length">
        No results
      </td>
    </tr>

    <tr v-if="rows.length && loadMore" :class="$style.loadMore">
      <td :colspan="columns.length">
        Load more
      </td>
    </tr>
  </table>
</template>
<script lang="ts" setup>
import { computed, ref, VNode, watch, watchEffect } from 'vue'
import { Icon, Text } from '..'
import Checkbox from '../Checkbox.vue'

export interface Column<T> {
  name: string
  value?: (row: T) => string|number
  slot?: string
  align?: 'start'|'end'
  width?: string
  headerSlot?: string
}

// export interface DatatableSlots<T> {
//   cell?: (context: { row: T; column: Column<T> }) => Array<VNode> | undefined
// }

export type DatatableSlots<T> = Record<string, (context: { row: T; column: Column<T> }) => Array<VNode> | undefined>

export interface DatatableProps<T> {
  rows: T[]
  columns: (Column<T>|null)[]
  sortBy?: string
  selection?: unknown[]
  rowClick?: (row: T) => void
  selectable?: (row: T) => string|number
  loadMore?: () => Promise<void>
  // updating?: boolean
}

const props = defineProps<DatatableProps<unknown>>()

const emit = defineEmits<{
  (e: 'update:selection', selection: unknown[]): void
  (e: 'update:sortBy', order: string|undefined): void
}>()

const sortBy = ref<string>()
const sortReverse = ref(false)
const selection = ref<unknown[]>([])

watchEffect(() => { sortBy.value = props.sortBy })
watchEffect(() => { selection.value = props.selection ?? [] })
watch(sortBy, v => { emit('update:sortBy', v) })
watch(selection, v => { emit('update:selection', v) })

const enabledColumns = computed(() => props.columns.filter(Boolean).map(c => c!))

const sortedItems = computed(() => {
  const sortCol = enabledColumns.value.find(isSortCol)
  if (!sortCol?.value) return props.rows
  return props.rows.slice().sort((a, b) => {
    const x = sortCol.value!(a)
    const y = sortCol.value!(b)
    const numbers = typeof x === 'number' && typeof y === 'number'
    const d = numbers ? x - y : `${y}`.localeCompare(`${x}`)
    return sortReverse.value ? d : -d
  })
})

function getColumnSortIcon(col: Column<unknown>) {
  return (isSortCol(col) && sortReverse.value) ? 'arrow_drop_up' : 'arrow_drop_down'
}

function isSortCol(col: Column<unknown>) {
  return sortBy.value === col.name
}

function toggleColumnSort(col: Column<unknown>) {
  if (!col.value) return
  if (isSortCol(col)) {
    if (sortReverse.value) sortBy.value = undefined
    sortReverse.value = !sortReverse.value
  } else {
    sortBy.value = col.name
    sortReverse.value = false
  }
}

function toggleSelect(row: unknown) {
  const id = props.selectable!(row)
  if (selection.value.includes(id)) {
    selection.value = selection.value.filter(x => x !== id)
  } else {
    selection.value.push(id)
  }
}

function isSelected(row: unknown) {
  const id = props.selectable!(row)
  return selection.value.includes(id)
}

// function colHeaderClass(col: number) {
//   const { orderings } = props.columns[col]
//   return {
//     ...colClass(col),
//     '-sortable': orderings && orderings.length > 0,
//   }
// }

// function colClass(col: number) {
//   const { align } = props.columns[col]
//   return {
//     '-right': align === 'right',
//   }
// }

// function itemSelectValue(row: unknown) {
//   return props.selectionValue ? props.selectionValue(row) : row
// }

// function itemSelected(row: unknown) {
//   return !!props.selection?.includes(itemSelectValue(row))
// }

// function toggleSelectItem(row: unknown) {
//   const value = itemSelectValue(row)
//   if (props.selection?.includes(value)) {
//     emit('update:selection', props.selection.filter(x => x !== value))
//   } else {
//     emit('update:selection', [...props.selection || [], value])
//   }
// }

const visibleSelected = computed(() => {
  if (!props.selectable) return []
  return props.rows.filter(r => selection.value.includes(props.selectable!(r)))
})

// const someSelected = computed(() => {
//   return props.items.some(itemSelected)
// })

function toggleSelectAll() {
  const allSelected = visibleSelected.value.length === props.rows.length
  selection.value = allSelected ? [] : props.rows.map(props.selectable!)
}

// let loadMoreDelayTimer: ReturnType<typeof setTimeout>
// watchEffect(() => {
//   clearTimeout(loadMoreDelayTimer)
//   if (bottomVisible.value && props.loadMore) {
//     loadMoreDelayTimer = setTimeout(() => {
//       if (props.loadMore) props.loadMore()
//     }, 300)
//   }
// })
</script>

<style module>
.Datatable {
  font: var(--dodo-font-base);
  background: var(--dodo-color-background);
  /* color: black; */
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
.Datatable th {
  text-align: start;
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
/* .sortable:hover .sortIcon {
  opacity: 0.5;
} */
.sortable.sortActive .sortIcon {
  opacity: 1;
}
.Datatable th,
.Datatable td {
  padding: 8px 12px;
  box-sizing: border-box;
}
.noResults {
  padding: 8px;
}
.loadMore {
  padding: 8px;
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
/*
  td, th {
    padding: 8px 16px;
    text-align: left;
    max-width: 400px;
    background: white;
  }
  tbody {
    td, th {
      height: 64px;
      border-bottom: 1px solid var(--color-outline-grey-medium);
    }
  }
  thead, tfoot {
    td, th {
      background: var(--color-grey-100);
      height: 48px;
      color: var(--color-text-black-medium);
      font: var(--font-body-medium);
      text-transform: capitalize;
      border-top: 1px solid var(--color-outline-grey-medium);
      border-bottom: 1px solid var(--color-outline-grey-medium);
    }
  }
  tr > :first-child {
    left: 0;
    position: sticky;
  }
  thead {
    top: 0;
    position: sticky;
    z-index: 1;
  }
  tfoot {
    bottom: 0;
    position: sticky;
    z-index: 1;
  }

  &.-clickable tbody tr,
  th.-sortable {
    cursor: pointer;
    &:hover td { background: var(--color-grey-100); }
    &:active td { background: var(--color-grey-200); }
  }

  tr.-selected td { background: rgba(var(--rgb-info-500), 0.2) !important; }
}
.InterfaceDatatable_cell {
  display: grid;
  grid-gap: 8px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
}
td, th {
  &.-right .InterfaceDatatable_cell {
    justify-content: end;
  }
} */
</style>
