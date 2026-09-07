"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificadorEmail_1 = require("./NotificadorEmail");
const SMSDecorator_1 = require("./SMSDecorator");
const WhatsAppDecorator_1 = require("./WhatsAppDecorator");
const LogDecorator_1 = require("./LogDecorator");
console.log('========================================');
console.log('TESTE BÁSICO: Apenas E-mail');
console.log('========================================');
const notificadorBasico = new NotificadorEmail_1.NotificadorEmail();
notificadorBasico.enviar('Seu pedido #1234 foi confirmado.');
console.log('\n========================================');
console.log('CENÁRIO A: E-mail + SMS');
console.log('========================================');
// Composição dinâmica: SMSDecorator envelopa um NotificadorEmail
const notificadorA = new SMSDecorator_1.SMSDecorator(new NotificadorEmail_1.NotificadorEmail());
notificadorA.enviar('Sua fatura vence amanhã.');
console.log('\n========================================');
console.log('CENÁRIO B: E-mail + WhatsApp + SMS + Log');
console.log('========================================');
// Composição dinâmica em cadeia:
// LogDecorator -> SMSDecorator -> WhatsAppDecorator -> NotificadorEmail
const notificadorB = new LogDecorator_1.LogDecorator(new SMSDecorator_1.SMSDecorator(new WhatsAppDecorator_1.WhatsAppDecorator(new NotificadorEmail_1.NotificadorEmail())));
notificadorB.enviar('Sua entrega está a caminho.');
