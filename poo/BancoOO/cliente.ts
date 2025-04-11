export class Cliente{
    private _nome: string;

    public get nome(): string{
        return this._nome
    }

    public set nome(value:string){
        this._nome = value
    }

    private _codigo: number

    public get codigo(): number{
        return this._codigo
    }
    public set codigo(value:number){
        this.codigo = value
    }

}