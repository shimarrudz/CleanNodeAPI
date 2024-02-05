import { MissingParamError } from '../../errors'
import { type Validation } from '../../protocols/validation'
export class RequiredFieldsValidation implements Validation {
  constructor (private readonly fieldName: string) {
    this.fieldName = fieldName
  }

  validate (input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
