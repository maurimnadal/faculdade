import { NotificadorDecorator } from './NotificadorDecorator';

/**
 * Decorator concreto que adiciona o envio por SMS.
 * Primeiro repassa a chamada para o notificador envelopado
 * (super.enviar) e depois executa seu próprio comportamento.
 */
export class SMSDecorator extends NotificadorDecorator {
  enviar(mensagem: string): void {
    super.enviar(mensagem);
    console.log(`[SMS] Enviando: ${mensagem}`);
  }
}
