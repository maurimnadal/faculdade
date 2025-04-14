"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    Usuario.prototype.getNome = function () {
        return this._nome;
    };
    Usuario.prototype.setNome = function (nome) {
        this._nome = nome;
    };
    Usuario.prototype.getEmail = function () {
        return this._email;
    };
    Usuario.prototype.setEmail = function (email) {
        if (this.validarEmail(email)) {
            this._email = email;
        }
    };
    Usuario.prototype.getSenha = function () {
        return this._senha;
    };
    Usuario.prototype.setSenha = function (senha) {
        this._senha = senha;
    };
    Usuario.prototype.verificarLogin = function (email, senha) {
        if (this.validarEmail(email) && senha.length >= 6) {
            return true;
        }
        return false;
    };
    Usuario.prototype.recuperarSenha = function (email) {
        if (this.validarEmail(email)) {
            if (email === this._email) {
                return this._senha;
            }
        }
        return "Email não encontrado.";
    };
    Usuario.prototype.validarEmail = function (email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    return Usuario;
}());
exports.Usuario = Usuario;
