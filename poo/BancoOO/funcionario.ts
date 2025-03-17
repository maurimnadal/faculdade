export class Funcionario{
    nome: string
    salario: number

    aumentarSalario(porcentagem: number){
        this.salario += this.salario * porcentagem / 100
    }

    consultarDados(){
        return `Nome: ${this.nome} - Salário: ${this.salario} R$`
    }
}