<template>
  <div>
    <UiIcon name="heart" color="danger" size="small">UiIcon</UiIcon>
    <UiIcon name="heart" color="info">UiIcon</UiIcon>
    <UiIcon name="heart" color="success" size="large">UiIcon</UiIcon>
  </div>
  <div>
    <template v-for="icon in Object.keys(theme.icons)">
      <UiIcon :name="icon" color="info" size="large">UiIcon</UiIcon>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { useTheme } from '../theme';
import UiIcon from './UiIcon.vue';

const theme = useTheme()


</script>
