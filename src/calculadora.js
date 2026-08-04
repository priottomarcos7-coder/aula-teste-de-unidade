class Calculadora {

    somar(a, b) {
        return a + b;
    }

    dividir(a, b) {
        if (b === 0) {
            return 'Divisão por zero não é permitida.';
        }
        return a / b;

    }

    subtrair(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

}


module.exports = new Calculadora();