//let nota1 = 7
//let nota2 = 8
//let nota3 = 6
//let media = (nota1 + nota2 + nota3) /3
//console.log(media)

//ESTRUTURAS CONDICIONAIS

//if(condição/expressão lógica(true or false)){
//}
//if(condição) console.log() - somente quando tiver só o comando
//if(media >= 7) { // TRUE
//    console.log("Aprovado")
//} else  // FALSE
//    if(media > 1.6) {
//        console.log("Exame")
//    }else {
//    console.log("Reprovado")
//}
//if(media < 7)

//if(media >= 7) {
//    console.log("Aprovado")
//} else if (media > 1.6) {
//    console.log("Exame")
//} else {
//    console.log("Reprovado")
//}

//if (media >= 7) console.log("Aprovado")
//else if(media > 1.6) console.log("Exame")
//else console.log("Reprovado")

////let a = 5, b = 4, c = 3
//let equilatero = (a === b && b === c)
//let escaleno = (a !== b && b !== c && a !== c)
//let isosceles = (a === b && a !== c || a == c && a != b || b == c && b != a)
//let triangulo = (a + b > c) && (b + c > a) && (a + c > b)
//if(triangulo) console.log("é triangulo")
//if(equilatero) console.log("equilátero")
//else if(isosceles) console.log("isosceles")
//else if(escaleno) console.log("escaleno")
//else console.log("não é triangulo")

let media = 7;
let mensagem = "";
if (media >= 7) {
  mensagem = "aprovado";
} else if (media > 1.6) {
  mensagem = "exame";
} else {
  mensagem = "reprovado";
}

//mensagem = (media >= 7) ? "aprovado" : "reprovado" //estrutura ternária (? = se / : = se não)

mensagem = media >= 7 ? "aprovado" : media > 1.6 ? "exame" : "reprovado";

let a = 4,
  b = 5,
  c = 9;
if (a < b && b < c) console.log(a, b, c);
else if (b < c && c < a) console.log(b, c, a);
else if (c < a && a < b) console.log(c, a, b);
else if (a < c && c < b) console.log(a, c, b);
else if (b < a && a < c) console.log(b, a, c);
else if (c < b && b < a) console.log(c, b, a);

let altura = 1.75,
  sexo = "M";
let peso;
if (sexo === "M") {
  peso = 72.7 * altura - 58;
} else if (sexo === "F") {
  peso = 62.1 * altura - 44.7;
}
console.log(peso);

let n1 = 6,
  n2 = 3,
  op = "+";
if (op === "+") {
  console.log(n1 + n2);
} else if (op === "-") {
  console.log(n1 - n2);
} else if (op === "*") {
  console.log(n1 * n2);
} else if (op === "/") {
  console.log(n1 / n2);
} else {
    console.log("operação inválida")
}

let login = "admin" 
let senha = "admin"
if(login === senha){
    console.log("Acesso Permitido")
}else console.log("Acesso Negado")



