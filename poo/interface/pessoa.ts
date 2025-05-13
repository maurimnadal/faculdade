export interface Pessoa{
    nome: string;
    cpf: string;

    getNome(): string;
    setNome(nome:string):void;
}