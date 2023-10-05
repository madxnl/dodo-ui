import componentsJson from './components.json'
import typedocsJson from './typedocs.json'

export const componentList = componentsJson
export const typedocList = typedocsJson.children

export type ComponentData = (typeof componentList)[number]
export type TypedocData = (typeof typedocList)[number]
