<template>
  <Column gap="1">
    <SyntaxHighlight lang="ts" code="class ValidationError extends Error" />
    <SyntaxHighlight lang="ts" code="type FormData = Record<string, unknown>" />
    <SyntaxHighlight lang="ts" code="export type ValidateRules<T extends FormData> = {...}" />
    <SyntaxHighlight
      lang="ts"
      code="export function useValidation<T extends FormData>(initialRules: ValidateRules<T>)"
    />
  </Column>
  <blockquote>
    <SyntaxHighlight lang="ts" :code="example1" />
  </blockquote>
</template>
<script setup lang="ts">
import { Column } from '@/components'
import { SyntaxHighlight } from '@/docs/components'

const example1 = `const rules = reactive({
  name: { value: ref(''), required: true },
  email: { value: ref(''), required: true, isEmail: true },
  password: { value: ref(''), required: true, minLen: 8 },
})

const { errors, validate, validateField, clearErrors } = useValidation(rules)

// Validate all fields
const isValid = await validate()
console.log(isValid) // true if all fields are valid

// Validate a specific field
const isNameValid = await validateField('name')
console.log(isNameValid) // true if the name field is valid

// Clear all errors
clearErrors()
console.log(errors) // {}

// Custom validator example
const customValidator = async (value: string, fieldLabel: string) => {
  if (value === 'admin') {
    return \`\${fieldLabel} cannot be "admin"\`
  }
}

rules.name.validators = [customValidator]

const isNameValidWithCustomValidator = await validateField('name')
console.log(isNameValidWithCustomValidator) // false
console.log(errors.name) // 'Name cannot be "admin"'
`
</script>
