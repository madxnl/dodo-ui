<template>
  <p>A dropdown component.</p>
  <DocsExample :example-src="exampleSrc" />
</template>
<script setup lang="ts">
import { DocsExample } from '@/docs/components'

const exampleSrc = `<Dropdown>
  <template #default="{ isActive }">
    <Button :color="isActive ? 'primary' : undefined">Dropdown</Button>
  </template>
  <template #dropdown>
    <p>Dropdown content</p>
    <button style="width: 200px">Button</button>
  </template>
</Dropdown>`
</script>
