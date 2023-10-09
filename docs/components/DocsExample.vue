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
import { ComponentOptions, ref } from 'vue'

defineProps<{
  options?: ComponentOptions
  exampleSrc?: string
}>()

const showCode = ref(false)
const el = ref<HTMLElement>()
</script>
<style module>
.Example {
  border: 1px solid rgba(0, 0, 0, 0.15);
}
.exampleDiv {
  display: grid;
  gap: var(--dodo-gap-4);
}
.code {
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-left: 0;
  margin: 0 !important;
  white-space: pre-wrap !important;
  background: rgba(0, 0, 0, 0.03) !important;
  padding: 8px 16px !important;
}
.expand {
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  display: grid;
  padding: 4px;
  justify-content: center;
  transition: all 0.1s;
}
.expand:hover {
  color: #000000;
  background: rgba(0, 0, 0, 0.03);
}
</style>
