import { watch, ref } from 'vue'

export function useTimer() {
  // setTimeout with promise support and error handling built in

  const error = ref<unknown>()

  watch(error, (e) => {
    error.value = undefined
    if (e) throw e
  })

  function setTimeout<T extends Promise<void> | void>(func: () => T, delayMs: number) {
    return window.setTimeout(() => captureErrors(func), delayMs)
  }

  function captureErrors<T extends Promise<void> | void>(func: () => T) {
    try {
      const promise = func()
      if (promise instanceof Promise) {
        promise.catch((e) => {
          error.value = e
        })
      }
    } catch (e) {
      error.value = e
    }
  }

  return { setTimeout }
}
