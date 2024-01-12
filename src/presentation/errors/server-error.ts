export class ServerError extends Error {
  constructor (stack: string) {
    super('Internar Server Error')
    this.name = 'ServerError'
    this.stack = stack
  }
}
