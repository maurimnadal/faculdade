"use strict";
exports.__esModule = true;
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    Funcionario.prototype.aumentarSalario = function (porcentagem) {
        this.salario += this.salario * porcentagem / 100;
    };
    Funcionario.prototype.consultarDados = function () {
        return "Nome: ".concat(this.nome, " - Sal\u00E1rio: ").concat(this.salario, " R$");
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
