import ButtonExample, { source as ButtonExample1Text } from './ButtonExample.vue'
import IconExample, { source as IconExampleText } from './IconExample.vue'
import { docs as IconDoc } from '../components/Icon.vue'
import { docs as TextDoc } from '../components/Text.vue'
import TextExample, { source as TextExampleText } from './TextExample.vue'
import DocsInstall from './DocsInstall.vue'
import { docs as ButtonDoc } from '../components/Button.vue'
import { docs as SelectButtonsDoc } from '../components/SelectButtons.vue'
import SelectButtonsExample, { source as SelectButtonsExampleText } from './SelectButtonsExample.vue'

export const chapters = [{
  label: 'Installation',
  href: '#Installation',
  component: DocsInstall,
}, {
  label: ButtonDoc.displayName,
  href: '#' + ButtonDoc.displayName,
  doc: ButtonDoc,
  examples: ButtonExample,
  examplesText: ButtonExample1Text,
}, {
  label: TextDoc.displayName,
  href: '#' + TextDoc.displayName,
  doc: TextDoc,
  examples: TextExample,
  examplesText: TextExampleText,
}, {
  label: IconDoc.displayName,
  href: '#' + IconDoc.displayName,
  doc: IconDoc,
  examples: IconExample,
  examplesText: IconExampleText,
}, {
  label: SelectButtonsDoc.displayName,
  href: '#' + SelectButtonsDoc.displayName,
  doc: SelectButtonsDoc,
  examples: SelectButtonsExample,
  examplesText: SelectButtonsExampleText,
// }, {
//   label: FlexDoc.displayName,
//   href: '#' + FlexDoc.displayName,
//   doc: FlexDoc
// }, {
//   label: GridResponsiveDoc.displayName,
//   href: '#' + GridResponsiveDoc.displayName,
//   doc: GridResponsiveDoc
// }, {
//   label: DialogDoc.displayName,
//   href: '#' + DialogDoc.displayName,
//   doc: DialogDoc
// }, {
//   label: CrashDialogDoc.displayName,
//   href: '#' + CrashDialogDoc.displayName,
//   doc: CrashDialogDoc
}]
