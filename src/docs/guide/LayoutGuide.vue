<template>
  <p class="d-text">
    The following CSS classes for layout are available based on flex-box CSS properties:
  </p>
  <BaseTable>
    <tr><th>Class</th><th>Description</th></tr>
    <tr><td class="d-code">d-row</td><td>Flexible row container element</td></tr>
    <tr><td class="d-code">d-column</td><td>Vertical (column) container element</td></tr>
    <tr><td class="d-code">d-column</td><td>Vertical (column) container element</td></tr>

    <tr><td class="d-code">d-grow</td><td>Allow a child to expand inside flex-box containers</td></tr>
    <tr><td class="d-code">d-wrap</td><td>Set flex container children to wrap if needed</td></tr>
    <tr><td class="d-code">d-justify-start|end|center|space-between|space-around|space-evenly</td><td>Set justify-content property value of flex container</td></tr>
    <tr><td class="d-code">d-justify-items-start|end|center|auto|stretch|left|right</td><td>Set justify-items</td></tr>
    <tr><td class="d-code">d-justify-self-start|end|center|auto|normal|stretch|left|right|baseline|safe-center</td><td>Set justify-self on child of flex container</td></tr>
    <tr><td class="d-code">d-align-content-start|end|center|space-between|space-around|stretch</td><td>Set align-content of flex children</td></tr>
    <tr><td class="d-code">d-align-items-start|end|center|stretch|baseline|safe-center</td><td>Set align-items</td></tr>
    <tr><td class="d-code">d-align-self-start|end|center|baseline|stretch</td><td>Set align-self of flex child</td></tr>
  </BaseTable>
  <p class="d-text">
    Gap classes control spacing between child elements, and padding classes control spacing around the element itself:
  </p>
  <BaseTable>
    <tr><th>Class</th><th>Description</th></tr>
    <tr><td class="d-code">d-gap-N</td><td>Set spacing between child elements, where N is one of 0|1|2|3|4|5|6|8|10|12|16</td></tr>
    <tr><td class="d-code">d-pad-N</td><td>Set padding around contents</td></tr>
    <tr><td class="d-code">d-pad-xN<br>d-pad-yN</td><td>Set horizontal/vertical padding</td></tr>
    <tr><td class="d-code">d-pad-lN<br>d-pad-rN<br>d-pad-tN<br>d-pad-bN</td><td>Set left/right/top/bottom padding</td></tr>
  </BaseTable>
</template>
<script setup lang="ts">
import BaseTable from '../BaseTable.vue'

</script>
<style>
.d-code{font-family:monospace}
</style>
