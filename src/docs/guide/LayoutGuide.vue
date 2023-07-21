<template>
  <p>
    The following CSS classes for layout are available based on flex-box CSS properties:
  </p>
  <BaseTable>
    <tr><th>Class</th><th>Description</th></tr>
    <tr><td><code>d-row</code></td><td>Flexible row container element</td></tr>
    <tr><td><code>d-column</code></td><td>Vertical (column) container element</td></tr>
    <tr><td><code>d-grow</code></td><td>Allow a child to expand inside flex-box containers</td></tr>
    <tr><td><code>d-wrap</code></td><td>Set flex container children to wrap if needed</td></tr>
    <tr><td><code>d-justify-&lt;value&gt;</code></td><td>Set justify-content property value of flex container</td></tr>
    <tr><td><code>d-align-&lt;value&gt;</code></td><td>Set align-items</td></tr>
    <!-- <tr><td><code>d-align-self-&lt;value&gt;</code></td><td>Set align-self of flex child</td></tr> -->
    <!-- <tr><td><code>d-justify-items-&lt;value&gt;</code></td><td>Set justify-items (eg d-justify-items-end)</td></tr> -->
    <!-- <tr><td><code>d-justify-self-&lt;value&gt;</code></td><td>Set justify-self on child of flex container</td></tr> -->
    <!-- <tr><td><code>d-align-content-&lt;value&gt;</code></td><td>Set align-content of flex children</td></tr> -->
  </BaseTable>
  <p>
    Gap classes control spacing between child elements, and padding classes control spacing around the element itself:
  </p>
  <BaseTable>
    <tr><th>Class</th><th>Description</th></tr>
    <tr><td><code>d-gap-N</code></td><td>Set spacing between child elements, where N is one of 0|1|2|3|4|5|6|8|10|12|16</td></tr>
    <tr><td><code>d-pad-N</code></td><td>Set padding around contents</td></tr>
    <tr><td><code>d-pad-xN<br>d-pad-yN</code></td><td>Set horizontal/vertical padding</td></tr>
    <tr><td><code>d-pad-lN<br>d-pad-rN<br>d-pad-tN<br>d-pad-bN</code></td><td>Set left/right/top/bottom padding</td></tr>
  </BaseTable>
</template>
<script setup lang="ts">
import BaseTable from '../BaseTable.vue'

</script>
