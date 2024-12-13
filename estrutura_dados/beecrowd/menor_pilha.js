const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const n = parseInt(lines[0]); // Número de operações
const stack = [];
const minStack = [];
let result = [];

// Processar cada operação
for (let i = 1; i <= n; i++) {
    const operation = lines[i].trim();

    if (operation.startsWith("PUSH")) {
        // Operação PUSH
        const value = parseInt(operation.split(" ")[1]);
        stack.push(value);

        // Atualizar minStack
        if (minStack.length === 0 || value <= minStack[minStack.length - 1]) {
            minStack.push(value);
        }
    } else if (operation === "POP") {
        // Operação POP
        if (stack.length === 0) {
            result.push("EMPTY");
        } else {
            const removed = stack.pop();

            // Atualizar minStack
            if (removed === minStack[minStack.length - 1]) {
                minStack.pop();
            }
        }
    } else if (operation === "MIN") {
        // Operação MIN
        if (minStack.length === 0) {
            result.push("EMPTY");
        } else {
            result.push(minStack[minStack.length - 1]);
        }
    }
}

// Imprimir o resultado
console.log(result.join('\n'));