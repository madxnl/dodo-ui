<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>An icon component that uses the Material Symbols font.</p>
    </template>
    <template #example>
      <Row wrap>
        <Icon name="favorite" color="info" size="s" fill />
        <Icon name="favorite" color="warn" size="l" fill />
        <Icon name="add_circle" fill color="success" />
        <Icon name="skateboarding" />
        <Icon name="map" />
        <Icon name="help" />
        <Icon name="download" />
        <Icon name="chevron_right" />
        <Icon name="add" />
        <Icon name="fullscreen" />
        <Icon name="new_releases" />
        <Icon name="account_circle" />
        <Icon name="menu" />
        <Icon name="check_indeterminate_small" />
        <Icon name="tab_move" />
      </Row>
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { Icon, Row } from '@/components'
import { ComponentDocsSection } from '../components'

const exampleSrc = `<Row wrap>
  <Icon name="favorite" color="info" size="s" fill />
  <Icon name="favorite" color="warn" size="l" fill />
  <Icon name="add_circle" fill color="success" />
  <Icon name="skateboarding" />
  <Icon name="map" />
  <Icon name="help" />
  <Icon name="download" />
  <Icon name="chevron_right" />
  <Icon name="add" />
  <Icon name="fullscreen" />
  <Icon name="new_releases" />
  <Icon name="account_circle" />
  <Icon name="menu" />
  <Icon name="check_indeterminate_small" />
  <Icon name="tab_move" />
</Row>`

const props = [
  {
    code: 'name: IconName',
    description: 'The name of the icon to display'
  },
  {
    code: 'color?: ColorProp',
    description: 'The color of the icon'
  },
  {
    code: 'fill?: boolean',
    description: 'Determines if the icon should have a filled variant'
  },
  {
    code: "size?: 'xs' | 's' | 'm' | 'l' | 'xl'",
    description: 'The size of the icon'
  }
]
</script>
