<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Todo.
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import { DocsComponentSection } from '..'
// @ts-ignore
import { DOCGEN as doc } from '../../components/Dropdown.vue'

function clickItem() {}

const setup = () => ({ clickItem })

const template = `
<Dropdown padding="6">
  <Button>Basic dropdown</Button>

  <template #dropdown>
    <p>Dropdown content</p>
  </template>
</Dropdown>

<Dropdown>
  <template #default="trigger">
    <Button :active="trigger.isActive">
      Dropdown menu
      <Icon :name="trigger.isActive ? 'expand_less' : 'expand_more'" />
    </Button>
  </template>
  <template #dropdown>
    <DropdownItem emphasize @click="clickItem">
      <template #before><Avatar text="A A" /></template>
      Menu item
      <template #text-secondary>Secondary text</template>
    </DropdownItem>
    <DropdownItem @click="clickItem">Menu item #1</DropdownItem>
    <DropdownItem active>Menu item #2</DropdownItem>
    <DropdownItem separator>
      Menu item #3
      <template #after><Icon name="chevron_right" small /></template>
    </DropdownItem>
  </template>
</Dropdown>`
</script>
