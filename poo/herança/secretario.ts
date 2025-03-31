import { Funcionario } from "./funcionario";


export class Secretario extends Funcionario{
    private _ramal: string;
    public get ramal(): string {
        return this._ramal;
    }
    public set ramal(value: string) {
        this._ramal = value;
    }

    constructor(){
        super()
    }

    toString(): void {
        console.log(`Nome: ${this.nome}, Salário: ${this.salario}R$, Bonificação: ${this.calculaBonificacao()}R$, Ramal: ${this.ramal}`)
    }

}