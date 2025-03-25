import { Tablet } from "./tablet"

export class Smartphone extends Tablet{
    private _qtdChips: number
    public get qtdChips(): number {
        return this._qtdChips
    }
    public set qtdChips(value: number) {
        this._qtdChips = value
    }
    private _cartaoMemoria: boolean
    public get cartaoMemoria(): boolean {
        return this._cartaoMemoria
    }
    public set cartaoMemoria(value: boolean) {
        this._cartaoMemoria = value
    }

    constructor(){
        super()
    }
}