/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component

  import type { ComponentDoc } from 'vue-docgen-api'
  const docs: ComponentDoc
  const source: string
  export { source, docs }
}
