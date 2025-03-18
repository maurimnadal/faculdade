import { Cliente } from "./cliente";
export class CartaoDeCredito{
    numero: number;
    data_validade: string
    cliente: Cliente

    constructor(numero: number){
        this.numero = numero
    }
}

