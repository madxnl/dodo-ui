<template>
  <div>
    <Button variant="solid" color="info" @click="showDialog=true">
      Click to open dialog
    </Button>
  </div>

  <Dialog :active="showDialog">
    <Text h3>My dialog</Text>
    <Text>Dialog example</Text>
    <template #controls>
      <Button variant="text" @click="showDialog=false">Cancel</Button>
      <Button variant="solid" color="info" @click="showDialog=false">Confirm</Button>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Button, Dialog, Text } from '../..'

const showDialog = ref(false)
</script>
