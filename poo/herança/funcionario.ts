export class Funcionario {
    private _nome: string
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }

    private _salario: number
    public get salario(): number {
        return this._salario
    }
    public set salario(value: number) {
        this._salario = value
    }

    calculaBonificacao(): number {
        return this._salario * 0.1
    }

    toString(): void {
        console.log(`Nome: ${this._nome}, Salário: ${this._salario}R$, Bonificação: ${this.calculaBonificacao()}R$`)
    }
}