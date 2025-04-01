import { Funcionario } from "./funcionario";

export class Gerente extends Funcionario{

    public set nomeUsuario(value: string) {
        this._nomeUsuario = value;
    }

    public set senha(value:string)  {
        this._senha = value;
    }


    constructor(){
        super()
    }

    calculaBonificacao(): number {
        return this.salario * 0.2
    }

    toString(): string {
        return  `${super.toString()}, Nome de Usuário: ${this._nomeUsuario}, Senha: ${this._senha}`
    }

    calcularValeAlimentacao() {
        return this.salario += 1000
    }
}