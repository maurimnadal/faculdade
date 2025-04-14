export class Usuario{
    private _nome: string;
    private _email: string;
    private _senha: string;

    getNome(): string {
        return this._nome;
    }

    setNome(nome: string): void {
        this._nome = nome;
    }

    getEmail(): string {
        return this._email;
    }

    setEmail(email: string): void {
        if(this.validarEmail(email)){
            this._email = email
        }    
    }

    getSenha(): string {
        return this._senha;
    }

    setSenha(senha: string): void {
        this._senha = senha;
    }

    verificarLogin(email: string, senha: string): boolean {
        if(this.validarEmail(email) && senha.length >= 6){
            return true;
        }
        return false;
    }

    recuperarSenha(email: string): string {
        if(this.validarEmail(email)){
            if(email === this._email){
                return this._senha;
            }
        }
        return "Email não encontrado.";
    }

    validarEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}