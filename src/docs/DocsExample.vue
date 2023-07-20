<template>
  <Column :class="$style.Example" gap="0">
    <Column padding="4">
      <div ref="el" :class="$style.exampleDiv" />
    </Column>

    <div :class="$style.expand" @click="showCode=!showCode">
      <Icon :name="showCode ? 'expand_less' : 'expand_more'" />
    </div>

    <template v-if="showCode">
      <SyntaxHighlight :code="templateSrc" :class="$style.code" lang="html" />
      <!-- <SyntaxHighlight v-if="setup" :code="setup.toString()" :class="$style.code" lang="ts" /> -->
    </template>
  </Column>
</template>
<script setup lang="ts">
import { App, ComponentOptions, computed, ref, watchEffect } from 'vue'
import * as components from '..'
import { Column, Icon, crashPlugin } from '..'
import SyntaxHighlight from './SyntaxHighlight.vue'
// @ts-ignore
import { createApp } from 'vue/dist/vue.esm-bundler'

const props = defineProps<{
  options: ComponentOptions
}>()

const templateSrc = computed(() => (props.options.template as string).trim())

const showCode = ref(false)
// const templateCode = ref(props.template)
// const setupCode = ref(props.setup)
const el = ref<HTMLElement>()

let app: App

watchEffect(() => {
  if (!el.value) return

  if (app) app.unmount()

  app = createApp({
    components,
    // setup: props.setup,
    // template: props.template,
    ...props.options,
  })
  app.use(crashPlugin({ router: null }))
  app.mount(el.value)
})

</script>
<style module>
.Example {
  border: 1px solid rgba(0,0,0,0.15);
}
.exampleDiv {
  display: grid;
  gap: var(--dodo-gap-4);
}
.code {
  border-top: 1px solid rgba(0,0,0,0.15);
  border-left: 0;
  margin: 0 !important;
  white-space: pre-wrap !important;
  background: rgba(0,0,0,0.03) !important;
  padding: 8px 16px !important;
}
.expand {
  border-top: 1px solid rgba(0,0,0,0.15);
  cursor: pointer;
  color: rgba(0,0,0,0.5);
  display: grid;
  padding: 4px;
  justify-content: center;
  transition: all .1s;
}
.expand:hover {
  color: #000000;
  background: rgba(0,0,0,0.03);
}
</style>
