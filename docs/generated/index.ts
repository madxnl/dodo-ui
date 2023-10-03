import componentsJson from './components.json'
import composablesJson from './composables.json'

export const componentsList = componentsJson
export const composablesList = composablesJson.children

export type ComponentDocData = (typeof componentsList)[number]
export type ComposableDocData = (typeof composablesList)[number]
