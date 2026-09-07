import { Notificador } from './Notificador';

/**
 * Componente concreto.
 * Implementa o comportamento "base" de envio (E-mail).
 *
 * IMPORTANTE: esta classe NUNCA deve ser alterada para suportar novos
 * canais (SMS, WhatsApp, Log). Isso é o que garante o cumprimento do
 * Princípio Open/Closed: a classe está fechada para modificação, mas
 * o comportamento do sistema é aberto para extensão via decorators.
 */
export class NotificadorEmail implements Notificador {
  enviar(mensagem: string): void {
    console.log(`[E-mail] Enviando: ${mensagem}`);
  }
}
