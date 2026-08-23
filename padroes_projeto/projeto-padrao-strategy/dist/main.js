"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pedido_1 = require("./models/Pedido");
const ProcessadorPedido_1 = require("./ProcessadorPedido");
const implementations_1 = require("./strategies/implementations");
// Criando pedidos de teste
const pedidoA = new Pedido_1.Pedido("PED-101", [
    { nome: "Mouse Gamer", preco: 150.00, quantidade: 1 },
    { nome: "Teclado Mecânico", preco: 350.00, quantidade: 1 }
], "cliente@email.com");
const pedidoB = new Pedido_1.Pedido("PED-102", [
    { nome: "Caneta Personalizada", preco: 10.00, quantidade: 10 }
], "+5554999998888");
const processador = new ProcessadorPedido_1.ProcessadorPedido(new implementations_1.DescontoClienteVIPStrategy(), new implementations_1.PagamentoPixStrategy(), new implementations_1.NotificacaoEmailStrategy());
// Execução 1: VIP + Pix + E-mail
processador.finalizarPedido(pedidoA);
// Execução 2: Mudança Dinâmica -> Quantidade + Cartão + WhatsApp
processador.setDescontoStrategy(new implementations_1.DescontoPorQuantidadeStrategy());
processador.setPagamentoStrategy(new implementations_1.PagamentoCartaoCreditoStrategy());
processador.setNotificacaoStrategy(new implementations_1.NotificacaoWhatsAppStrategy());
processador.finalizarPedido(pedidoB);
// Execução 3: Mudança Dinâmica -> Cupom Fixo + Boleto + SMS
processador.setDescontoStrategy(new implementations_1.DescontoCupomFixoStrategy(20));
processador.setPagamentoStrategy(new implementations_1.PagamentoBoletoStrategy());
processador.setNotificacaoStrategy(new implementations_1.NotificacaoSMSStrategy());
processador.finalizarPedido(pedidoA);
