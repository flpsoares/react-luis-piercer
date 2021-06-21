import { TypedEmitter } from 'tiny-typed-emitter'

export class ModalEvents extends TypedEmitter<{
  title: (title: string) => void
}> {}

export default new ModalEvents()
