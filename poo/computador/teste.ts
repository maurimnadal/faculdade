import { Computador } from "./computador";
import { Desktop } from "./desktop";
import { Notebook } from "./notebook";
import { Smartphone } from "./smartphone";
import { Software } from "./software";
import { Tablet } from "./tablet";

let comp1 = new Computador()

comp1.marca = "Dell"
comp1.capacidadeHD = 1000
comp1.capacidadeRAM = 16
comp1.freqProcessador = 3.5
comp1.qtdNucleosProcessador = 8
comp1.placaVideoIntegrada = true
comp1.ligar()
comp1.abrirPrograma("VS Code", 10)
console.log(comp1.capacidadeRAM)
comp1.fecharPrograma("VS Code")
console.log(comp1.capacidadeRAM)

let comp2 = new Computador
comp2.marca = "Apple"
comp2.capacidadeHD = 2000
comp2.capacidadeRAM = 16
comp2.freqProcessador = 3.8
comp2.qtdNucleosProcessador = 8
comp2.placaVideoIntegrada = false
comp2.ligar()
comp2.abrirPrograma("Safari", 50)

let sw1: Software = new Software
sw1.nome = "Windows 11"
sw1.qtdHD = 11000
sw1.qtdMemoriaRAM = 2000

let sw2: Software = new Software
sw2.nome = "Libre Office"
sw2.qtdHD = 3000
sw2.qtdMemoriaRAM = 700

let sw3: Software = new Software
sw3.nome = "Google Chrome"
sw3.qtdHD = 1500
sw3.qtdMemoriaRAM = 2000

comp1.instalarSoftware(sw1)
comp1.instalarSoftware(sw2)
comp1.instalarSoftware(sw3)


let desk1:Desktop = new Desktop
desk1.ligar()
 
let note1:Notebook = new Notebook
note1.ligar()

let tb1:Tablet = new Tablet
tb1.ligar()

let phone1: Smartphone = new Smartphone
phone1.ligar()