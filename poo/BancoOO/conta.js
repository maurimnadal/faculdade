"use strict";
exports.__esModule = true;
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta() {
        this.limite = 100; //7
        this.extrato = "";
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
    return Conta;
}());
exports.Conta = Conta;
