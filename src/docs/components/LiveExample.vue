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
import type { Component, ComponentOptions } from 'vue'
import { defineComponent, onErrorCaptured, ref, shallowRef, watchEffect } from 'vue'
import SyntaxHighlight from './SyntaxHighlight.vue'

const props = defineProps<{
  options?: ComponentOptions
  components: Record<string, Component>
  context?: any
  setup?: string
  exampleSrc?: string
  template?: string
}>()

const template = ref(props.template)
const setup = ref(props.setup)
const component = shallowRef<Component>()
const error = ref('')

watchEffect(() => {
  error.value = ''
  Object.defineProperties(window, { ref: { value: ref } })
  const setupFn: Function = window.eval(`() => {${setup.value}}`) // eslint-disable-line no-eval
  component.value = defineComponent({
    components: props.components,
    setup() {
      try {
        const result = { ...(props.context || {}), ...(setupFn() || {}) }
        return result
      } catch (e) {
        error.value = '' + e
      }
    },
    template: template.value
  })
})

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
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
