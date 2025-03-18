import { Agencia } from "./agencia"

export class Conta{
    numero: number
    saldo: number
    limite: number 
    extrato: string
    agencia: Agencia

    constructor(agencia: Agencia){
        this.limite = 100  //7
        this.extrato = ""
        this.agencia = agencia
    }

    depositar(valor: number):void{
        if (valor > 0){
            this.saldo += valor
            this.extrato += `Depósito: ${valor}\n`
        }
    }

    sacar(valor: number): boolean{
        if (valor <= this.saldo + this.limite && valor > 0){
            this.saldo -= valor
            this.extrato += `Saque: ${valor}\n`
            return true
        }
        return false
    }

    exibirExtrato(){
        return this.extrato
    }

    consultarSaldo(): number{
        return this.saldo + this.limite
    }

    transferir(conta_destino: Conta, valor: number): boolean{
        if (valor <= this.saldo + this.limite && valor > 0){
            this.saldo -= valor
            conta_destino.saldo += valor
            return true
        }
        return false

    }
}


