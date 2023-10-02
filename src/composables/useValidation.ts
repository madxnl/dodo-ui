import { Ref, reactive, watch } from 'vue'

type ValidatorReturn = string | null | undefined | boolean
type CustomValidator<V> = (value: V, fieldLabel: string) => Promise<ValidatorReturn> | ValidatorReturn

export class ValidationError extends Error {
  name = 'ValidationError'
  public constructor(public field: string, message?: string) {
    super(message)
  }
}

type FormData = Record<string, unknown>

export type ValidateRules<T extends FormData> = {
  [K in keyof T]: {
    value: Ref<T[K]>
    name?: string
    required?: boolean
    minLen?: number
    maxLen?: number
    isEmail?: boolean
    validators?: CustomValidator<T[K]>[]
  }
}

export function useValidation<T extends FormData>(initialRules: ValidateRules<T>) {
  const rules = reactive(initialRules)
  const errors: Partial<Record<keyof T, string>> = reactive({})

  // Validate previously invalid fields on change
  watch(rules, () => validateInvalidFields())

  async function validateField(field: keyof T) {
    /** Update field error message and return true if valid */
    const rule = rules[field]
    if (rule) {
      const value = rule.value
      const message = await getFieldMessage(field, value)
      if (message) {
        errors[field] = String(message)
        return false
      }
    }
    delete errors[field]
    return true
  }

  async function validate() {
    /** Update all field error messages and return true if valid */
    const results = await Promise.all(Object.keys(rules).map((k) => validateField(k)))
    return results.every((r) => r)
  }

  async function validateInvalidFields() {
    /** Update errors for fields that were invalid and return true if valid */
    const results = await Promise.all(Object.keys(errors).map((k) => validateField(k)))
    return results.every((r) => r)
  }

  function clearErrors() {
    for (const field in errors) {
      delete errors[field]
    }
  }

  async function getFieldMessage<V extends keyof T>(key: V, value: T[V]) {
    const rule = rules[key]
    const name = rule.name ?? readableNameFromKey(key)
    if (rule.required && !value) {
      return `${name} is required`
    }
    if (rule.isEmail && value != null) {
      if (typeof value !== 'string' || !value.includes('@')) {
        return `${name} is not valid`
      }
    }
    if (typeof value === 'string') {
      if (rule.minLen != null && value.length < rule.minLen) {
        return `${name} must be at least ${rule.minLen} characters`
      }
      if (rule.maxLen != null && value.length > rule.maxLen) {
        return `${name} must be less than ${rule.maxLen} characters`
      }
    }
    if (rule.validators) {
      for (const validator of rule.validators) {
        const err = await validator(value, name)
        if (err) return err
      }
    }
  }

  function readableNameFromKey(key: keyof T) {
    return key
      .toString()
      .replace(/_/g, ' ')
      .replace(/^./, (match) => match.toUpperCase())
      .replace(/[a-z][A-Z]/g, (match) => `${match[0]} ${match[1]}`)
  }

  return { errors, rules, validate, validateField, clearErrors }
}
