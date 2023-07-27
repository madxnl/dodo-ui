<template>
  <table :class="$style.Table">
    <slot />
  </table>
</template>
<script lang="ts">
export default {}
</script>
<style module>
.Table {
  font: var(--dodo-font-base);
  font-size: calc(var(--dodo-font-size) - 1px);
  border-collapse: collapse;
  width: 100%;
}
.Table th {
  text-align: left;
  padding: 8px;
  font-weight: var(--dodo-weight-bold);
}
.Table td {
  border-width: 1px 0;
  padding: 8px;
  vertical-align: top;
  max-width: 350px;
  min-width: 150px;
}
.Table tr:not(:last-child) > * {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
</style>
