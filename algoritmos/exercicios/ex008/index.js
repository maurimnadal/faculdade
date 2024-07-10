total_eleitores = 100
votos_brancos = 15
votos_nulo = 7
votos_validos = 75
                                            //n de casas decimais
console.log(votos_nulo / total_eleitores * 100).toFixed(2) + "%"

let n = 4 
let fat = 1

while(n > 1){
    fat = fat * n
    n--
} console.log("O fatorial é:", fat)

//sequencia de fibonacci
//1 1 2 3 5 8 13 21 34 55 89 144 233 377 610
let i = 0
let j = 1 
let quantidade = 1
console.log(1)
while(quantidade < 15){
    let proximo = i + j
    console.log(proximo)
    i = j
    j = proximo
    quantidade++
}

