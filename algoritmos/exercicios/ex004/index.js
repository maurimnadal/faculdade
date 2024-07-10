// //if ternário
// //let media = 7
// //console.log(media >= 7 ?"aprovado":"reprovado")

// //SWITCH

// //switch (opção){
// //( if) case valor1: b1;
// //(parada)        break;
// //      case valor2: b2;
// //                break;
// //(else)default: b3//
// //}

// //let operacao = 1;

// //switch(operacao){
// //    case 1:
// //        console.log("crédito selecionado")
// //        break
// //    case 2:
// //        console.log("débito selecionado")
// //        break
// //    default:
// //        console.log("opção inválida")
// //}

// //Exercicios

// let maca = 15;
// switch (maca) {
//   case maca < 12:
//     console.log(maca * 0.3 + "R$");
//     break;
//   default:
//     console.log(maca * 0.25 + "R$");
// }

// let n = 5;
// if (n % 2 === 0) {
//   console.log("par");
// } else console.log("ímpar");

// let number = 0;
// if (number > 0) {
//   console.log("positivo");
// } else if (number === 0) {
//   console.log("zero");
// } else {
//   console.log("negativo");
// }

// let gremio = 3
// let inter = 2
// if(gremio > inter){
//     console.log("gremio venceu")
// }else if(gremio < inter){
//     console.log("inter venceu")
// }else console.log("empate")

// let n1= 5, n2 = 16
// let resultado = n1 + n2
// if(n1 + n2 <= 20){
//     console.log(resultado - 5)
// } else console.log(resultado + 8)

// let salario = 3000
// if(salario <= 600){
//     console.log("isento")
// }else if(salario > 600 && salario <= 1200){
//     console.log((salario * 0.2) + "R$ de desconto")
// }else if(salario > 1200 && salario <= 2000){
//     console.log((salario * 0.25) + "R$ de desconto")
// }else console.log((salario * 0.3) + "R$ de desconto")

let estado = "rs";
switch (estado) {
  case "sp": console.log("paulista"); break;
  case "rj": console.log("carioca"); break;
  case "mg": console.log("mineiro"); break;
  default: console.log("outros estados");
}

if (estado === "sp") {
  console.log("paulista");
} else if (estado === "rj") {
  console.log("carioca");
} else if (estado === "mg") {
  console.log("mineiro");
} else console.log("outros estados");
