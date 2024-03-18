<template>
  <p>
    The Icon component allows you to display any icon from the Google Material Symbols and Icons webfont. The full list
    of available icons can be found here:
    <a href="https://fonts.google.com/icons" target="_blank">fonts.google.com/icons</a>
  </p>
  <LiveExample
    template='<Row>
  <Icon name="add_circle"/>
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
  <Icon name="shopping_cart" />
</Row>'
  />
  <br />
  <p>
    Use the <code>size</code> and <code>color</code> props to customize the icon. The <code>fill</code> prop can be used
    to override fill or outline style.
  </p>
  <LiveExample
    template='<Icon name="favorite" size="xs" color="info" />
<Icon name="favorite" color="success" />
<Icon name="favorite" color="warn" fill size="l" />
<Icon name="favorite" color="danger" fill size="xl" />'
  />
</template>
<script setup lang="ts">
import LiveExample from '@/docs/components/LiveExample.vue'
</script>
