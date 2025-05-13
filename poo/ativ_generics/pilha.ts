import { EstruturaDados } from "./estruturaDados";

//*** Classe Pilha ***/
export class Pilha extends EstruturaDados <Pilha>{
    private capacidade: number;
    private topo: number;

    constructor(capacidade: number) {
        super()
        this.capacidade = capacidade;
        this.topo = -1; // Pilha vazia
    }

    // Verifica se a pilha está cheia
    estaCheia(): boolean {
        return this.topo === this.capacidade - 1;
    }

    // Empilha um elemento
    empilhar(elemento: any): void {
        if (this.estaCheia()) {
            throw new Error("Pilha cheia - Stack Overflow");
        }
        this.topo++;
        this.elementos[this.topo] = elemento;
    }

    // Desempilha um elemento
    desempilhar(): any {
        if (this.estaVazia()) {
            throw new Error("Pilha vazia - Stack Underflow");
        }
        const elemento = this.elementos[this.topo];
        this.topo--;
        return elemento;
    }

    // Retorna o elemento do topo sem remover
    elementoTopo(): any {
        if (this.estaVazia()) {
            throw new Error("Pilha vazia");
        }
        return this.elementos[this.topo];
    }


}


