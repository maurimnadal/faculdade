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
exports.Secretario = void 0;
var funcionario_1 = require("./funcionario");
var Secretario = /** @class */ (function (_super) {
    __extends(Secretario, _super);
    function Secretario() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Secretario.prototype, "ramal", {
        get: function () {
            return this._ramal;
        },
        set: function (value) {
            this._ramal = value;
        },
        enumerable: false,
        configurable: true
    });
    Secretario.prototype.toString = function () {
        console.log("Nome: ".concat(this.nome, ", Sal\u00E1rio: ").concat(this.salario, "R$, Bonifica\u00E7\u00E3o: ").concat(this.calculaBonificacao(), "R$, Ramal: ").concat(this.ramal));
    };
    return Secretario;
}(funcionario_1.Funcionario));
exports.Secretario = Secretario;
