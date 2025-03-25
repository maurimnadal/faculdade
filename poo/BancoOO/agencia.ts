export class Agencia{
    private _numero: string

    public get numero(): string{
        return this._numero
    }

    public set numero(value:string){
        this._numero = value
    }

    constructor(numero: string){
        this._numero  = numero
    }
}