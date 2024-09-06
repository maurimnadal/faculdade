var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n').map(Number); 

for (let i = 0; i < 10; i++) {
    let temp = lines[i];
    lines[i] = lines[19 - i];  
    lines[19 - i] = temp;
}

for (let i = 0; i < 20; i++) {
    console.log(`N[${i}] = ${lines[i]}`);
}