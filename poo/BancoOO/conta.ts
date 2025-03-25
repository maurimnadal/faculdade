import { Agencia } from "./agencia"

export class Conta{
    private _numero: number

    public get numero(): number{
        return this._numero
    }

    public set numero(value:number){
        this._numero = value
    }

    private _saldo: number

    private _limite: number 

    private _extrato: string

    public get extrato(): string{
        return this._extrato
    }

    private _agencia: Agencia

    public get agencia(): Agencia{
        return this._agencia
    }

    public set agencia(value:Agencia){
        this._agencia = value
    }

    constructor(agencia: Agencia){
        this._limite = 100  //7
        this._extrato = ""
        this._agencia = agencia
    }

    depositar(valor: number):void{
        if (valor > 0){
            this._saldo += valor
            this._extrato += `Depósito: ${valor}\n`
        }
    }

    sacar(valor: number): boolean{
        if (valor <= this._saldo + this._limite && valor > 0){
            this._saldo -= valor
            this._extrato += `Saque: ${valor}\n`
            return true
        }
        return false
    }

    exibirExtrato(){
        return this._extrato
    }

    consultarSaldo(): number{
        return this._saldo + this._limite
    }

    transferir(conta_destino: Conta, valor: number): boolean{
        if (valor <= this._saldo + this._limite && valor > 0){
            this._saldo -= valor
            conta_destino._saldo += valor
            return true
        }
        return false

    }
}


