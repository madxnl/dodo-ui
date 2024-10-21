<template>
  <p>An Tooltip component.</p>

  <DocsExample :example-src="exampleSrc" />
</template>
<script setup lang="ts">
import { DocsExample } from '@/docs/components'

const exampleSrc = `<div>
  <Tooltip text="Tooltip text.">
    <Button>Hover me</Button>
  </Tooltip>
</div>`
</script>
