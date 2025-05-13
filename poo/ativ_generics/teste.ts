import { Fila } from "./fila";
import { Pilha } from "./pilha";

let pilha: Pilha = new Pilha(5)
console.log(pilha.estaVazia())
pilha.empilhar(1)
pilha.empilhar(2)
pilha.imprimir()
console.log(pilha.elementoTopo())
pilha.desempilhar()
pilha.imprimir()
console.log(pilha.estaVazia())

let fila: Fila = new Fila()
console.log(fila.estaVazia())
fila.enfileirar("o")
fila.enfileirar("i")
fila.imprimir()
console.log(fila.proximo())
fila.desenfileirar()
fila.imprimir()
console.log(fila.estaVazia())