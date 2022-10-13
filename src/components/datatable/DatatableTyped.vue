<script lang="ts">
import type { DatatableProps, DatatableSlots } from './Datatable.vue'
import DatatableComponent from './Datatable.vue'

type DatatableGeneric = new <T>(props: DatatableProps<T>) => {
  $props: DatatableProps<T>
  $slots: DatatableSlots<T>
}

export default DatatableComponent as DatatableGeneric

// type DatatableGeneric = new <T>() => {
//   $props: DatatableProps<T>
//   $slots: DatatableSlots<T>
// }

// // GlobalComponentConstructor<DatatableProps, DatatableSlots>

// export default DatatableComponent as DatatableGeneric

// export const Datatable = DatatableComponent as DatatableGeneric
</script>
