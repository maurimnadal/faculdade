"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSDecorator = void 0;
const NotificadorDecorator_1 = require("./NotificadorDecorator");
/**
 * Decorator concreto que adiciona o envio por SMS.
 * Primeiro repassa a chamada para o notificador envelopado
 * (super.enviar) e depois executa seu próprio comportamento.
 */
class SMSDecorator extends NotificadorDecorator_1.NotificadorDecorator {
    enviar(mensagem) {
        super.enviar(mensagem);
        console.log(`[SMS] Enviando: ${mensagem}`);
    }
}
exports.SMSDecorator = SMSDecorator;
