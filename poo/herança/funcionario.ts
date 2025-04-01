export abstract class Funcionario {
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

    protected _nomeUsuario: string
    protected _senha: string

    abstract calcularValeAlimentacao()

    calculaBonificacao(): number {
        return this._salario * 0.1
    }

    toString(): string {
        return `Nome: ${this._nome}, Salário: R$${this._salario}, Bonificação: R$${this.calculaBonificacao()}`
    }
}