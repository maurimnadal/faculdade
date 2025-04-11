/*
Classe: 
Computador

Atributos:
marca
capacidadeHD
capacidadeRAM
freqProcessador
clockProcessador
qtdNucleosProcessador
placaVideoIntegrada
qtdMemoriaPlacaVideo

Métodos:
carregarBIOS()
carregarSO()
ligar()
desligar()
abrirPrograma()
*/

import { Software } from "./software";

export class Computador{
    private _marca: string;

    public get marca(): string{
        return this._marca
    }

    public set marca(value:string){
        this._marca = value
    }

    private _capacidadeHD: number;

    public get capacidadeHD(): number{
        return this._capacidadeHD
    }

    public set capacidadeHD(value:number){
        this._capacidadeHD = value
    }
    

    private _capacidadeRAM: number;

    public get capacidadeRAM(): number{
        return this._capacidadeRAM
    }

    public set capacidadeRAM(value:number){
        this._capacidadeRAM = value
    }
    private _freqProcessador: number;

    public get freqProcessador(): number{
        return this._freqProcessador
    }

    public set freqProcessador(value:number){
        this._freqProcessador = value
    }

    private _clockProcessador: number;

    public get clockProcessador(): number{
        return this._clockProcessador
    }

    public set clockProcessador(value:number){
        this._clockProcessador = value
    }

    private _qtdNucleosProcessador: number;

    public get qtdNucleosProcessador(): number{
        return this._qtdNucleosProcessador
    }

    public set qtdNucleosProcessador(value:number){
        this._qtdNucleosProcessador = value
    }

    private _placaVideoIntegrada: boolean;

    public get placaVideoIntegrada(): boolean{
        return this._placaVideoIntegrada
    }

    public set placaVideoIntegrada(value:boolean){
        this._placaVideoIntegrada = value
    }

    private _qtdMemoriaPlacaVideo: number;
    private _programasAbertos: string[];
    private _programasAbertosRAM: number[];
    private _softwaresInstalados: Software[];

    constructor(){
        this._programasAbertos = new Array
        this._programasAbertosRAM = new Array
        this._softwaresInstalados = new Array
    }

    private carregarBIOS(){

    }

    private carregarSO(so: string){
        console.log(`Carregando S.O. ${so}`)
    }

    ligar(){
        this.carregarBIOS()
        this.carregarSO("Windows")
    }

    desligar(){

    }
    
    instalarSoftware(sw: Software){
        if(sw != null){
            this._softwaresInstalados.push(sw)
        }
    }

    abrirPrograma(programa: string, ram: number): boolean{
        const index = this._softwaresInstalados.findIndex(p => p.nome === programa)
        if(this._capacidadeRAM > ram  && index > 0){
            console.log(`Abrindo programa ${programa}`)
            this._programasAbertos.push(programa)
            this._programasAbertosRAM.push(ram)
            this._capacidadeRAM -= ram
            return true
        }
        console.log(`Não é possível abrir ${programa}`)
        return false
        
        
    }

    fecharPrograma(programa: string){
        const index = this._programasAbertos.findIndex(p => p === programa)
        if(index != -1){
            delete this._programasAbertos[index]
            this._capacidadeRAM += this._programasAbertosRAM[index]
            console.log(`Fechando programa ${programa}`)
        }
        return false
        
    }

}


