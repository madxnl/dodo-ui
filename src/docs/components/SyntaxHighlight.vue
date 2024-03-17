<template>
  <pre ref="el" :class="[$style.SyntaxHighlight, `language-${lang}`]" />
</template>
<script setup lang="ts">
import prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism-solarizedlight.min.css'
import { onMounted, ref } from 'vue'
const { highlight, languages } = prism

const props = defineProps<{
  code: string
  lang: 'html' | 'ts'
}>()

const el = ref<HTMLElement>()

onMounted(() => {
  const result = highlight(props.code, languages[props.lang], props.lang)
  el.value!.innerHTML = result
})
</script>
<style module>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap');

pre.SyntaxHighlight {
  padding: 8px 16px;
  border-radius: 4px !important;
  margin: 0;
  font-size: 16px;
  border-radius: 0;
  white-space: pre-wrap;
  font-family: 'Inconsolata', monospace;
  background: transparent;
  border: 1px solid hsl(0, 0%, 88%);
  background: hsl(0, 0%, 92%);
}
</style>
