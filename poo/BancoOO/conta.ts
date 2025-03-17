export class Conta{
    numero: number
    saldo: number
    limite: number 
    extrato : string

    constructor(){
        this.limite = 100  //7
        this.extrato = ""
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
}