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
exports.Admin = void 0;
var usuario_1 = require("./usuario");
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(nivelAcesso) {
        var _this = _super.call(this) || this;
        _this._nivelAcesso = nivelAcesso;
        return _this;
    }
    Admin.prototype.getNivelAcesso = function () {
        if (this._nivelAcesso === 2) {
            return "Administrador com privilégios avançados";
        }
        return "Administrador padrão";
    };
    Admin.prototype.setNivelAcesso = function (nivel) {
        this._nivelAcesso = nivel;
    };
    Admin.prototype.verificarLogin = function (email, senha) {
        if (this.validarEmail(email) && senha.length >= 6) {
            if (this.getEmail() === email && this.getSenha() === senha) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    };
    Admin.prototype.recuperarSenha = function (email) {
        if (this.validarEmail(email)) {
            if (email === this.getEmail()) {
                return this.getSenha();
            }
        }
        return "Email não encontrado.";
    };
    return Admin;
}(usuario_1.Usuario));
exports.Admin = Admin;
