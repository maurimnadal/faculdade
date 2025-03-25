export class Conta {
    constructor(agencia) {
        this._limite = 100; //7
        this._extrato = "";
        this._agencia = agencia;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get saldo() {
        return this._saldo;
    }
    get limite() {
        return this._limite;
    }
    get extrato() {
        return this._extrato;
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(value) {
        this._agencia = value;
    }
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            this._extrato += `Depósito: ${valor}\n`;
        }
    }
    sacar(valor) {
        if (valor <= this._saldo + this._limite && valor > 0) {
            this._saldo -= valor;
            this._extrato += `Saque: ${valor}\n`;
            return true;
        }
        return false;
    }
    exibirExtrato() {
        return this._extrato;
    }
    consultarSaldo() {
        return this._saldo + this._limite;
    }
    transferir(conta_destino, valor) {
        if (valor <= this._saldo + this._limite && valor > 0) {
            this._saldo -= valor;
            conta_destino._saldo += valor;
            return true;
        }
        return false;
    }
}
