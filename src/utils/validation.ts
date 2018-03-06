import { keyValuePairs } from "./object-utils";

export type ValidationConfig<Subject, ValidationParameters> =
  {
    config?: ValidationParameters
  } &
  (
    {
      check: (value: Subject) => boolean
      error: string
    } |
    {
      check: (value: Subject) => boolean
      error: (value: Subject) => string
    } | {
      config: ValidationParameters
      check: (value: Subject, config: ValidationParameters) => boolean
      error: (value: Subject) => string
    } | {
      config: ValidationParameters
      check: (value: Subject) => boolean
      error: (value: Subject, config: ValidationParameters) => string
    } | {
      config: ValidationParameters
      check: (value: Subject, config: ValidationParameters) => boolean
      error: (value: Subject, config: ValidationParameters) => string
    }
  )

export function validate<Subject, ValidationParameters>(value: Subject, params: ValidationConfig<Subject, ValidationParameters>): string | null {
  if ((params.check as any)(value, params.config)) {
    return null
  } else {
    if (typeof params.error === 'function') {
      return (params.error as any)(value, params.config)
    } else {
      return params.error
    }
  }
}

export type ObjectValidationConfig<Subject> = {
  [key in keyof Subject]: ValidationConfig<Subject[key], any> | null
}

export interface ObjectFieldValidationError<Subject> {
  field?: keyof Subject,
  message: string
}

export type ObjectValidationResult<Subject> = {
  valid: boolean,
  errors: ObjectFieldValidationError<Subject>[]
}

export function validateObject<Subject>(subject: Subject, validationConfig: ObjectValidationConfig<Subject>): ObjectValidationResult<Subject> {
  return keyValuePairs(validationConfig)
    .reduce(
      (result, { key, value: config }) => {
        const value = subject[key]

        if (config != null) {
          const fieldError = validate(value, config as any)
          if (fieldError != null) {
            return {
              valid: false,
              errors: result.errors.concat({
                field: key,
                message: fieldError
              })
            }
          }
        }

        return result
      },
      {
        valid: true,
        errors: [] as ObjectFieldValidationError<Subject>[],
      }
    )
}