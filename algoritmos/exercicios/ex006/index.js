// let i = 0
// while(i < 10){
//     console.log(i)
//     i++
// }

// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i < 10)

//FOR 
//          1           2           3
//for( inicialização, condição, incremento){
//          4
//      comandos
//}      1, 2, 4, 3, 2, 4, 3...2
//estrutura com variavel de controle
//teste no inicio

//algoritmo q some os n pares de 1 a 100

// let i = 1
// let soma = 0
// // while(i <= 100){
// //     if(i % 2 === 0){
// //         soma = soma + i
// //     }
// //     i++
// // } console.log(soma)

// for (let i = 1; i <= 100; i++)
//     if (i % 2 === 0) {
//         soma = soma + i
//     }
// console.log(soma)

// //algoritmo q realize o produto de todos os numeros entre 1 e 100
// // let j = 1
// let produto = 1
// // while(j <= 100){
// //     if(j % 2 === 1){
// //         produto = produto * j
// // }j++
// // } console.log(produto)

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//         produto = produto * i
//     }
// } console.log(produto)

// //template string
// let a = 5
// let b = 7
// console.log(`O resultado de ${a} + ${b} é igual a ${a + b}`)

// //algoritmo q informe se um num é primo ou não. 
// //um n primo só pode ser divido por 1 e por ele msm

// let n = 5
// let d = 2
// while (d < n) {
//     if (n % d === 0) {
//         console.log(`o numero ${n} não é primo`)
//     }
//     d++
// } if (d === n) {
//     console.log(`o numero ${n} é primo`)
// }

// let quantidade = 0
// for(let n = 1; quantidade < 20; n++){
// let divisores = 0
// for (let i = 0; i <= n; i++) {
//     if (n % i === 0) {
//         divisores++
//     }
// }


// if (divisores === 2) {
//     console.log(n)
//     quantidade++}
// }
//     console.log(`o numero ${n} é primo`)
// } else {
//     console.log(`o numero ${n} não é primo`)
// }

let x = 0
for(let i = 1; i <= 100; i++){
    x = x + 1 * (i + 1)
    console.log('1/', i * (i + 1))
}



