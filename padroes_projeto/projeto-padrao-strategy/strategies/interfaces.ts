import { Pedido } from "../models/Pedido";

/**
 * Domínio 1: Estratégias de Desconto.
 * Cada implementação decide como calcular o valor (em R$) a ser abatido do pedido.
 */
export interface DescontoStrategy {
    calcularDesconto(pedido: Pedido): number;
}

/**
 * Domínio 2: Estratégias de Pagamento.
 * Cada implementação decide como processar a cobrança (podendo aplicar taxas)
 * e retorna se o pagamento foi concluído com sucesso.
 */
export interface PagamentoStrategy {
    processarPagamento(valorTotal: number): boolean;
}

/**
 * Domínio 3: Estratégias de Notificação.
 * Cada implementação decide o canal usado para avisar o cliente.
 */
export interface NotificacaoStrategy {
    enviarNotificacao(mensagem: string, destinatario: string): void;
}
