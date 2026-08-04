const { verificarIdade } = require('../src/verificar-idade')

describe('Testes de cobertura de instruções', () => {
    
    test('Deve validar maioridade quando idade for maior ou igual a 18 anos', () => {
        expect(verificarIdade(18)).toBe('Maior de idade')
    });
    //Teste pulado pois a técnica não é a de instrução e sim a de decisão
    test('Deve validar se da erro quando idade for menor que 18 anos', () => {
        expect(verificarIdade(17)).not.toBe('Maior de idade')
    });
});