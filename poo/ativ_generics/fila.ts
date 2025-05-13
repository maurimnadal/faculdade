import { EstruturaDados } from "./estruturaDados";


export class Fila extends EstruturaDados <Fila>{
    private inicio: number;
    private fim: number;

    constructor() {
        super()
        this.inicio = 0;
        this.fim = 0;

    }


    enfileirar(elemento: any): void {
        this.elementos[this.fim] = elemento;
        this.fim++;
    }

    desenfileirar(): any {
        if (this.estaVazia()) {
            return null
        }
        const removido = this.elementos[this.inicio];
        this.inicio++;
        return removido;
    }



    proximo(): any {
        if (this.estaVazia()) {
            return null;
        }
        return this.elementos[this.inicio];
    }

}