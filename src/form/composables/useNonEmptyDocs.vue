<template>
  <Column gap="1">
    <SyntaxHighlight lang="ts" code="useNonEmptyStr(data: MaybeRef<string | null>): Ref<string | null>" />
    <p>
      A composable function that takes a <code>MaybeRef</code> and returns a computed ref that converts empty strings to
      null.
    </p>
  </Column>
  <blockquote>
    <SyntaxHighlight lang="ts" :code="example1" />
  </blockquote>
</template>
<script setup lang="ts">
import { SyntaxHighlight } from '@/docs'
import { Column } from '@/layout'

const example1 = `const name = ref('')
const nonEmptyName = useNonEmptyStr(name)
nonEmptyName.value = 'John'
console.log(name.value) // 'John'
name.value = ''
console.log(nonEmptyName.value) // null
`
</script>
