const calcularImposto = require('./calcularImposto');

describe('Cálculo de Imposto de Renda', () => {
    test('Salário até R$ 2.259,20 não deve pagar imposto', () => {
        expect(calcularImposto(2250)).toBe(0);
    });

    test('Salário de R$ 2.259,21 até R$ 2.826,65 deve aplicar 7,5% de alíquota e dedução', () => {
        expect(calcularImposto(2826.65)).toBeCloseTo(42.56, 2);
    });

    test('Salário de R$ 2.826,66 até R$ 3.751,05 deve aplicar 15% de alíquota e dedução', () => {
        expect(calcularImposto(3500)).toBeCloseTo(143.56, 2);
    });

    test('Salário de R$ 3.751,06 até R$ 4.664,68 deve aplicar 22,5% de alíquota e dedução', () => {
        expect(calcularImposto(4500)).toBeCloseTo(349.73, 2); // Atualize se necessário
    });
    
    test('Salário acima de R$ 4.664,68 deve aplicar 27,5% de alíquota e dedução', () => {
        expect(calcularImposto(5000)).toBeCloseTo(479, 2); // Atualize se necessário
    });
});