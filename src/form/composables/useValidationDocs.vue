<template>
  <Column gap="1">
    <SyntaxHighlight
      lang="ts"
      code="export function useValidation<T extends FormData>(initialRules: ValidateRules<T>)"
    />
    <p>
      A composable function that takes a <code>ValidateRules</code> object and returns an object with the following
      properties:
    </p>
    <ul>
      <li><code>errors</code>: a <code>Ref</code> object containing the validation errors.</li>
      <li>
        <code>validateAll</code>: a function that validates all fields and returns a <code>Promise</code> that resolves
        to <code>true</code> if all fields are valid, or rejects with an error object if any field is invalid.
      </li>
      <li>
        <code>validateField</code>: a function that validates a specific field and returns a <code>Promise</code> that
        resolves to <code>true</code> if the field is valid, or rejects with an error object if the field is invalid.
      </li>
      <li><code>clearErrors</code>: a function that clears all errors.</li>
    </ul>
  </Column>
  <blockquote>
    <SyntaxHighlight lang="ts" :code="example2" />
  </blockquote>
</template>
<script setup lang="ts">
import { SyntaxHighlight } from '@/docs'
import { Column } from '@/layout'

const example2 = `const rules = reactive({
  name: { value: ref(''), required: true },
  email: { value: ref(''), required: true, isEmail: true },
  password: { value: ref(''), required: true, minLen: 8 },
})

const { errors, validateAll, validateField, clearErrors } = useValidation(rules)

// Validate all fields
await validateAll()

// Validate a specific field
try {
  await validateField('email')
} catch (error) {
  console.error(error)
}

// Clear all errors
clearErrors()
`
</script>
