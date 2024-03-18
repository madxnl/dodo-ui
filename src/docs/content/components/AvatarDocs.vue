<template>
  <p>The avatar component is used to display an image or initials. The initials are generated from the text prop.</p>
  <LiveExample template='<Avatar text="Abc" />' :context="{ image }" />
  <br />
  <h4>Image</h4>
  <p>The avatar component can also display an image. The image prop is used to specify the URL of the image.</p>
  <LiveExample template='<Avatar text="Jane Smith" :image="image" />' :context="{ image }" />
  <br />
  <h4>Rounded</h4>
  <p>The avatar component can be round by setting the round prop to true.</p>
  <LiveExample template='<Avatar text="John Doe" round />' :context="{ image }" />
</template>
<script setup lang="ts">
import image from '@/docs/bird.svg'
import { LiveExample } from '@/docs/components'
</script>
