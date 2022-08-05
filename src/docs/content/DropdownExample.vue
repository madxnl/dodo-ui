<template>
  <Row gap="s" wrap>
    <Dropdown padding="l">
      <Button>Basic</Button>

      <template #dropdown>
        <Text>Dropdown content</Text>
      </template>
    </Dropdown>

    <Dropdown>
      <template #default="trigger">
        <Button :active="trigger.isActive">
          Menu
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
        <DropdownItem>
          Menu item #3
          <template #after><Icon name="chevron_right" small /></template>
        </DropdownItem>
      </template>
    </Dropdown>
  </Row>
</template>
<script lang="ts" setup>
import { Avatar, Button, Dropdown, DropdownItem, Icon, Row, Text } from '../..'

function clickItem() {}
</script>
