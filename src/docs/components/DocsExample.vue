<template>
  <Column :class="$style.Example" gap="0">
    <Column padding="m">
      <div ref="el" :class="$style.exampleDiv">
        <slot />
        <Example />
      </div>
    </Column>

    <div :class="$style.expand" @click="showCode = !showCode">
      <Icon :name="showCode ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" />
    </div>

    <template v-if="exampleSrc && showCode">
      <SyntaxHighlight :code="exampleSrc.trim()" :class="$style.code" lang="html" />
    </template>
  </Column>
</template>
<script setup lang="ts">
import { type ComponentOptions, defineComponent } from 'vue'
import { ref } from 'vue'
import { Column, Icon } from '@/components'
import * as components from '@/components'
import SyntaxHighlight from './SyntaxHighlight.vue'

const props = defineProps<{
  options?: ComponentOptions
  exampleSrc?: string
  context?: any
}>()

const Example = defineComponent({
  components: components as any,
  setup() {
    if (props.context) return { ...(props.context as any) }
  },
  template: props.exampleSrc ?? '<div />'
})

const showCode = ref(false)
const el = ref<HTMLElement>()
</script>
<style module>
.Example {
  border: 1px solid var(--dodo-color-border);
}
.exampleDiv {
  display: grid;
  gap: var(--dodo-spacing-m);
}
.code {
  border-top: 1px solid var(--dodo-color-border);
  border-left: 0;
  margin: 0 !important;
  white-space: pre-wrap !important;
  background: var(--dodo-color-border) !important;
  padding: 8px 16px !important;
}
.expand {
  border-top: 1px solid var(--dodo-color-border);
  cursor: pointer;
  color: var(--dodo-color-border);
  display: grid;
  padding: 4px;
  justify-content: center;
  transition: all 0.1s;
}
.expand:hover {
  color: #000000;
  background: var(--dodo-color-border);
}
</style>
