import { Computador } from "./computador";

export class Notebook extends Computador{
    private _touchpad: string;
    public get touchpad(): string {
        return this._touchpad;
    }
    public set touchpad(value: string) {
        this._touchpad = value;
    }
    private _placaMae: string;
    public get placaMae(): string {
        return this._placaMae;
    }
    public set placaMae(value: string) {
        this._placaMae = value;
    }
    private _bateria: string;
    public get bateria(): string {
        return this._bateria;
    }
    public set bateria(value: string) {
        this._bateria = value;
    }
    private _tela: string;
    public get tela(): string {
        return this._tela;
    }
    public set tela(value: string) {
        this._tela = value;
    }

    constructor(){
        super()
    }
}