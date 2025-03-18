export class Gerente{
    nome: string
    salario: number

    aumentarSalarioTaxaFixa(){
        this.aumentarSalarioTaxaVariavel(10)
    }

    aumentarSalarioTaxaVariavel(porcentagem: number){
        this.salario += this.salario * porcentagem / 100
    }
}