export class Software{
    private _nome: string

    public get nome(): string{
        return this._nome
    }

    public set nome(value:string){
        this._nome = value
    }

    private _qtdMemoriaRAM: number

    public get qtdMemoriaRAM(): number{
        return this._qtdMemoriaRAM
    }

    public set qtdMemoriaRAM(value:number){
        this._qtdMemoriaRAM = value
    }

    private _qtdHD: number

    public get qtdHD(): number{
        return this._qtdHD
    }

    public set qtdHD(value:number){
        this._qtdHD = value
    }
}