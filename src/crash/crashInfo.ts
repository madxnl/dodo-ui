import { inject, InjectionKey, Plugin, reactive } from 'vue'
import { Router } from 'vue-router'

/** The service which contains global crash state and can be injected */
function newCrashInfo() {
  const state = reactive({
    error: null as unknown|null,
  })

  function setError(err: unknown|null) {
    if (!err) {
      state.error = null
      return
    }
    console.warn('Displaying error dialog for the following unhandled error:', err) // eslint-disable-line no-console
    state.error = err
  }

  function clearError() {
    state.error = null
  }

  function getError() {
    return state.error
  }

  return { setError, clearError, getError }
}

export type ErrorService = ReturnType<typeof newCrashInfo>

const key: InjectionKey<ErrorService> = Symbol(newCrashInfo.name)

/** Vue plugin for the service, use with app.use() */
export function crashDialogPlugin(opts: { router?: Router }): Plugin {
  const crashInfo = newCrashInfo()

  return (app) => {
    app.provide(key, crashInfo)

    const _errorHandler = app.config.errorHandler
    app.config.errorHandler = (err, instance, info) => {
      crashInfo.setError(err)
      if (_errorHandler) return _errorHandler(err, instance, info)
    }

    window.addEventListener('unhandledrejection', event => {
      crashInfo.setError(event.reason)
    })

    if (opts.router) {
      opts.router.onError(err => {
        crashInfo.setError(err)
      })
    }
  }
}

/** Use service inside a component */
export function useCrashInfo() {
  return inject(key)
}
