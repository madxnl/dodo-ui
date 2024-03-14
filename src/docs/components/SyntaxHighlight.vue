<template>
  <pre :class="[$style.SyntaxHighlight, `language-${lang}`]" v-html="html" />
</template>
<script setup lang="ts">
import prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism-solarizedlight.min.css'
import { computed } from 'vue'
const { highlight, languages } = prism

const props = defineProps<{
  code: string
  lang: 'html' | 'ts'
  // editable: boolean
}>()

// const emit = defineEmits<{
// (e: 'update:code', code: string): void
// }>()

const html = computed(() => {
  return highlight(props.code, languages[props.lang], props.lang)
})

// function onInput(e: Event) {
//   const code = (e.target as HTMLElement).innerText
//   emit('update:code', code)
// }
</script>
<style module>
pre.SyntaxHighlight {
  padding: 0;
  margin: 0;
  background: transparent;
  font-size: 15px;
  border-radius: 0;
  white-space: pre-wrap;
}
</style>
