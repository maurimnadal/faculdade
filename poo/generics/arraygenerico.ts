export class ArrayGenerico <T>{
    array: Array <T>

    constructor(){
        this.array = new Array()
    }

    push(obj: T){
        this.array.push(obj)
    }

    pop(): T | undefined{
        return this.array.pop()
    }

    toString(){
        return this.array.toString()
    }
}