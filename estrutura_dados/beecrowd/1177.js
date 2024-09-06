var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = parseInt(input.trim()); 

var N = [];


for (let i = 0; i < 1000; i++) {
    N[i] = i % lines; 
}

for (let i = 0; i < 1000; i++) {
    console.log(`N[${i}] = ${N[i]}`);
}