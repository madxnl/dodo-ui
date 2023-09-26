<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>An Tooltip component.</p>
    </template>
    <template #example>
      <div>
        <Tooltip text="Tooltip text.">
          <Button>Hover me</Button>
        </Tooltip>
      </div>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { ComponentDocsSection } from '@/docs'
import { Button, Tooltip } from '../..'

const exampleSrc = `<div>
  <Tooltip text="Tooltip text.">
    <Button>Hover me</Button>
  </Tooltip>
</div>`

const props = [
  {
    code: 'text: String',
    description: 'The text of the Tooltip',
  },
]
</script>
