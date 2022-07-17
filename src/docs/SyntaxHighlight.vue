<template>
  <pre :class="`uiSyntaxHighlight language-${lang}`" v-html="html" />
</template>
<script setup lang="ts">
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism-solarizedlight.min.css'
import { computed } from 'vue'

const props = defineProps<{
  code: string
  lang: 'html'|'ts'
}>()

const html = computed(() => {
  return highlight(props.code, languages[props.lang], props.lang)
})
</script>
<style>
pre.uiSyntaxHighlight {
  padding: 0;
  margin: 0;
  background: transparent;
  font-size: 15px;
  border-radius: 0;
  white-space: pre-wrap;
}
</style>
