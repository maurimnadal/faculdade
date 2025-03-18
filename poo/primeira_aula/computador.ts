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
    marca: string;
    capacidadeHD: number;
    capacidadeRAM: number;
    freqProcessador: number;
    clockProcessador: number;
    qtdNucleosProcessador: number;
    placaVideoIntegrada: boolean;
    qtdMemoriaPlacaVideo: number;
    programasAbertos: string[];
    programasAbertosRAM: number[];
    softwaresInstalados: Software[];

    constructor(){
        this.programasAbertos = new Array
        this.programasAbertosRAM = new Array
        this.softwaresInstalados = new Array
    }

    instalarSoftware(sw: Software){
        if(sw != null){
            this.softwaresInstalados.push(sw)
        }
    }

    carregarBIOS(){

    }

    carregarSO(so: string){
        console.log(`Carregando S.O. ${so}`)
    }

    ligar(){

    }

    desligar(){

    }

    abrirPrograma(programa: string, ram: number): boolean{
        const index = this.softwaresInstalados.findIndex(p => p.nome === programa)
        if(this.capacidadeRAM > ram  && index > 0){
            console.log(`Abrindo programa ${programa}`)
            this.programasAbertos.push(programa)
            this.programasAbertosRAM.push(ram)
            this.capacidadeRAM -= ram
            return true
        }
        console.log(`Não é possível abrir ${programa}`)
        return false
        
        
    }

    fecharPrograma(programa: string){
        const index = this.programasAbertos.findIndex(p => p === programa)
        if(index != -1){
            delete this.programasAbertos[index]
            this.capacidadeRAM += this.programasAbertosRAM[index]
            console.log(`Fechando programa ${programa}`)
        }
        return false
        
    }

}


