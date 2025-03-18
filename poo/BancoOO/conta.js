"use strict";
exports.__esModule = true;
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(agencia) {
        this.limite = 100; //7
        this.extrato = "";
        this.agencia = agencia;
    }
    Conta.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            this.extrato += "Dep\u00F3sito: ".concat(valor, "\n");
        }
    };
    Conta.prototype.sacar = function (valor) {
        if (valor <= this.saldo + this.limite && valor > 0) {
            this.saldo -= valor;
            this.extrato += "Saque: ".concat(valor, "\n");
            return true;
        }
        return false;
    };
    Conta.prototype.exibirExtrato = function () {
        return this.extrato;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo + this.limite;
    };
    Conta.prototype.transferir = function (conta_destino, valor) {
        if (valor <= this.saldo + this.limite && valor > 0) {
            this.saldo -= valor;
            conta_destino.saldo += valor;
            return true;
        }
        return false;
    };
    return Conta;
}());
exports.Conta = Conta;
