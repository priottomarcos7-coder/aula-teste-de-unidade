const {verificarParOuImpar} = require('../src/impar-ou-par');

describe('verificarParOuImpar', () => {

    beforeEach(() => {
        global.prompt = jest.fn();
        global.alert = jest.fn();
    });

    test('Deve alertar que o número 10 é Par ', () => {
        prompt.mockReturnValue(10);
        verificarParOuImpar();
        expect(global.alert).toHaveBeenCalledWith('O número digitado é Par');
    });

    test('Deve alertar que o número 7 é Ímpar ', () => {
        prompt.mockReturnValue(7);
        verificarParOuImpar();
        expect(global.alert).toHaveBeenCalledWith('O numero digitado é Ímpar');
    });

    test('Deve alertar o erro quando não for um número válido ', () => {
        prompt.mockReturnValue('abc');
        verificarParOuImpar();
        expect(global.alert).toHaveBeenCalledWith('Por favor, digite um número válido');
    });

    test('Deve alertar o erro quando inserir um caracter especial ', () => {
        prompt.mockReturnValue('&');
        verificarParOuImpar();
        expect(global.alert).toHaveBeenCalledWith('Por favor, digite um número válido');
    });

});