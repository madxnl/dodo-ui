<template>
  <div :class="$style.container">
    <div v-if="template" :class="$style.code">
      <SyntaxHighlight :code="template" lang="html" />
    </div>

    <div v-if="setup" :class="$style.code">
      <SyntaxHighlight v-if="setup" :code="setup" lang="ts" />
    </div>

    <div :class="$style.result">
      <p v-if="error" :class="[$style.code, 'dodo-color-danger']">{{ error }}</p>
      <component :is="component" v-else />
    </div>
  </div>
</template>
<script setup lang="ts">
import * as allComponents from '@/components'
import type { Component, ComponentOptions } from 'vue'
import { defineComponent, onErrorCaptured, ref, shallowRef, watch } from 'vue'
import SyntaxHighlight from './SyntaxHighlight.vue'

const props = defineProps<{
  options?: ComponentOptions
  components?: Record<string, Component>
  context?: any
  setup?: string
  hiddenSetup?: string
  template?: string
}>()

const template = ref(props.template)
const setup = ref(props.setup)
const component = shallowRef<Component>()
const error = ref('')

watch(() => [props.template, props.setup], recompile, { immediate: true })

function recompile() {
  error.value = ''
  const initialContext = { ref }
  const addedContext = typeof props.context === 'function' ? props.context() : props.context || {}
  const context = { ...initialContext, ...addedContext }
  for (const [k, v] of Object.entries(context)) {
    Object.defineProperty(window, k, { value: v, writable: true })
  }
  component.value = defineComponent({
    components: { ...(allComponents as object), ...(props.components ?? {}) },
    setup() {
      const results = { ...(props.context || {}) }
      try {
        if (setup.value) {
          const setupResults = window.eval(`() => {${setup.value}}`)()
          Object.assign(results, setupResults)
        }
        if (props.hiddenSetup) {
          const setupResults = window.eval(`() => {${props.hiddenSetup}}`)()
          Object.assign(results, setupResults)
        }
      } catch (e) {
        error.value = '' + e
      }
      return results
    },
    template: template.value
  })
}

onErrorCaptured((err) => {
  error.value = '' + err
  return false
})
</script>
<style module>
.container {
  display: flex;
  flex-flow: column;
  gap: 8px;
}
.result {
  display: flex;
  flex-flow: column;
  padding: 16px;
  gap: 8px;
  border-radius: var(--dodo-radius-s);
  border: 1px solid var(--dodo-color-border);
}
</style>
