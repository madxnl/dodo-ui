<template>
  <Text p>
    Automatically display a helpful dialogue when an unhandled exception occurs anywhere below this component in the component tree.
  </Text>
  <Text p>
    To detect exceptions for your entire project, import this at the App.vue level and put your template code inside the &lt;CrashDialogue&gt; tag
  </Text>
</template>
<script lang="ts" setup>
import { Text } from '../..'
</script>
