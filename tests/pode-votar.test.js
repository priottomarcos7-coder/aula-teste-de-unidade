const { avaliarVotacao } = require('../src/pode-votar')

describe('Teste de cobertura de decisões - Pode votar', () => {

    test('Deve permitir votar com maior de 18, ter título e ser brasileiro', () => {
        expect(avaliarVotacao(20, true, true)).toBe('Obrigatório')
    })

    test('Deve negar o voto para menor de 16, ter título e ser brasileiro', () => {
        expect(avaliarVotacao(15, true, true)).toBe('Negado')
    })

    test('Deve permitir o voto para idade 16, ter título e ser brasileiro', () => {
        expect(avaliarVotacao(16, true, true)).toBe('Facultativo')
    })

});


describe.only('Testes de cobertura de caminhos - Pode votar', () => {

    test('Deve negar o voto para menor de 16, não tem título e não é brasileiro', () => {
        expect(avaliarVotacao(15, false, false)).toBe('Negado')
    });

    test('Deve negar o voto para menor de 16, não tem título e é brasileiro', () => {
        expect(avaliarVotacao(15, false, true)).toBe('Negado')
    });

    test('Deve negar o voto para menor de 16, não tem título e é brasileiro', () => {
        expect(avaliarVotacao(15, true, true)).toBe('Negado')
    });

    test('Deve negar o voto para mainor de 18, não tem título e não é brasileiro', () => {
        expect(avaliarVotacao(18, false, false)).toBe('Negado')
    });

    test('Deve permitir voto para idade entre 18 e 70 anos, tem título e é brasileiro', () => {
        expect(avaliarVotacao(25, true, true)).toBe('Obrigatório')
    });

    test('Deve permitir voto para idade entre 16 e 17 anos, tem título e é brasileiro', () => {
        expect(avaliarVotacao(17, true, true)).toBe('Facultativo')
    });

    test('Deve permitir voto para maior de 70 anos, tem título e é brasileiro', () => {
        expect(avaliarVotacao(75, true, true)).toBe('Facultativo')
    });

});