<template>
  <Column :class="$style.Example" gap="0">
    <Column padding="4">
      <div ref="el" :class="$style.exampleDiv">
        <slot />
      </div>
    </Column>

    <div :class="$style.expand" @click="showCode = !showCode">
      <Icon :name="showCode ? 'expand_less' : 'expand_more'" />
    </div>

    <template v-if="exampleSrc && showCode">
      <SyntaxHighlight :code="exampleSrc.trim()" :class="$style.code" lang="html" />
      <!-- <SyntaxHighlight v-if="setup" :code="setup.toString()" :class="$style.code" lang="ts" /> -->
    </template>
  </Column>
</template>
<script setup lang="ts">
import type { ComponentOptions } from 'vue'
import { ref } from 'vue'
import { Column, Icon } from '../..'
import SyntaxHighlight from './SyntaxHighlight.vue'

defineProps<{
  options?: ComponentOptions
  exampleSrc?: string
}>()

const showCode = ref(false)
const el = ref<HTMLElement>()
</script>
<style module>
.Example {
  border: 1px solid var(--dodo-color-border);
}
.exampleDiv {
  display: grid;
  gap: var(--dodo-gap-4);
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
