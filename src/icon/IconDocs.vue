<template>
  <Text p>
    Use any icon from the Google Material Symbols library with support for line thickness and filled/unfilled icons.<br>
    An overview of all available symbols can be found on <a href="https://fonts.google.com/icons">Google Material Symbols and Icons</a>.
  </Text>
  <Docs.DocsExample :options="{ template }" />
  <br>
  <Text p>
    Some brand icons are also available using &lt;SocialIcon>.
  </Text>
  <Docs.DocsExample :options="{ template: template2 }" />
</template>
<script setup lang="ts">
import { Text } from '..'
import * as Docs from '../docs'

const template = `
<div>
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
</div>`

const template2 = `
<Row>
  <SocialIcon name="google" />
  <SocialIcon name="twitter" />
  <SocialIcon name="slack" />
  <SocialIcon name="facebook" />
  <SocialIcon name="linkedin" />
  <SocialIcon name="whatsapp" />
</Row>
<Button variant="solid" color="info">
  <SocialIcon name="google" white />
  <SocialIcon name="twitter" white />
  <SocialIcon name="facebook" white />
  <SocialIcon name="linkedin" white />
  <SocialIcon name="slack" white />
</Button>`
</script>
