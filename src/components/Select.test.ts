import { mount, VueWrapper } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { nextTick } from 'vue'
import { Select } from '.'

const _options = [...Array(20)].map((_, i) => ({ text: 'Option ' + i, value: i }))

const getByText = (wrapper: VueWrapper, text: string) => wrapper.findAll('*').find(e => e.text().trim() === text)!

test('Select a value', async () => {
  const wrapper = mount(Select, {
    propsData: { options: _options, modelValue: _options[0].value },
    global: { stubs: { teleport: true } },
  })
  await getByText(wrapper, _options[0].text).trigger('click')
  await getByText(wrapper, _options[1].text).trigger('click')
  expect(wrapper.emitted()).toMatchObject({ 'update:modelValue': [[_options[1].value]] })
  expect(wrapper.html()).toMatchSnapshot()
})

test('Select can be disabled', async () => {
  const wrapper = mount(Select, {
    propsData: { options: _options, modelValue: _options[0].value, disabled: true },
    global: { stubs: { teleport: true } },
  })
  await getByText(wrapper, _options[0].text).trigger('click')
  await nextTick()
  expect(getByText(wrapper, _options[1].text)).toBeFalsy()
  expect(wrapper.html()).toMatchSnapshot()
})

test('Search filters options', async () => {
  const wrapper = mount(Select, {
    propsData: { options: _options, modelValue: _options[0].value },
    global: { stubs: { teleport: true } },
    attachTo: document.body,
  })
  await getByText(wrapper, _options[0].text).trigger('click')
  await nextTick()
  const search = wrapper.get('input')
  expect(search.element).toBe(document.activeElement)
  search.setValue(_options[2].text)
  await nextTick()
  expect(getByText(wrapper, _options[1].text)).toBeFalsy()
  expect(getByText(wrapper, _options[2].text)).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

test('Search input visible if many options', async () => {
  const wrapper = mount(Select, {
    propsData: { options: _options.slice(0, 5), modelValue: _options[0].value },
    global: { stubs: { teleport: true } },
  })
  await getByText(wrapper, _options[0].text).trigger('click')
  await nextTick()
  expect(wrapper.find('[type=search]').exists()).toBeFalsy()
  wrapper.setProps({ options: _options })
  await nextTick()
  expect(wrapper.get('[type=search]').isVisible()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

test.only('Search input visible after character key press', async () => {
  const wrapper = mount(Select, {
    propsData: { options: _options.slice(0, 5), modelValue: _options[0].value },
    global: { stubs: { teleport: true } },
    attachTo: document.body,
  })
  await getByText(wrapper, _options[0].text).trigger('click')
  await nextTick()
  expect(wrapper.find('[type=search]').exists()).toBeFalsy()
  const input = document.activeElement as HTMLInputElement
  wrapper.get('input').setValue('foo')
  await nextTick()
  expect(wrapper.get('[type=search]').isVisible()).toBeTruthy()
  expect(wrapper.html()).toMatchSnapshot()
})

// test('Select using keyboard', async () => {
//   const wrapper = mount(Select, {
//     propsData: { options: _options, modelValue: _options[0].value },
//   })
//   const select = await getByText(wrapper, _options[0].text)
//   await fireEvent.keyDown(select, { key: 'ArrowDown' })
//   await fireEvent.keyDown(select, { key: 'ArrowDown' })
//   await fireEvent.keyDown(select, { key: 'Enter' })
//   expect(emitted()).toMatchObject({ 'update:modelValue': [[_options[1].value]] })
//   expect(wrapper.html()).toMatchSnapshot()
// })

// test('Search by typing and press enter', async () => {
//   const wrapper = mount(Select, {
//     propsData: { options: _options, modelValue: _options[0].value },
//   })
//   const input = await findByRole('textbox')
//   await getByText(wrapper, _options[0].text)
//   await fireEvent.update(input, _options[1].text)
//   await fireEvent.keyDown(input, { key: 'Enter' })
//   expect(emitted()).toMatchObject({ 'update:modelValue': [[_options[1].value]] })
//   expect(wrapper.html()).toMatchSnapshot()
// })

// test('Custom option html using slot', async () => {
//   const wrapper = mount(Select, {
//     propsData: { options: _options, modelValue: _options[0].value },
//     slots: { default: option => `Custom ${option.value}` },
//   })
//   await getByText(wrapper, 'Custom 1')
//   await getByText(wrapper, 'Custom 2')
//   expect(emitted()).toMatchObject({ 'update:modelValue': [[_options[1].value]] })
//   expect(wrapper.html()).toMatchSnapshot()
// })

// test('Can clear selection if multiple selected', async () => {
//   const wrapper = mount(Select, {
//     propsData: { options: _options, modelValue: [_options[0].value], multiple: true },
//   })
//   await getByText(wrapper, _options[0].text)
//   await getByText(wrapper, 'Clear selection')
//   expect(emitted()).toMatchObject({ 'update:modelValue': [[[]]] })
//   expect(wrapper.html()).toMatchSnapshot()
// })