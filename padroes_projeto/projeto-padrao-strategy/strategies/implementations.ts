import { Pedido } from "../models/Pedido";
import { DescontoStrategy, PagamentoStrategy, NotificacaoStrategy } from "./interfaces";

/* ======================================================================
 * DOMÍNIO 1 — ESTRATÉGIAS DE DESCONTO
 * ==================================================================== */

/** Cliente VIP: 15% de desconto fixo sobre o valor total dos itens. */
export class DescontoClienteVIPStrategy implements DescontoStrategy {
    private static readonly PERCENTUAL = 0.15;

    public calcularDesconto(pedido: Pedido): number {
        return pedido.valorTotal * DescontoClienteVIPStrategy.PERCENTUAL;
    }
}

/** Por quantidade: 10% de desconto somente se houver mais de 5 itens no pedido. */
export class DescontoPorQuantidadeStrategy implements DescontoStrategy {
    private static readonly QUANTIDADE_MINIMA = 5;
    private static readonly PERCENTUAL = 0.10;

    public calcularDesconto(pedido: Pedido): number {
        if (pedido.quantidadeTotalItens > DescontoPorQuantidadeStrategy.QUANTIDADE_MINIMA) {
            return pedido.valorTotal * DescontoPorQuantidadeStrategy.PERCENTUAL;
        }
        return 0;
    }
}

/** Cupom fixo: subtrai um valor fixo em R$, nunca deixando o total ficar negativo. */
export class DescontoCupomFixoStrategy implements DescontoStrategy {
    constructor(private readonly valorCupom: number) {}

    public calcularDesconto(pedido: Pedido): number {
        // Limita o desconto ao próprio valor do pedido, garantindo total final >= 0
        return Math.min(this.valorCupom, pedido.valorTotal);
    }
}

/* ======================================================================
 * DOMÍNIO 2 — ESTRATÉGIAS DE PAGAMENTO
 * ==================================================================== */

/** Pix: sucesso imediato, sem taxas adicionais. */
export class PagamentoPixStrategy implements PagamentoStrategy {
    public processarPagamento(valorTotal: number): boolean {
        const chavePixSimbolica = `PIX-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        console.log(`[Pix] Chave Pix gerada: ${chavePixSimbolica}`);
        console.log(`[Pix] Cobrança de R$ ${valorTotal.toFixed(2)} (sem taxas adicionais).`);
        return true;
    }
}

/** Cartão de Crédito: aplica taxa de 2,5% sobre o valor cobrado. */
export class PagamentoCartaoCreditoStrategy implements PagamentoStrategy {
    private static readonly TAXA_PERCENTUAL = 0.025;

    public processarPagamento(valorTotal: number): boolean {
        const taxa = valorTotal * PagamentoCartaoCreditoStrategy.TAXA_PERCENTUAL;
        const valorFinal = valorTotal + taxa;
        console.log(`[Cartão de Crédito] Taxa de 2,5% aplicada: R$ ${taxa.toFixed(2)}.`);
        console.log(`[Cartão de Crédito] Cobrança final de R$ ${valorFinal.toFixed(2)}.`);
        return true;
    }
}

/** Boleto: adiciona taxa fixa de R$ 2,50. */
export class PagamentoBoletoStrategy implements PagamentoStrategy {
    private static readonly TAXA_FIXA = 2.5;

    public processarPagamento(valorTotal: number): boolean {
        const valorFinal = valorTotal + PagamentoBoletoStrategy.TAXA_FIXA;
        console.log(`[Boleto] Taxa fixa de R$ ${PagamentoBoletoStrategy.TAXA_FIXA.toFixed(2)} adicionada.`);
        console.log(`[Boleto] Cobrança final de R$ ${valorFinal.toFixed(2)}.`);
        return true;
    }
}

/* ======================================================================
 * DOMÍNIO 3 — ESTRATÉGIAS DE NOTIFICAÇÃO
 * ==================================================================== */

export class NotificacaoEmailStrategy implements NotificacaoStrategy {
    public enviarNotificacao(mensagem: string, destinatario: string): void {
        console.log(`Enviado um e-mail para ${destinatario}: "${mensagem}"`);
    }
}

export class NotificacaoSMSStrategy implements NotificacaoStrategy {
    public enviarNotificacao(mensagem: string, destinatario: string): void {
        console.log(`Enviado por SMS para ${destinatario}: "${mensagem}"`);
    }
}

export class NotificacaoWhatsAppStrategy implements NotificacaoStrategy {
    public enviarNotificacao(mensagem: string, destinatario: string): void {
        console.log(`Enviado por Whatsapp para ${destinatario}: "${mensagem}"`);
    }
}
