export interface ItemPedido {
    nome: string;
    preco: number;
    quantidade: number;
}

export class Pedido {
    public readonly id: string;
    public readonly itens: ItemPedido[];
    public readonly destinatario: string;

    /** Soma de (preco * quantidade) de todos os itens do pedido */
    public readonly valorTotal: number;

    /** Soma das quantidades de todos os itens do pedido (usado por regras de desconto por quantidade) */
    public readonly quantidadeTotalItens: number;

    constructor(id: string, itens: ItemPedido[], destinatario: string) {
        this.id = id;
        this.itens = itens;
        this.destinatario = destinatario;

        this.valorTotal = itens.reduce(
            (acumulado, item) => acumulado + item.preco * item.quantidade,
            0
        );

        this.quantidadeTotalItens = itens.reduce(
            (acumulado, item) => acumulado + item.quantidade,
            0
        );
    }
}
