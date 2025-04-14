import { Usuario } from "./usuario"

export class SistemaLogin{
    private _usuarios: Usuario[]

    constructor(){
        this._usuarios = new Array
    }

    criarUsuario(nome: string, email: string, senha: string): Usuario[]{
        const usuario = new Usuario()
        usuario.setNome(nome)
        usuario.setEmail(email)
        usuario.setSenha(senha)
        this._usuarios.push(usuario)
        return this._usuarios
    }


    login(email: string, senha: string): string{
        for(let i = 0; i < this._usuarios.length; i++){
            if(this._usuarios[i].getEmail() === email && this._usuarios[i].getSenha() === senha){
                return "Login realizado com sucesso!"
            }
        }
        return "Email ou senha inválidos!"
    }

    recuperarSenha(email: string){
        for(let i = 0; i < this._usuarios.length; i++){
            if(this._usuarios[i].getEmail() === email){
                this._usuarios[i].recuperarSenha(email)
                return "Senha recuperada com sucesso!"
            }
        }
        return "Email não encontrado!"
    }
}