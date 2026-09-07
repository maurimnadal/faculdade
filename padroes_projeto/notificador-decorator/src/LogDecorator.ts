import { NotificadorDecorator } from './NotificadorDecorator';

/**
 * Decorator concreto que registra em log o envio da notificação,
 * independentemente de quantos/quais outros canais estejam envolvidos.
 */
export class LogDecorator extends NotificadorDecorator {
  enviar(mensagem: string): void {
    super.enviar(mensagem);
    const dataHora = new Date().toLocaleString('pt-BR');
    console.log(`[LOG] Notificação registrada no sistema às ${dataHora}.`);
  }
}
