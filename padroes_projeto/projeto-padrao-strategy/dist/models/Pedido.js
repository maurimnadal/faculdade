"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(id, itens, destinatario) {
        this.id = id;
        this.itens = itens;
        this.destinatario = destinatario;
        this.valorTotal = itens.reduce((acumulado, item) => acumulado + item.preco * item.quantidade, 0);
        this.quantidadeTotalItens = itens.reduce((acumulado, item) => acumulado + item.quantidade, 0);
    }
}
exports.Pedido = Pedido;
