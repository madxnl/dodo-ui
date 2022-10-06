<template>
  <table :class="$style.Datatable">
    <tr>
      <th
        v-for="col in enabledColumns" :key="col.name"
        :class="[
          $style.cell,
          col.value ? $style.sortable : '',
          isSortCol(col) && $style.sortActive,
        ]"
        :style="`text-align:${col.align};width:${col.width}`"
        @click="toggleColumnSort(col)"
      >
        <!-- <FormCheckbox
                v-if="selection && col==columns[0]"
                :model-value="everythingSelected" :indeterminate="!everythingSelected && someSelected"
                @update:model-value="toggleSelectAll" /> -->

        <span :class="$style.colName">
          <Text strong>{{ col.name }}</Text>
          <Icon v-if="col.value" :name="getColumnSortIcon(col)" :class="$style.sortIcon" />
        </span>
      </th>
    </tr>

    <tr
      v-for="(row, i) in sortedItems" :key="i" :class="[
        rowClick && $style.clickableRow,
      ]"
      @click="rowClick && rowClick(row)"
    >
      <td
        v-for="col in enabledColumns" :key="col.name" :class="[
          $style.cell,
          i + 1 === sortedItems.length && $style.lastRow,
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
  </table>
</template>
<script lang="ts" setup>
import { computed, ref, VNode, watchEffect } from 'vue'
import { Icon, Text } from '..'

export interface Column<T> {
  name: string
  value?: (row: T) => string|number
  slot?: string
  align?: 'start'|'end'
  width?: string
}

// export interface DatatableSlots<T> {
//   cell?: (context: { row: T; column: Column<T> }) => Array<VNode> | undefined
// }

export type DatatableSlots<T> = Record<string, (context: { row: T; column: Column<T> }) => Array<VNode> | undefined>

export interface DatatableProps<T> {
  rows: T[]
  columns: (Column<T>|null)[]
  order?: string
  // selection?: unknown[]
  rowClick?: (row: T) => void
  // selectionValue?: (x: unknown) => unknown
  // loadMore?: () => void
  // updating?: boolean
}

const props = defineProps<DatatableProps<unknown>>()

const emit = defineEmits<{
  // (e: 'update:selection', selection: unknown[]): void
  (e: 'update:order', order: string|undefined): void
}>()

const order = ref<string>()
const orderReverse = ref(false)

watchEffect(() => { order.value = props.order })
watchEffect(() => { emit('update:order', order.value) })

const enabledColumns = computed(() => props.columns.filter(Boolean).map(c => c!))

const sortedItems = computed(() => {
  const sortCol = enabledColumns.value.find(isSortCol)
  if (!sortCol?.value) return props.rows
  return props.rows.slice().sort((a, b) => {
    const x = sortCol.value!(a)
    const y = sortCol.value!(b)
    const numbers = typeof x === 'number' && typeof y === 'number'
    const d = numbers ? x - y : `${y}`.localeCompare(`${x}`)
    return orderReverse.value ? d : -d
  })
})

function getColumnSortIcon(col: Column<unknown>) {
  return (isSortCol(col) && orderReverse.value) ? 'arrow_drop_up' : 'arrow_drop_down'
}

function isSortCol(col: Column<unknown>) {
  return order.value === col.name
}

function toggleColumnSort(col: Column<unknown>) {
  if (!col.value) return
  if (isSortCol(col)) {
    if (orderReverse.value) order.value = undefined
    orderReverse.value = !orderReverse.value
  } else {
    order.value = col.name
    orderReverse.value = false
  }
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

// const everythingSelected = computed(() => {
//   return props.items.every(itemSelected) && props.items.some(itemSelected)
// })

// const someSelected = computed(() => {
//   return props.items.some(itemSelected)
// })

// function toggleSelectAll(toggle: boolean|undefined) {
//   emit('update:selection', toggle ? props.items.map(itemSelectValue) : [])
// }

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
.cell {
  padding: 8px 12px;
  /* display: flex; */
  align-items: center;
  gap: 8px;
}
.cell {
  border-bottom: 1px solid rgba(0,0,0,0.15);
}
.noResults {
  grid-row: span var(--n-cols);
  padding: 8px;
}
.lastRow {
  border: none;
}
.clickableRow:hover {
  cursor: pointer;
  background: rgba(0,0,0,0.03);
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
