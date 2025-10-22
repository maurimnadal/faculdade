const { calcularTotal } = require('../src/calculadora');
const somarMod = require('../src/somar');
test('deve simular somar retornando valor fixo', () => {
 // Espia e força a função somar() a sempre retornar 100
 const spy = jest.spyOn(somarMod, 'somar')
 .mockReturnValue(100); // valor fake
 // Executa a função calcularTotal que depende de somar()
 const resultado = calcularTotal(2, 3);
 // Verifica se a função espiada foi chamada corretamente
 expect(spy).toHaveBeenCalledWith(2, 3);
 expect(resultado).toBe(200); // (100 * 2)
 spy.mockRestore(); // volta ao original
});
