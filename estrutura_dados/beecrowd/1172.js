var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n').map(Number); // Converte cada linha em número

for (let i = 0; i < 10; i++) {
    if (lines[i] <= 0) {
        lines[i] = 1;
    }
    console.log(`X[${i}] = ${lines[i]}`);
}