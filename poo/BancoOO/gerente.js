"use strict";
exports.__esModule = true;
exports.Gerente = void 0;
var Gerente = /** @class */ (function () {
    function Gerente() {
    }
    Gerente.prototype.aumentarSalarioTaxaFixa = function () {
        this.aumentarSalarioTaxaVariavel(10);
    };
    Gerente.prototype.aumentarSalarioTaxaVariavel = function (porcentagem) {
        this.salario += this.salario * porcentagem / 100;
    };
    return Gerente;
}());
exports.Gerente = Gerente;
