import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { nextTick } from 'vue'
import Select from './SelectOld.vue'

const _options = [...Array(20)].map((_, i) => ({ label: 'Option ' + i, value: i }))

const getByText = (wrapper: any, text: string) => wrapper.findAll('*').find((e: any) => e.text().trim() === text)!

test('select a value', async () => {
  const wrapper = mount(Select, {
    props: { options: _options, modelValue: _options[0]!.value },
    global: { stubs: { teleport: true } }
  })
  // console.log('html:', wrapper.html())
  await getByText(wrapper, _options[0]!.label).trigger('click')
  await getByText(wrapper, _options[1]!.label).trigger('click')
  expect(wrapper.emitted()).toMatchObject({ 'update:modelValue': [[_options[1]!.value]] })
})

test('select can be disabled', async () => {
  const wrapper = mount(Select, {
    props: { options: _options, modelValue: _options[0]!.value, disabled: true },
    global: { stubs: { teleport: true } }
  })
  await getByText(wrapper, _options[0]!.label).trigger('click')
  await nextTick()
  expect(getByText(wrapper, _options[1]!.label)).toBeFalsy()
})

test('search filters options', async () => {
  const wrapper = mount(Select, {
    props: { options: _options, modelValue: _options[0]!.value },
    global: { stubs: { teleport: true } },
    attachTo: document.body
  })
  await getByText(wrapper, _options[0]!.label).trigger('click')
  await nextTick()
  const search = wrapper.get('input')
  expect(search.element).toBe(document.activeElement)
  await search.setValue(_options[2]!.label)
  await nextTick()
  expect(getByText(wrapper, _options[1]!.label)).toBeFalsy()
  expect(getByText(wrapper, _options[2]!.label)).toBeTruthy()
})

// test('Search input visible if many options', async () => {
//   const wrapper = mount(Select, {
//     props: { options: _options.slice(0, 5), modelValue: _options[0]!.value },
//     global: { stubs: { teleport: true } },
//   })
//   await getByText(wrapper, _options[0]!.label).trigger('click')
//   await nextTick()
//   expect(wrapper.find('[type=search]').isVisible()).toBeFalsy()
//   wrapper.setProps({ options: _options })
//   await nextTick()
//   expect(wrapper.get('[type=search]').isVisible()).toBeTruthy()
// })

test('search input visible after character key press', async () => {
  const wrapper = mount(Select, {
    props: { options: _options.slice(0, 5), modelValue: _options[0]!.value },
    global: { stubs: { teleport: true } },
    attachTo: document.body
  })
  await getByText(wrapper, _options[0]!.label).trigger('click')
  await nextTick()
  expect(wrapper.find('[type=search]').isVisible()).toBeFalsy()
  await wrapper.get('input').setValue('foo')
  await nextTick()
  expect(wrapper.get('[type=search]').isVisible()).toBeTruthy()
})

// test('Select using keyboard', async () => {
//   const wrapper = mount(Select, {
//     props: { options: _options, modelValue: _options[0].value },
//   })
//   const select = await getByText(wrapper, _options[0].label)
//   await fireEvent.keyDown(select, { key: 'ArrowDown' })
//   await fireEvent.keyDown(select, { key: 'ArrowDown' })
//   await fireEvent.keyDown(select, { key: 'Enter' })
//   expect(emitted()).toMatchObject({ 'update:modelValue': [[_options[1].value]] })
// })

// test('Search by typing and press enter', async () => {
//   const wrapper = mount(Select, {
//     props: { options: _options, modelValue: _options[0].value },
//   })
//   const input = await findByRole('textbox')
//   await getByText(wrapper, _options[0].label)
//   await fireEvent.update(input, _options[1].label)
//   await fireEvent.keyDown(input, { key: 'Enter' })
//   expect(emitted()).toMatchObject({ 'update:modelValue': [[_options[1].value]] })
// })

// test('Custom option html using slot', async () => {
//   const wrapper = mount(Select, {
//     props: { options: _options, modelValue: _options[0].value },
//     slots: { default: option => `Custom ${option.value}` },
//   })
//   await getByText(wrapper, 'Custom 1')
//   await getByText(wrapper, 'Custom 2')
//   expect(emitted()).toMatchObject({ 'update:modelValue': [[_options[1].value]] })
// })

// test('Can clear selection if multiple selected', async () => {
//   const wrapper = mount(Select, {
//     props: { options: _options, modelValue: [_options[0].value], multiple: true },
//   })
//   await getByText(wrapper, _options[0].label)
//   await getByText(wrapper, 'Clear selection')
//   expect(emitted()).toMatchObject({ 'update:modelValue': [[[]]] })
// })
