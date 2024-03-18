<template>
  <p>The Textarea component is used for multiline text input.</p>
  <LiveExample
    template='<Textarea v-model="value" placeholder="Enter value" />'
    hidden-setup="const value = ref(''); return { value }"
    :components="{ Textarea }"
  />
  <br />
  <p>The Textarea component automatically expands to fit contents.</p>
  <LiveExample
    template='<Textarea v-model="value" />'
    :components="{ Textarea }"
    :hidden-setup="`return { value: ref(\`${longText}\`) }`"
  />
  <br />
  <p>The props <code>min-rows</code> and <code>max-rows</code> props can be used to adjust the number of rows shown.</p>
  <LiveExample
    template='<Textarea v-model="value" :min-rows="1" :max-rows="5" />'
    :components="{ Textarea }"
    :hidden-setup="`return { value: ref(\`${longText}\`) }`"
  />
</template>
<script setup lang="ts">
import { Textarea } from '@/components'
import { LiveExample } from '@/docs/components'

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nulla nec purus feugiat, vestibulum mi nec, aliquet nunc nulla facilisi.
Nullam ac erat ante.
Nunc et varius metus.
Nulla facilisi.
Nullam ac erat ante.
Nunc et varius metus.`
</script>
