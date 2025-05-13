export class EstruturaDados <T>{
    private _elementos: Array<T>;
    public get elementos(): Array<T> {
        return this._elementos;
    }
    public set elementos(value: Array<T>) {
        this._elementos = value;
    }

    constructor(){
        this._elementos = new Array
    }

    estaVazia(): boolean {
        return this.tamanho() === 0;
    }

    tamanho(): number {
        return this._elementos.length
    }

    imprimir(): void {
        if (this.estaVazia()) {
            console.log("[]");
            return;
        }

        let resultado = "[";
        for (let i = 0; i <= this._elementos.length - 1; i++) {
            resultado += this._elementos[i];
            if (i < this._elementos.length - 1) {
                resultado += ", ";
            }
        }
        resultado += "]";
        console.log(resultado);
    }
}