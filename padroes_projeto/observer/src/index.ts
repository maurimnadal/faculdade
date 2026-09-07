import { Pedido, EmailService, InventoryService, LogService } from "./observer";

// Cria o pedido (Subject)
const pedido = new Pedido(1, "cliente@gmail.com");

// Cria os observadores
const emailService = new EmailService();
const inventoryService = new InventoryService();
const logService = new LogService();

// Inscreve os observadores no pedido
pedido.subscribe(emailService);
pedido.subscribe(inventoryService);
pedido.subscribe(logService);

console.log(`Status inicial do pedido #${pedido.id}: ${pedido.getStatus()}`);

// Simula o fluxo de transições do pedido
pedido.pagar();     // Criado -> Pago (dispara EmailService, InventoryService e LogService)
pedido.enviar();    // Pago -> Enviado (dispara EmailService e LogService)

// Exemplo de remoção de um observador em tempo de execução
pedido.unsubscribe(inventoryService);

pedido.cancelar();  // Enviado -> Cancelado (inventoryService não é mais notificado)
