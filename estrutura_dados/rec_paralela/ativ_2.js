// Converter valor decimal para binário

const Stack = require("./stack")

function ConvertDecimalToBinary(number){
    let result = number
    const stack = new Stack
    while(result !== 0){
        rest = result % 2
        result = Math.floor(result / 2)
        stack.push(rest)
    }
    let binary = []
    while(stack.size() > 0){
        binary.push(stack.pop())
    }
    return binary.join("")
}

console.log(ConvertDecimalToBinary(10))


