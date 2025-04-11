export class Gerente{
    private _nome: string

    public get nome(): string{
        return this._nome
    }

    public set nome(value:string){
        this._nome = value
    }

    private _salario: number

    public get salario(): number{
        return this._salario
    }

    public set salario(value:number){
        this._salario = value
    }

    aumentarSalarioTaxaFixa(){
        this.aumentarSalarioTaxaVariavel(10)
    }

    aumentarSalarioTaxaVariavel(porcentagem: number){
        this._salario += this._salario * porcentagem / 100
    }
}