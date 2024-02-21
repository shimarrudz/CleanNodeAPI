import { type HttpResponse, type HttpRequest, type Controller, type AddAccount } from './signup-controller-protocols'
import { type Validation } from '../../protocols/validation'
import { badRequest, serverError, ok } from '../../helpers/http/http-helper'
import { type Authentication } from '../login/login-controller-protocols'

export class SignUpController implements Controller {
  constructor (private readonly addAccount: AddAccount, private readonly validation: Validation, private readonly authentication: Authentication) {
    this.addAccount = addAccount
    this.validation = validation
    this.authentication = authentication
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, email, password } = httpRequest.body
      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      const accessToken = await this.authentication.auth({
        email, password
      })
      account.name = 'TESTE'
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
