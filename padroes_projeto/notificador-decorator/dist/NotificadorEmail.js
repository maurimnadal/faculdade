"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificadorEmail = void 0;
/**
 * Componente concreto.
 * Implementa o comportamento "base" de envio (E-mail).
 *
 * IMPORTANTE: esta classe NUNCA deve ser alterada para suportar novos
 * canais (SMS, WhatsApp, Log). Isso é o que garante o cumprimento do
 * Princípio Open/Closed: a classe está fechada para modificação, mas
 * o comportamento do sistema é aberto para extensão via decorators.
 */
class NotificadorEmail {
    enviar(mensagem) {
        console.log(`[E-mail] Enviando: ${mensagem}`);
    }
}
exports.NotificadorEmail = NotificadorEmail;
