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
class Computador {
    constructor() {
        this.programasAbertos = new Array;
        this.programasAbertosRAM = new Array;
    }
    carregarBIOS() {
    }
    carregarSO(so) {
        console.log(`Carregando S.O. ${so}`);
    }
    ligar() {
    }
    desligar() {
    }
    abrirPrograma(programa, ram) {
        if (this.capacidadeRAM > ram) {
            console.log(`Abrindo programa ${programa}`);
            this.programasAbertos.push(programa);
            this.programasAbertosRAM.push(ram);
            this.capacidadeRAM -= ram;
            return true;
        }
        console.log(`Não é possível abrir ${programa}`);
        return false;
    }
    fecharPrograma(programa) {
        const index = this.programasAbertos.findIndex(p => p === programa);
        if (index != -1) {
            delete this.programasAbertos[index];
            this.capacidadeRAM += this.programasAbertosRAM[index];
            console.log(`Fechando programa ${programa}`);
        }
        return false;
    }
}
let comp1 = new Computador();
comp1.marca = "Dell";
comp1.capacidadeHD = 1000;
comp1.capacidadeRAM = 16;
comp1.freqProcessador = 3.5;
comp1.qtdNucleosProcessador = 8;
comp1.placaVideoIntegrada = true;
comp1.ligar();
comp1.abrirPrograma("VS Code", 10);
console.log(comp1.capacidadeRAM);
comp1.fecharPrograma("VS Code");
console.log(comp1.capacidadeRAM);
let comp2 = new Computador;
comp2.marca = "Apple";
comp2.capacidadeHD = 2000;
comp2.capacidadeRAM = 16;
comp2.freqProcessador = 3.8;
comp2.qtdNucleosProcessador = 8;
comp2.placaVideoIntegrada = false;
comp2.qtdMemoriaPlacaVideo = 8;
comp2.ligar();
comp2.abrirPrograma("Safari", 50);
