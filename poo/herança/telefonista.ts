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

    toString(): string {
        return `${super.toString()}, Código da Estação de Trabalho: ${this.codigoEstacaoTrabalho}`
    }

    
    calcularValeAlimentacao() {
        return this.salario += 1000
    }
}