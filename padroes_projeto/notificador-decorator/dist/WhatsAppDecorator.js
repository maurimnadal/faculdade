"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsAppDecorator = void 0;
const NotificadorDecorator_1 = require("./NotificadorDecorator");
/**
 * Decorator concreto que adiciona o envio por WhatsApp.
 */
class WhatsAppDecorator extends NotificadorDecorator_1.NotificadorDecorator {
    enviar(mensagem) {
        super.enviar(mensagem);
        console.log(`[WhatsApp] Enviando: ${mensagem}`);
    }
}
exports.WhatsAppDecorator = WhatsAppDecorator;
