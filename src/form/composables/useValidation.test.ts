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

  expect(await validateField('name')).toBe(false)
  expect(errors).toEqual({ name: 'Name must be at least 3 characters' })
  expect(await validateField('email')).toBe(false)
  expect(errors).toContain({ email: 'Email is required' })
  expect(await validateField('count')).toBe(false)
  expect(errors).toContain({ count: 'Count must be at least 2' })

  Object.assign(data, { name: 'John', email: 'john', count: 2 })
  await validateField('name')
  expect(await validateField('email')).toBe(false)
  await validateField('count')
  expect(errors).toEqual({ email: 'Email is not valid' })
})

test('validate', async () => {
  Object.assign(data, { name: null as string | null, email: '' })

  const { errors, validate } = useValidation({
    name: { value: name, minLen: 3, maxLen: 10 },
    email: { value: email, required: true, isEmail: true },
  })

  expect(await validate()).toBe(false)
  expect(errors).toEqual({ email: 'Email is required' })

  data.name = 'John'
  data.email = 'email@test.com'
  expect(await validate()).toBe(true)
  expect(errors).toEqual({})
})

test('Watches value changes', async () => {
  Object.assign(data, { name: '', email: '' })

  const { errors, validate } = useValidation({
    name: { value: name, minLen: 3, maxLen: 10 },
    email: { value: email, required: true, isEmail: true },
  })

  expect(await validate()).toBe(false)
  expect(errors).toEqual({ name: 'Name must be at least 3 characters', email: 'Email is required' })

  data.name = 'John'
  data.email = 'email@test.com'
  await nextTick()
  expect(errors).toEqual({})
})

test('Watches config changes', async () => {
  Object.assign(data, { name: '', email: '' })

  const { errors, validate, rules } = useValidation({
    name: { value: name, minLen: 3, maxLen: 10 },
    email: { value: email, required: true, isEmail: true },
  })

  expect(await validate()).toBe(false)
  expect(errors).toEqual({ name: 'Name must be at least 3 characters', email: 'Email is required' })

  rules.email.required = false

  expect(await validate()).toBe(false)
  expect(errors).toEqual({ name: 'Name must be at least 3 characters', email: 'Email is not valid' })
})
