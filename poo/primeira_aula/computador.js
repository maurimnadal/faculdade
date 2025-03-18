"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
var Computador = /** @class */ (function () {
    function Computador() {
        this.programasAbertos = new Array;
        this.programasAbertosRAM = new Array;
        this.softwaresInstalados = new Array;
    }
    Computador.prototype.instalarSoftware = function (sw) {
        if (sw != null) {
            this.softwaresInstalados.push(sw);
        }
    };
    Computador.prototype.carregarBIOS = function () {
    };
    Computador.prototype.carregarSO = function (so) {
        console.log("Carregando S.O. ".concat(so));
    };
    Computador.prototype.ligar = function () {
    };
    Computador.prototype.desligar = function () {
    };
    Computador.prototype.abrirPrograma = function (programa, ram) {
        var index = this.softwaresInstalados.findIndex(function (p) { return p.nome === programa; });
        if (this.capacidadeRAM > ram && index > 0) {
            console.log("Abrindo programa ".concat(programa));
            this.programasAbertos.push(programa);
            this.programasAbertosRAM.push(ram);
            this.capacidadeRAM -= ram;
            return true;
        }
        console.log("N\u00E3o \u00E9 poss\u00EDvel abrir ".concat(programa));
        return false;
    };
    Computador.prototype.fecharPrograma = function (programa) {
        var index = this.programasAbertos.findIndex(function (p) { return p === programa; });
        if (index != -1) {
            delete this.programasAbertos[index];
            this.capacidadeRAM += this.programasAbertosRAM[index];
            console.log("Fechando programa ".concat(programa));
        }
        return false;
    };
    return Computador;
}());
exports.Computador = Computador;
