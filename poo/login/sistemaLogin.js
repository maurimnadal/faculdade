"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaLogin = void 0;
var usuario_1 = require("./usuario");
var SistemaLogin = /** @class */ (function () {
    function SistemaLogin() {
        this._usuarios = new Array;
    }
    SistemaLogin.prototype.criarUsuario = function (nome, email, senha) {
        // const usuario = new Usuario()
        // usuario.setNome(nome)
        // usuario.setEmail(email)
        // usuario.setSenha(senha)
        // this._usuarios.push(usuario)
        // return this._usuarios
        this._usuarios.push(new usuario_1.Usuario(nome, email, senha));
    };
    SistemaLogin.prototype.login = function (email, senha) {
        for (var i = 0; i < this._usuarios.length; i++) {
            if (this._usuarios[i].verificarLogin(email, senha)) {
                return "Login realizado com sucesso!";
            }
        }
        return "Email ou senha inválidos!";
    };
    SistemaLogin.prototype.recuperarSenha = function (email) {
        for (var i = 0; i < this._usuarios.length; i++) {
            if (this._usuarios[i].getEmail() === email) {
                this._usuarios[i].recuperarSenha(email);
                return "Senha recuperada com sucesso!";
            }
        }
        return "Email não encontrado!";
    };
    return SistemaLogin;
}());
exports.SistemaLogin = SistemaLogin;
