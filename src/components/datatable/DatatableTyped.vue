<script lang="ts">
import type { DatatableProps, DatatableSlots } from './Datatable.vue'
import DatatableComponent from './Datatable.vue'

// Add generic typed props/slots support to Datatable component

type DatatableGeneric = new <T>(props: DatatableProps<T>) => {
  $props: DatatableProps<T>
  $slots: DatatableSlots<T>
}

export default DatatableComponent as DatatableGeneric
// export const Datatable = DatatableComponent as DatatableGeneric
</script>
