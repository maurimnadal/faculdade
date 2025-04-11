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
export class Computador {
    get marca() {
        return this._marca;
    }
    set marca(value) {
        this._marca = value;
    }
    get capacidadeHD() {
        return this._capacidadeHD;
    }
    set capacidadeHD(value) {
        this._capacidadeHD = value;
    }
    get capacidadeRAM() {
        return this._capacidadeRAM;
    }
    set capacidadeRAM(value) {
        this._capacidadeRAM = value;
    }
    get freqProcessador() {
        return this._freqProcessador;
    }
    set freqProcessador(value) {
        this._freqProcessador = value;
    }
    get clockProcessador() {
        return this._clockProcessador;
    }
    set clockProcessador(value) {
        this._clockProcessador = value;
    }
    get qtdNucleosProcessador() {
        return this._qtdNucleosProcessador;
    }
    set qtdNucleosProcessador(value) {
        this._qtdNucleosProcessador = value;
    }
    get placaVideoIntegrada() {
        return this._placaVideoIntegrada;
    }
    set placaVideoIntegrada(value) {
        this._placaVideoIntegrada = value;
    }
    get qtdMemoriaPlacaVideo() {
        return this._qtdMemoriaPlacaVideo;
    }
    set qtdMemoriaPlacaVideo(value) {
        this._qtdMemoriaPlacaVideo = value;
    }
    get programasAbertos() {
        return this._programasAbertos;
    }
    set programasAbertos(value) {
        this._programasAbertos = value;
    }
    get programasAbertosRAM() {
        return this._programasAbertosRAM;
    }
    set programasAbertosRAM(value) {
        this._programasAbertosRAM = value;
    }
    get softwaresInstalados() {
        return this._softwaresInstalados;
    }
    set softwaresInstalados(value) {
        this._softwaresInstalados = value;
    }
    constructor() {
        this._programasAbertos = new Array;
        this._programasAbertosRAM = new Array;
        this._softwaresInstalados = new Array;
    }
    instalarSoftware(sw) {
        if (sw != null) {
            this._softwaresInstalados.push(sw);
        }
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
        const index = this._softwaresInstalados.findIndex(p => p.nome === programa);
        if (this._capacidadeRAM > ram && index > 0) {
            console.log(`Abrindo programa ${programa}`);
            this._programasAbertos.push(programa);
            this._programasAbertosRAM.push(ram);
            this._capacidadeRAM -= ram;
            return true;
        }
        console.log(`Não é possível abrir ${programa}`);
        return false;
    }
    fecharPrograma(programa) {
        const index = this._programasAbertos.findIndex(p => p === programa);
        if (index != -1) {
            delete this._programasAbertos[index];
            this._capacidadeRAM += this._programasAbertosRAM[index];
            console.log(`Fechando programa ${programa}`);
        }
        return false;
    }
}
