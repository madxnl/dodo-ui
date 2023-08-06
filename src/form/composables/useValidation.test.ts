import { expect, test } from 'vitest'
import { nextTick, reactive, ref } from 'vue'
import { useValidation } from '.'

const customMinCount = (min: number) => (x: number, field: string) => x < min && `${field} must be at least ${min}`

const email = ref<string | null>('')
const name = ref<string | null>('')
const count = ref(0)
const data = reactive({ email, name, count })

test('validateField', async () => {
  Object.assign(data, { name: '', email: '', count: 1 })

  const { errors, validateField } = useValidation({
    name: { value: name, minLen: 3, maxLen: 10 },
    email: { value: email, required: true, isEmail: true },
    count: { value: count, required: true, validators: [customMinCount(2)] },
  })

  expect(errors).toEqual({})

  await expect(validateField('name')).rejects.toThrow()
  expect(errors).toEqual({ name: 'Name must be at least 3 characters long' })
  await expect(validateField('email')).rejects.toThrow()
  expect(errors).toContain({ email: 'Email is required' })
  await expect(validateField('count')).rejects.toThrow()
  expect(errors).toContain({ count: 'Count must be at least 2' })

  Object.assign(data, { name: 'John', email: 'john', count: 2 })
  await validateField('name')
  await expect(validateField('email')).rejects.toThrow()
  await validateField('count')
  expect(errors).toEqual({ email: 'Email is not valid' })
})

test('validateAll', async () => {
  Object.assign(data, { name: null as string | null, email: '' })

  const { errors, validateAll } = useValidation({
    name: { value: name, minLen: 3, maxLen: 10 },
    email: { value: email, required: true, isEmail: true },
  })

  await expect(validateAll()).rejects.toThrow()
  expect(errors).toEqual({ email: 'Email is required' })

  data.name = 'John'
  data.email = 'email@test.com'
  await validateAll()
  expect(errors).toEqual({})
})

test('Watches value changes', async () => {
  Object.assign(data, { name: '', email: '' })

  const { errors, validateAll } = useValidation({
    name: { value: name, minLen: 3, maxLen: 10 },
    email: { value: email, required: true, isEmail: true },
  })

  await expect(validateAll()).rejects.toThrow()
  expect(errors).toEqual({ name: 'Name must be at least 3 characters long', email: 'Email is required' })

  data.name = 'John'
  data.email = 'email@test.com'
  await nextTick()
  expect(errors).toEqual({})
})

test('Watches config changes', async () => {
  Object.assign(data, { name: '', email: '' })

  const { errors, validateAll, rules } = useValidation({
    name: { value: name, minLen: 3, maxLen: 10 },
    email: { value: email, required: true, isEmail: true },
  })

  await expect(validateAll()).rejects.toThrow()
  expect(errors).toEqual({ name: 'Name must be at least 3 characters long', email: 'Email is required' })

  rules.email.required = false

  await expect(validateAll()).rejects.toThrow()
  expect(errors).toEqual({ name: 'Name must be at least 3 characters long', email: 'Email is not valid' })
})
