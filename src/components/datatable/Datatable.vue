<template>
  <div :class="$style.Datatable" :style="`--n-cols:${columns.length}`">
    <div
      v-for="col in columns" :key="col.name"
      :class="[
        $style.cell,
        col.value ? $style.sortable : '',
        isSortCol(col) && $style.sortActive,
      ]"
      @click="toggleColumnSort(col)"
    >
      <!-- <FormCheckbox
              v-if="selection && col==columns[0]"
              :model-value="everythingSelected" :indeterminate="!everythingSelected && someSelected"
              @update:model-value="toggleSelectAll" /> -->

      <Text strong style="flex-grow:1">{{ col.name }}</Text>

      <Icon v-if="col.value" :name="getColumnSortIcon(col)" :class="$style.sortIcon" />
    </div>

    <template v-for="(item, i) in sortedItems" :key="i">
      <div
        v-for="col,j in columns" :key="col.name" :class="[
          $style.cell,
          i + 1 === sortedItems.length && $style.lastRow,
        ]" @click="rowClick(i)"
      >
        <!-- <FormCheckbox
              v-if="selection && col==columns[0]"
              :model-value="itemSelected(item)" @update:model-value="toggleSelectItem(item)" /> -->
        <slot :name="col.slot ?? 'cell'" :item="item" :index="i" :column="col" :column-index="j">
          {{ col.value ? col.value(item) : '' }}
        </slot>
      </div>
    </template>
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

    <div v-if="!items.length" :class="$style.noResults">
      No results
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, VNode, watchEffect } from 'vue'
import { Icon, Text } from '..'

export interface Column<T> {
  name: string
  value?: (item: T) => string|number
  slot?: string
  // align?: string
  // width?: number
}

// export interface DatatableSlots<T> {
//   cell?: (context: { item: T; column: Column<T> }) => Array<VNode> | undefined
// }

export type DatatableSlots<T> = Record<string, (context: { item: T; column: Column<T> }) => Array<VNode> | undefined>

export interface DatatableProps<T> {
  items: T[]
  columns: Column<T>[]
  order?: string
  // selection?: unknown[]
  // rowClick?: (i: number) => void
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

const sortedItems = computed(() => {
  const sortCol = props.columns.find(isSortCol)
  if (!sortCol?.value) return props.items
  return props.items.slice().sort((a, b) => {
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

function rowClick(row: number) {
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

// function itemSelectValue(item: unknown) {
//   return props.selectionValue ? props.selectionValue(item) : item
// }

// function itemSelected(item: unknown) {
//   return !!props.selection?.includes(itemSelectValue(item))
// }

// function toggleSelectItem(item: unknown) {
//   const value = itemSelectValue(item)
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
  /* color: black; */
  display: grid;
  grid-template-columns: repeat(var(--n-cols), auto);
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
  padding: 8px;
  display: flex;
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
