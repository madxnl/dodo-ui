import { inject, InjectionKey, Plugin, ref } from 'vue'
import { Router } from 'vue-router'

/*
  This plugin listens for any unhandled errors

  app.use(crashPlugin({ router })
*/

export type CrashService = ReturnType<typeof createCrashService>

export type CrashServiceOptions = {
  router: Router | null
  onError?: (err: unknown) => undefined | boolean
}

export const crashServiceKey: InjectionKey<CrashService> = Symbol(createCrashService.name)

function createCrashService(opts: CrashServiceOptions) {
  const currentError = ref(null as unknown | null)
  const ignoredUntil = ref(0)
  const ignoreDuration = 1000

  function ignoreError() {
    currentError.value = null
    ignoredUntil.value = Date.now() + ignoreDuration
  }

  function reloadPage() {
    location.reload()
  }

  function handleCrash(err: unknown) {
    if (opts.onError) {
      // If the error handler returns false, we don't want to handle the error
      const onErrorResult = opts.onError(err)
      if (onErrorResult === false) return
    }
    if (!currentError.value && ignoredUntil.value < Date.now()) {
      console.error(err) // eslint-disable-line no-console
      currentError.value = err
    }
  }

  return { ignoreError, reloadPage, currentError, handleCrash }
}

export function crashPlugin(opts: CrashServiceOptions): Plugin {
  return (app) => {
    const service = createCrashService(opts)
    app.provide(crashServiceKey, service)

    const { errorHandler } = app.config
    app.config.errorHandler = (err, instance, info) => {
      service.handleCrash(err)
      if (errorHandler) return errorHandler(err, instance, info)
    }

    opts.router?.onError((err) => {
      service.handleCrash(err)
    })

    window.addEventListener('unhandledrejection', (event) => {
      service.handleCrash(event.reason)
    })

    window.addEventListener('error', (event) => {
      service.handleCrash(event.error ?? event.message)
    })
  }
}

export function useCrashService() {
  return inject(crashServiceKey)!
}
