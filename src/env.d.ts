/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*:doc' {
  import type { ComponentDoc } from 'vue-docgen-api'
  const componentDoc: ComponentDoc
  export default componentDoc
}


declare module '*:text' {
  const text: string
  export default text
}
