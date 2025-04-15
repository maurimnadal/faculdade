import { Usuario } from './usuario';

export class Admin extends Usuario{
    private _nivelAcesso: number

    constructor(nome: string, email: string, senha: string, nivelAcesso: number){
        super(nome, email, senha)
        this._nivelAcesso = nivelAcesso
    }   

    getNivelAcesso(): string{
        if(this._nivelAcesso === 2){
            return "Administrador com privilégios avançados"
        }
        return "Administrador padrão"
    }           

    setNivelAcesso(nivel: number): void{
        this._nivelAcesso = nivel
    }


    verificarLogin(email: string, senha: string){
        if(this.validarEmail(email) && senha.length >= 6){
            if(this.getEmail() === email && this.getSenha() === senha){
                return true
            }else{
                return false
            }
        }
        return false
    }


    recuperarSenha(email: string): string {
        if(this.validarEmail(email)){
            if(email === this.getEmail()){
                return this.getSenha()
            }
        }
        return "Email não encontrado."
    }
}