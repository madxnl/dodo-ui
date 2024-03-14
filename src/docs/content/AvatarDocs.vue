<template>
  <ComponentDocsSection :example-src="exampleSrc" :props="props">
    <template #description>
      <p>An avatar component that displays an image or initials.</p>
    </template>
    <template #example>
      <Avatar text="John Doe" round />
      <Avatar text="A A" />
      <Avatar text="Jane Smith" :image="image" />
    </template>
  </ComponentDocsSection>
</template>
<script setup lang="ts">
import { Avatar } from '@/components'
import image from '../bird.svg'
import { ComponentDocsSection } from '../components'

const exampleSrc = `<Avatar text="John Doe" round />
<Avatar text="A A" />
<Avatar text="Jane Smith" :image="image" />`

const props = [
  {
    code: 'text: string',
    description: 'The text used to generate the initials'
  },
  {
    code: 'image?: string | null',
    description: 'The URL of the image to display'
  },
  {
    code: 'round?: boolean',
    description: 'Whether the avatar should have rounded corners'
  }
]
</script>
