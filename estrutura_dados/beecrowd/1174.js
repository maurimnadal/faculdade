var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n'); 

for (let i = 0; i < 100; i++) {
    if (lines[i] <= 10) {
        console.log(`A[${i}] = ${parseFloat(lines[i]).toFixed(1)}`);
    }
    
}