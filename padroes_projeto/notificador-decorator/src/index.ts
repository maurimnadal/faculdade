import { Notificador } from './Notificador';
import { NotificadorEmail } from './NotificadorEmail';
import { SMSDecorator } from './SMSDecorator';
import { WhatsAppDecorator } from './WhatsAppDecorator';
import { LogDecorator } from './LogDecorator';

console.log('========================================');
console.log('TESTE BÁSICO: Apenas E-mail');
console.log('========================================');
const notificadorBasico: Notificador = new NotificadorEmail();
notificadorBasico.enviar('Seu pedido #1234 foi confirmado.');

console.log('\n========================================');
console.log('CENÁRIO A: E-mail + SMS');
console.log('========================================');
// Composição dinâmica: SMSDecorator envelopa um NotificadorEmail
const notificadorA: Notificador = new SMSDecorator(new NotificadorEmail());
notificadorA.enviar('Sua fatura vence amanhã.');

console.log('\n========================================');
console.log('CENÁRIO B: E-mail + WhatsApp + SMS + Log');
console.log('========================================');
// Composição dinâmica em cadeia:
// LogDecorator -> SMSDecorator -> WhatsAppDecorator -> NotificadorEmail
const notificadorB: Notificador = new LogDecorator(
  new SMSDecorator(
    new WhatsAppDecorator(
      new NotificadorEmail()
    )
  )
);
notificadorB.enviar('Sua entrega está a caminho.');
