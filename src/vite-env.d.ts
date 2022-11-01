/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component

  // Added: (see vite config)
  import type { ComponentDoc } from 'vue-docgen-api'
  export const _docgen: ComponentDoc
}
