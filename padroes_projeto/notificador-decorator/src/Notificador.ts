/**
 * Interface base do sistema de notificações.
 * Tanto o componente concreto (NotificadorEmail) quanto todos os
 * decorators implementam este mesmo contrato, permitindo que sejam
 * usados de forma intercambiável (transparência do Decorator).
 */
export interface Notificador {
  enviar(mensagem: string): void;
}
