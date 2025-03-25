import { Cliente } from "./cliente";
export class CartaoDeCredito{
    private _numero: number;

    public get numero(): number{
        return this._numero
    }

    public set numero(value:number){
        this._numero = value
    }
    private _data_validade: string

    public get data_validade(): string{
        return this._data_validade
    }

    private _cliente: Cliente

    public get cliente(): Cliente{
        return this._cliente
    }


    constructor(numero: number){
        this._numero = numero
    }
}

