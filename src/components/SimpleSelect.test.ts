import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import DropdownSelect from './SimpleSelect.vue'

test('select a value', async () => {
  const modelValue = ''
  const onChange = vi.fn()
  const options = [
    { label: 'foo', value: 'foo' },
    { label: 'bar', value: 'bar' }
  ]

  const wrapper = mount(DropdownSelect, { props: { modelValue, 'onUpdate:modelValue': onChange, options } })

  const select = wrapper.find('select')!
  await select.setValue('foo')

  expect(onChange).toHaveBeenCalledWith('foo')
})
