<template>
  <div>
    <Icon name="heart" color="danger" size="small">Icon</Icon>
    <Icon name="heart" color="info">Icon</Icon>
    <Icon name="heart" color="success" size="large">Icon</Icon>
  </div>
  <div>
    <template v-for="icon in Object.keys(theme.icons)" :key="icon">
      <Icon :name="icon" color="info" size="large">Icon</Icon>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { useTheme } from '../theme'
import { Icon } from '..'

const theme = useTheme()

</script>
