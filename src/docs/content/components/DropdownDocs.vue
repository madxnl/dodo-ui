<template>
  <ComponentDocsSection :example-src="exampleSrc">
    <template #description>
      <p>A dropdown component.</p>
    </template>
    <template #example>
      <Dropdown>
        <template #default="{ isActive }">
          <Button :color="isActive ? 'primary' : undefined">Dropdown</Button>
        </template>
        <template #dropdown>
          <p>Dropdown content</p>
          <button style="width: 200px">Button</button>
        </template>
      </Dropdown>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { Button, Dropdown } from '@/components'
import { ComponentDocsSection } from '@/docs/components'

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
