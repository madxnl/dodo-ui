<template>
  <p>The Modal component is used to display a modal dialog.</p>
  <br />
  <LiveExample :template="template1" :context="context" />
  <br />
</template>
<script setup lang="ts">
import { LiveExample } from '@/docs/components'
import { ref } from 'vue'

const context = {
  modalOpen: ref(false),
  modalOpen2: ref(false)
}

const template1 = `<Row>
  <Button @click="modalOpen = true">Toggle modal</Button>
  <Button @click="modalOpen2 = true">Large modal</Button>
</Row>

<Modal :open="modalOpen" @close="modalOpen = false" v-slot="{ close }">
  <h2>Modal title</h2>
  <p>Content</p>
  <br>
  <Button @click="close">Close</Button>
</Modal>

<Modal :open="modalOpen2" @close="modalOpen2 = false" v-slot="{ close }" size=XL>
  <h4>{{ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(999) }}</h4>
</Modal>`
</script>
