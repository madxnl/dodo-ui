// `usePageContext` allows us to access `pageContext` in any Vue component.
// See https://vike.dev/pageContext-anywhere

import type { App, InjectionKey } from 'vue'
import { inject } from 'vue'
import { PageContext } from './types'

export { setPageContext, usePageContext }

const key: InjectionKey<PageContext> = Symbol('pageContext')

function usePageContext() {
  const pageContext = inject(key)
  if (!pageContext) throw new Error('setPageContext() not called in parent')
  return pageContext
}

function setPageContext(app: App, pageContext: PageContext) {
  app.provide(key, pageContext)
}
