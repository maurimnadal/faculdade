"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nome, email, senha) {
        this._nome = nome;
        this._email = email;
        this._senha = senha;
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
        if (this.validarEmail(email) && this._email === email && this._senha === senha) {
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
        if (email.includes("@.")) {
            return true;
        }
        return false;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
