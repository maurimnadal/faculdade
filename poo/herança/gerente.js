"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
var funcionario_1 = require("./funcionario");
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Gerente.prototype, "nomeUsuario", {
        set: function (value) {
            this._nomeUsuario = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gerente.prototype, "senha", {
        set: function (value) {
            this._senha = value;
        },
        enumerable: false,
        configurable: true
    });
    Gerente.prototype.calculaBonificacao = function () {
        return this.salario * 0.2;
    };
    Gerente.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", Nome de Usu\u00E1rio: ").concat(this._nomeUsuario, ", Senha: ").concat(this._senha);
    };
    return Gerente;
}(funcionario_1.Funcionario));
exports.Gerente = Gerente;
