export class ServerError extends Error {
  constructor () {
    super('Internar Server Error')
    this.name = 'ServerError'
  }
}
