var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero_testes = parseInt(lines[0]); 

for (let i = 1; i <= numero_testes; i++) {
    let quantidade_notas = parseInt(lines[i * 2 - 1]); 
    let notas = lines[i * 2].split(" ").map(Number); 

    if (notas.length === quantidade_notas) {
        let notas_original = [...notas]; // Cria uma cópia do array original

        // Ordena as notas em ordem decrescente
        for (let j = 0; j < notas.length; j++) {
            for (let k = 0; k < notas.length - j - 1; k++) {
                if (notas[k] < notas[k + 1]) {
                    [notas[k], notas[k + 1]] = [notas[k + 1], notas[k]];
                }
            }
        }
        
        // Conta os números que permanecem fixos
        let contagem = 0;
        for (let l = 0; l < notas_original.length; l++) {
            if (notas_original[l] === notas[l]) {
                contagem++;
            }
        }

        console.log(contagem); 
    }
}