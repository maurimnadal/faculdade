import { IUsuario } from "./IUsuario";

export class Gerente implements IUsuario{
    private _usuario: string;
    public get usuario(): string {
        return this._usuario;
    }
    public set usuario(value: string) {
        this._usuario = value;
    }
    private _senha: string;
    public get senha(): string {
        return this._senha;
    }
    public set senha(value: string) {
        this._senha = value;
    }

    constructor(usuario: string , senha: string){
        this.usuario = usuario
        this.senha = senha
    }
}