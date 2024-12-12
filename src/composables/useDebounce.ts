import { computed, ref } from 'vue'
import { useTimer } from './useTimer'

export function useDebounce<T, A extends unknown[]>(func: (...args: A) => T | Promise<T>, delayMs = 500) {
  const { setTimeout } = useTimer()

  const timeout = ref<ReturnType<typeof setTimeout>>()
  const isPending = computed(() => timeout.value != null)

  function cancel() {
    clearTimeout(timeout.value)
    timeout.value = undefined
  }

  function trigger(...args: A) {
    cancel()
    timeout.value = setTimeout(async () => {
      timeout.value = undefined
      await func(...args)
    }, delayMs)
  }

  return { trigger, cancel, isPending }
}
