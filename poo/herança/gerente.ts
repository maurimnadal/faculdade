import { Funcionario } from "./funcionario";

export class Gerente extends Funcionario{
    private _nomeUsuario: string;
    public get nomeUsuario(): string {
        return this._nomeUsuario;
    }
    public set nomeUsuario(value: string) {
        this._nomeUsuario = value;
    }

    private _senha: string;
    public get senha(): string {
        return this._senha;
    }
    public set senha(value: string) {
        this._senha = value;
    }

    

    constructor(){
        super()
    }

    calculaBonificacao(): number {
        return this.salario * 0.2
    }

    toString(): void {
        console.log(`Nome: ${this.nome}, Salário: ${this.salario}R$, Bonificação: ${this.calculaBonificacao()}R$, Nome de Usuário: ${this.nomeUsuario}, Senha: ${this.senha}`)
    }
}