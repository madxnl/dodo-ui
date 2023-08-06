import { computed, MaybeRef, toRef } from 'vue'

export function useNonEmptyStr(data: MaybeRef<string | null>) {
  /** Returns a computed ref that converts empty strings to null */
  const current = toRef(data)
  const nonEmpty = computed({
    get() {
      return current.value === '' ? null : current.value
    },
    set(v) {
      current.value = v
    },
  })
  return nonEmpty
}
