import { createSSRApp, defineComponent, h } from 'vue'
import type { Component, PageContext, PageProps } from './types'
import { setPageContext } from './usePageContext'

export { createApp }

function createApp(Page: Component, pageProps: PageProps | undefined, pageContext: PageContext) {
  const PageWithLayout = defineComponent({
    render() {
      return h(Page, pageProps || {})
    },
  })

  const app = createSSRApp(PageWithLayout)

  // Make pageContext available from any Vue component
  setPageContext(app, pageContext)

  return app
}
