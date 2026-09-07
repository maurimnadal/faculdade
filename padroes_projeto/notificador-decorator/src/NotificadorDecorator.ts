import { Notificador } from './Notificador';

/**
 * Decorator abstrato.
 *
 * Implementa a mesma interface do componente que envolve (Notificador),
 * mantém uma referência a esse componente e repassa a chamada para ele.
 * Os decorators concretos herdam esta classe e adicionam comportamento
 * antes e/ou depois de chamar super.enviar().
 */
export abstract class NotificadorDecorator implements Notificador {
  protected notificador: Notificador;

  constructor(notificador: Notificador) {
    this.notificador = notificador;
  }

  enviar(mensagem: string): void {
    this.notificador.enviar(mensagem);
  }
}
