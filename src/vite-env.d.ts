/// <reference types="vite/client" />

declare module '*.vue' {
  // import type { DefineComponent } from 'vue'
  // const component: DefineComponent<{}, {}, any>
  import type { ComponentOptionsWithObjectProps } from 'vue'
  const component: ComponentOptionsWithObjectProps<T>
  export default component
}
