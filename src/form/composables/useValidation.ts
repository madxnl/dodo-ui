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

  // Validate previously invalid fields on change, without throwing
  watch(rules, () => validateInvalidFields(false))

  async function validateField(field: keyof T, throws = true) {
    /** Update field error message and throws on validation error */
    const rule = rules[field]
    if (rule) {
      const value = rule.value
      const message = await getFieldMessage(field, value)
      if (message) {
        errors[field] = String(message)
        if (throws) throw new ValidationError(String(field), errors[field])
        return // errors[field]
      }
    }
    delete errors[field]
  }

  async function validateAll(throws = true) {
    /** Update all field error messages and throws on validation error */
    await Promise.all(Object.keys(rules).map((k) => validateField(k, throws)))
  }

  async function validateInvalidFields(throws = true) {
    /** Update errors for fields that were invalid and throws on validation error */
    await Promise.all(Object.keys(errors).map((k) => validateField(k, throws)))
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
        return `${name} must be at least ${rule.minLen} characters long`
      }
      if (rule.maxLen != null && value.length > rule.maxLen) {
        return `${name} is too long`
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

  return { errors, rules, validateAll, validateField, clearErrors }
}
