import { expect, test } from 'vitest'
import { ref } from 'vue'
import { useNonEmptyStr } from './useNonEmpty'

test('basic usage', async () => {
  const nonEmpty = useNonEmptyStr('')
  expect(nonEmpty.value).toBe(null)
  nonEmpty.value = 'test'
  expect(nonEmpty.value).toBe('test')
})

test('source ref', async () => {
  const source = ref('')
  const nonEmpty = useNonEmptyStr(source)
  expect(nonEmpty.value).toBe(null)
  source.value = 'test'
  expect(nonEmpty.value).toBe('test')
})
