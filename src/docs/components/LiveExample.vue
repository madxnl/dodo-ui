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
  Object.defineProperties(window, { ref: { value: ref } })
  component.value = defineComponent({
    components: { ...(allComponents as {}), ...(props.components ?? {}) },
    setup() {
      const results = props.context || {}
      try {
        if (setup.value) {
          const setupResults = window.eval(`() => {${setup.value}}`)() // eslint-disable-line no-eval
          Object.assign(results, setupResults)
        }
        if (props.hiddenSetup) {
          const setupResults = window.eval(`() => {${props.hiddenSetup}}`)() // eslint-disable-line no-eval
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
  display: grid;
  gap: 8px;
}
.result {
  display: grid;
  padding: 16px;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid var(--dodo-color-border);
}
</style>
