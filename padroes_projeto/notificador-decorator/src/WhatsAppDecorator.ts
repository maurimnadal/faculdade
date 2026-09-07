import { NotificadorDecorator } from './NotificadorDecorator';

/**
 * Decorator concreto que adiciona o envio por WhatsApp.
 */
export class WhatsAppDecorator extends NotificadorDecorator {
  enviar(mensagem: string): void {
    super.enviar(mensagem);
    console.log(`[WhatsApp] Enviando: ${mensagem}`);
  }
}
