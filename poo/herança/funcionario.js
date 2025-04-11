"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    Object.defineProperty(Funcionario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (value) {
            this._salario = value;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.calculaBonificacao = function () {
        return this._salario * 0.1;
    };
    Funcionario.prototype.toString = function () {
        return "Nome: ".concat(this._nome, ", Sal\u00E1rio: R$").concat(this._salario, ", Bonifica\u00E7\u00E3o: R$").concat(this.calculaBonificacao());
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
