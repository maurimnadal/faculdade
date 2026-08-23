"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessadorPedido = void 0;
class ProcessadorPedido {
    constructor(descontoStrategy, pagamentoStrategy, notificacaoStrategy) {
        this.descontoStrategy = descontoStrategy;
        this.pagamentoStrategy = pagamentoStrategy;
        this.notificacaoStrategy = notificacaoStrategy;
    }
    setDescontoStrategy(strategy) {
        this.descontoStrategy = strategy;
    }
    setPagamentoStrategy(strategy) {
        this.pagamentoStrategy = strategy;
    }
    setNotificacaoStrategy(strategy) {
        this.notificacaoStrategy = strategy;
    }
    finalizarPedido(pedido) {
        console.log(`\n==================================================`);
        console.log(`INICIANDO CHECKOUT - PEDIDO ${pedido.id}`);
        console.log(`Valor Original: R$ ${pedido.valorTotal.toFixed(2)}`);
        const desconto = this.descontoStrategy.calcularDesconto(pedido);
        const valorComDesconto = pedido.valorTotal - desconto;
        console.log(`Desconto Aplicado: R$ ${desconto.toFixed(2)} -> Total Final: R$ ${valorComDesconto.toFixed(2)}`);
        const pagamentoSucesso = this.pagamentoStrategy.processarPagamento(valorComDesconto);
        if (pagamentoSucesso) {
            const msg = `Seu pedido ${pedido.id} foi pago com sucesso no valor final de R$ ${valorComDesconto.toFixed(2)}!`;
            this.notificacaoStrategy.enviarNotificacao(msg, pedido.destinatario);
        }
        console.log(`==================================================\n`);
    }
}
exports.ProcessadorPedido = ProcessadorPedido;
