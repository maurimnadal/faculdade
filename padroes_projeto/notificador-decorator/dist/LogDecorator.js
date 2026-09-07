"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogDecorator = void 0;
const NotificadorDecorator_1 = require("./NotificadorDecorator");
/**
 * Decorator concreto que registra em log o envio da notificação,
 * independentemente de quantos/quais outros canais estejam envolvidos.
 */
class LogDecorator extends NotificadorDecorator_1.NotificadorDecorator {
    enviar(mensagem) {
        super.enviar(mensagem);
        const dataHora = new Date().toLocaleString('pt-BR');
        console.log(`[LOG] Notificação registrada no sistema às ${dataHora}.`);
    }
}
exports.LogDecorator = LogDecorator;
