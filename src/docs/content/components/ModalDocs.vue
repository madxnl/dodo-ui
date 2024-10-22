<template>
  <p>The Modal component is used to display a modal dialog.</p>
  <br />
  <LiveExample :template="template1" :context="{ modalOpen: ref(false) }" />
  <br />
</template>
<script setup lang="ts">
import { LiveExample } from '@/docs/components'
import { ref } from 'vue'

const template1 = `<Button @click="modalOpen = true">Toggle modal</Button>

<Modal :open="modalOpen" @close="modalOpen = false" v-slot="{ close }">
  <h2>Modal title</h2>
  <p>Content</p>
  <br>
  <Button @click="close">Close</Button>
</Modal>`
</script>
