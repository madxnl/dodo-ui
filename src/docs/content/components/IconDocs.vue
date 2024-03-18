<template>
  <p>
    The Icon component allows you to display any icon from the Google Material Symbols and Icons webfont. The full list
    of available icons can be found here:
    <a href="https://fonts.google.com/icons" target="_blank">fonts.google.com/icons</a>
  </p>
  <LiveExample
    :template="`<Row>
  <Icon name=&quot;add_circle&quot;/>
  <Icon name=&quot;skateboarding&quot; />
  <Icon name=&quot;map&quot; />
  <Icon name=&quot;help&quot; />
  <Icon name=&quot;download&quot; />
  <Icon name=&quot;chevron_right&quot; />
  <Icon name=&quot;add&quot; />
  <Icon name=&quot;fullscreen&quot; />
  <Icon name=&quot;new_releases&quot; />
  <Icon name=&quot;account_circle&quot; />
  <Icon name=&quot;menu&quot; />
  <Icon name=&quot;check_indeterminate_small&quot; />
  <Icon name=&quot;shopping_cart&quot; />
</Row>`"
    :components="{ Icon, Row }"
  />
  <br />
  <p>Use the <code>size</code> and <code>color</code> props to customize the icon.</p>
  <LiveExample
    template='<Icon name="favorite" color="info" fill />
<Icon name="favorite" color="danger" size="l" fill />'
    :components="{ Icon }"
  />
  <br />
  <p>The fill prop can be used to override fill or outline style.</p>
  <LiveExample
    template='<Icon name="favorite" fill />
<Icon name="favorite" :fill="false" />'
    :components="{ Icon }"
  />
</template>
<script setup lang="ts">
import { Icon, Row } from '@/components'
import LiveExample from '@/docs/components/LiveExample.vue'
</script>
