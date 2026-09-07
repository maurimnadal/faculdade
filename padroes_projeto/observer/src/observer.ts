// Possíveis estados de um pedido dentro do fluxo da loja virtual
export type StatusPedido = "criado" | "pago" | "enviado" | "cancelado";

// ==========================================
// Interface Observer
// ==========================================
// Todo observador precisa saber reagir quando o Pedido notificar
// uma mudança de estado.
export interface Observer {
    update(pedido: Pedido): void;
}

// ==========================================
// Subject (Pedido)
// ==========================================
export class Pedido {
    private observers: Observer[] = [];
    private status: StatusPedido;

    constructor(
        public readonly id: number,
        public readonly cliente: string,
        statusInicial: StatusPedido = "criado"
    ) {
        this.status = statusInicial;
    }

    // ---------- Gerenciamento de observadores ----------
    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify(): void {
        this.observers.forEach(o => o.update(this));
    }

    // ---------- Estado do pedido ----------
    getStatus(): StatusPedido {
        return this.status;
    }

    // Altera o estado do pedido e, se realmente houve transição,
    // notifica todos os observadores inscritos.
    private alterarStatus(novoStatus: StatusPedido): void {
        if (this.status === novoStatus) {
            return; // não notifica se o estado não mudou
        }
        this.status = novoStatus;
        this.notify();
    }

    pagar(): void {
        this.alterarStatus("pago");
    }

    enviar(): void {
        this.alterarStatus("enviado");
    }

    cancelar(): void {
        this.alterarStatus("cancelado");
    }
}

// ==========================================
// Observadores concretos
// ==========================================

// Simula o envio de um e-mail de confirmação ao cliente
export class EmailService implements Observer {
    update(pedido: Pedido): void {
        console.log(
            `[EmailService] Enviando e-mail para ${pedido.cliente}: ` +
            `seu pedido #${pedido.id} agora está "${pedido.getStatus()}".`
        );
    }
}

// Simula a baixa dos produtos no estoque quando o pedido é pago
export class InventoryService implements Observer {
    update(pedido: Pedido): void {
        if (pedido.getStatus() === "pago") {
            console.log(
                `[InventoryService] Baixando produtos do estoque referentes ao pedido #${pedido.id}.`
            );
        }
    }
}

// Registra em console cada mudança de estado com data e hora
export class LogService implements Observer {
    update(pedido: Pedido): void {
        const dataHora = new Date().toLocaleString("pt-BR");
        console.log(
            `[LogService] ${dataHora} - Pedido #${pedido.id} mudou de status para "${pedido.getStatus()}".`
        );
    }
}
