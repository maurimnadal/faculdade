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
exports.Telefonista = void 0;
var funcionario_1 = require("./funcionario");
var Telefonista = /** @class */ (function (_super) {
    __extends(Telefonista, _super);
    function Telefonista() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Telefonista.prototype, "codigoEstacaoTrabalho", {
        get: function () {
            return this._codigoEstacaoTrabalho;
        },
        set: function (value) {
            this._codigoEstacaoTrabalho = value;
        },
        enumerable: false,
        configurable: true
    });
    Telefonista.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", C\u00F3digo da Esta\u00E7\u00E3o de Trabalho: ").concat(this.codigoEstacaoTrabalho);
    };
    return Telefonista;
}(funcionario_1.Funcionario));
exports.Telefonista = Telefonista;
