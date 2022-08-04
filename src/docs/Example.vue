<template>
  <Container :class="$style.Example" gap="0">
    <Container pad="m">
      <component :is="component" />
    </Container>

    <div :class="$style.expand" @click="showCode=!showCode">
      <Icon :name="showCode ? 'expand_less' : 'expand_more'" />
    </div>

    <template v-if="showCode">
      <SyntaxHighlight :class="$style.code" :code="code" lang="html" />
    </template>
  </Container>
</template>
<script setup lang="ts">
import { DefineComponent, ref } from 'vue'
import { Icon } from '..'
import Container from '../components/Container.vue'
import SyntaxHighlight from './SyntaxHighlight.vue'

defineProps<{
  component: DefineComponent<any, any, any>
  code: string
}>()

const showCode = ref(false)

</script>
<style module>
.Example {
  border: 1px solid rgba(0,0,0,0.15);
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
