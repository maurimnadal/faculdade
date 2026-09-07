"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificadorDecorator = void 0;
/**
 * Decorator abstrato.
 *
 * Implementa a mesma interface do componente que envolve (Notificador),
 * mantém uma referência a esse componente e repassa a chamada para ele.
 * Os decorators concretos herdam esta classe e adicionam comportamento
 * antes e/ou depois de chamar super.enviar().
 */
class NotificadorDecorator {
    constructor(notificador) {
        this.notificador = notificador;
    }
    enviar(mensagem) {
        this.notificador.enviar(mensagem);
    }
}
exports.NotificadorDecorator = NotificadorDecorator;
