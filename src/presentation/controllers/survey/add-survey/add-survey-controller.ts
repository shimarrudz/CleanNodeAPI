import { type Controller, type HttpRequest, type HttpResponse } from '../../../protocols'
import { type Validation } from '../../../protocols/validation'

export class AddSurveyController implements Controller {
  constructor (private readonly validation: Validation) {
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    this.validation.validate(httpRequest.body)
    return await new Promise(resolve => { resolve(null) })
  }
}
