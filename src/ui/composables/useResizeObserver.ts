import { Ref, onBeforeUnmount, watchEffect } from 'vue'

export function useResizeObserver(ref: Ref<HTMLElement | undefined>, onResize: (el: HTMLElement) => void) {
  const observer = new ResizeObserver(() => onResize(ref.value!))

  watchEffect(() => {
    if (ref.value) observer.observe(ref.value)
  })

  onBeforeUnmount(() => {
    observer.disconnect()
  })

  return { observer }
}
