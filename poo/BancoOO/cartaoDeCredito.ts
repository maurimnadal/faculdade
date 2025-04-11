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
    public set data_validade(value:string){
        this.data_validade = value
    }

    private _cliente: Cliente

    public get cliente(): Cliente{
        return this._cliente
    }
    public set cliente(value:Cliente){
        this.cliente = value
    }


    constructor(numero: number){
        this._numero = numero
    }
}

