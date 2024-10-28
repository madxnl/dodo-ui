<template>
  <p>A dropdown component.</p>
  <DocsExample :example-src="exampleSrc" />
</template>
<script setup lang="ts">
import { DocsExample } from '@/docs/components'

const exampleSrc = `
<Row>
  <Dropdown>
    <template #trigger="{ toggle, open }">
      <Button :color="open ? 'primary' : undefined" @click="toggle">
        Open dropdown
        <Icon name="keyboard_arrow_down" />
      </Button>
    </template>
    
    <template #content="{ close }">
      <p>Dropdown content</p>
      <Button @click="close">Cancel</Button>
    </template>
  </Dropdown>
</Row>
`
</script>
