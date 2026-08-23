"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacaoWhatsAppStrategy = exports.NotificacaoSMSStrategy = exports.NotificacaoEmailStrategy = exports.PagamentoBoletoStrategy = exports.PagamentoCartaoCreditoStrategy = exports.PagamentoPixStrategy = exports.DescontoCupomFixoStrategy = exports.DescontoPorQuantidadeStrategy = exports.DescontoClienteVIPStrategy = void 0;
/* ======================================================================
 * DOMÍNIO 1 — ESTRATÉGIAS DE DESCONTO
 * ==================================================================== */
/** Cliente VIP: 15% de desconto fixo sobre o valor total dos itens. */
class DescontoClienteVIPStrategy {
    calcularDesconto(pedido) {
        return pedido.valorTotal * DescontoClienteVIPStrategy.PERCENTUAL;
    }
}
exports.DescontoClienteVIPStrategy = DescontoClienteVIPStrategy;
DescontoClienteVIPStrategy.PERCENTUAL = 0.15;
/** Por quantidade: 10% de desconto somente se houver mais de 5 itens no pedido. */
class DescontoPorQuantidadeStrategy {
    calcularDesconto(pedido) {
        if (pedido.quantidadeTotalItens > DescontoPorQuantidadeStrategy.QUANTIDADE_MINIMA) {
            return pedido.valorTotal * DescontoPorQuantidadeStrategy.PERCENTUAL;
        }
        return 0;
    }
}
exports.DescontoPorQuantidadeStrategy = DescontoPorQuantidadeStrategy;
DescontoPorQuantidadeStrategy.QUANTIDADE_MINIMA = 5;
DescontoPorQuantidadeStrategy.PERCENTUAL = 0.10;
/** Cupom fixo: subtrai um valor fixo em R$, nunca deixando o total ficar negativo. */
class DescontoCupomFixoStrategy {
    constructor(valorCupom) {
        this.valorCupom = valorCupom;
    }
    calcularDesconto(pedido) {
        // Limita o desconto ao próprio valor do pedido, garantindo total final >= 0
        return Math.min(this.valorCupom, pedido.valorTotal);
    }
}
exports.DescontoCupomFixoStrategy = DescontoCupomFixoStrategy;
/* ======================================================================
 * DOMÍNIO 2 — ESTRATÉGIAS DE PAGAMENTO
 * ==================================================================== */
/** Pix: sucesso imediato, sem taxas adicionais. */
class PagamentoPixStrategy {
    processarPagamento(valorTotal) {
        const chavePixSimbolica = `PIX-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        console.log(`[Pix] Chave Pix gerada: ${chavePixSimbolica}`);
        console.log(`[Pix] Cobrança de R$ ${valorTotal.toFixed(2)} (sem taxas adicionais).`);
        return true;
    }
}
exports.PagamentoPixStrategy = PagamentoPixStrategy;
/** Cartão de Crédito: aplica taxa de 2,5% sobre o valor cobrado. */
class PagamentoCartaoCreditoStrategy {
    processarPagamento(valorTotal) {
        const taxa = valorTotal * PagamentoCartaoCreditoStrategy.TAXA_PERCENTUAL;
        const valorFinal = valorTotal + taxa;
        console.log(`[Cartão de Crédito] Taxa de 2,5% aplicada: R$ ${taxa.toFixed(2)}.`);
        console.log(`[Cartão de Crédito] Cobrança final de R$ ${valorFinal.toFixed(2)}.`);
        return true;
    }
}
exports.PagamentoCartaoCreditoStrategy = PagamentoCartaoCreditoStrategy;
PagamentoCartaoCreditoStrategy.TAXA_PERCENTUAL = 0.025;
/** Boleto: adiciona taxa fixa de R$ 2,50. */
class PagamentoBoletoStrategy {
    processarPagamento(valorTotal) {
        const valorFinal = valorTotal + PagamentoBoletoStrategy.TAXA_FIXA;
        console.log(`[Boleto] Taxa fixa de R$ ${PagamentoBoletoStrategy.TAXA_FIXA.toFixed(2)} adicionada.`);
        console.log(`[Boleto] Cobrança final de R$ ${valorFinal.toFixed(2)}.`);
        return true;
    }
}
exports.PagamentoBoletoStrategy = PagamentoBoletoStrategy;
PagamentoBoletoStrategy.TAXA_FIXA = 2.5;
/* ======================================================================
 * DOMÍNIO 3 — ESTRATÉGIAS DE NOTIFICAÇÃO
 * ==================================================================== */
class NotificacaoEmailStrategy {
    enviarNotificacao(mensagem, destinatario) {
        console.log(`Enviado um e-mail para ${destinatario}: "${mensagem}"`);
    }
}
exports.NotificacaoEmailStrategy = NotificacaoEmailStrategy;
class NotificacaoSMSStrategy {
    enviarNotificacao(mensagem, destinatario) {
        console.log(`Enviado por SMS para ${destinatario}: "${mensagem}"`);
    }
}
exports.NotificacaoSMSStrategy = NotificacaoSMSStrategy;
class NotificacaoWhatsAppStrategy {
    enviarNotificacao(mensagem, destinatario) {
        console.log(`Enviado por Whatsapp para ${destinatario}: "${mensagem}"`);
    }
}
exports.NotificacaoWhatsAppStrategy = NotificacaoWhatsAppStrategy;
