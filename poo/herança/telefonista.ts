import { Funcionario } from "./funcionario";


export class Telefonista extends Funcionario{
    private _codigoEstacaoTrabalho: string;
    public get codigoEstacaoTrabalho(): string {
        return this._codigoEstacaoTrabalho;
    }
    public set codigoEstacaoTrabalho(value: string) {
        this._codigoEstacaoTrabalho = value;
    }

    constructor(){
        super()
    }

    toString(): void {
        console.log(`Nome: ${this.nome}, Salário: ${this.salario}R$, Bonificação: ${this.calculaBonificacao()}R$, Código da Estação de Trabalho: ${this.codigoEstacaoTrabalho}`)
    }
}