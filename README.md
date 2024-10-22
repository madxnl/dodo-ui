# DodoUI

[Documentation](https://madxnl.github.io/dodo-ui/)

# Changelog

## [0.39]

- removed FieldOld, SelectOld, Dialog (use Modal)
- fixes crash dialog shown behind modal

## [0.38]

- color-foreground in now color-text
- Select is deprecated (still exported as SelectOld)

## [0.37.3]

- Changed color variables, 'warn' is now 'warning' and '-rgb-' vars were removed
- Added initial support for dark mode using `useTheme`
- Changed gap and padding prop type to use descriptive sizes ('xxs' through 'xxl')
- Removed label/description props from input/textarea (use FormItem)
- Added ChoiceChips component
- Removed Input, SelectButtons, Label

## [0.36.0]

- Added new components: SimpleSelect, Form, FormItem, Modal, Textarea and updated TextInput

## [0.35.0]

- Text styles are global by default
- Use color-mix() instead of rgb to calculate colors

## [0.32.0]

- removed Text component in favour of HTML/CSS based text styling
- renamed Select option `text` field to `label`
