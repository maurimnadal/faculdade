import { Pessoa } from "./pessoa"

export class Cliente implements Pessoa{
    id: number
    nome: string
    cpf: string

    constructor(id: number, nome: string, cpf: string){
        this.id = id
        this.nome = nome
        this.cpf = cpf
    }

    getNome(): string{
        return this.nome
    }

    setNome(nome: string): void{
        this.nome = nome
    }
}

let p1: Pessoa = new Cliente(1, "Teobaldo", "123456789")
