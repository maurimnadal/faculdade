import { ArrayGenerico } from "./arraygenerico"
import { Carros } from "./carros"


let novoArray: Array<string> = new Array<string>()
novoArray.push("a")
novoArray.push("b")

let novoArray1: Array<number> = new Array<number>()
novoArray1.push(1)
novoArray1.push(2)

let novoArray3: Array<Carros> = new Array<Carros>()
let car1: Carros = new Carros()
car1.modelo = "ww"
car1.marca = "Fusca"
novoArray3.push(car1)

let ag1: ArrayGenerico<string> = new ArrayGenerico<string>()
ag1.push("a")
ag1.push("b")
console.log(ag1.pop())

let ag2: ArrayGenerico<number> = new ArrayGenerico<number>()
ag2.push(1)
ag2.push(2)
console.log(ag2.pop())