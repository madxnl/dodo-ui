<template>
  <Row>
    <Button variant="solid" color="info" @click="showModal=true">
      Click to open dialog
    </Button>
  </Row>

  <Modal :active="showModal">
    <Text h3>My dialog</Text>
    <Text>Modal example</Text>
    <template #controls>
      <Button variant="text" @click="showModal=false">Cancel</Button>
      <Button variant="solid" color="info" @click="showModal=false">Confirm</Button>
    </template>
  </Modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Button, Modal, Row, Text } from '..'

const showModal = ref(false)
</script>
