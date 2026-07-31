/*
Regras (exemplo prático inspirado na legislação brasileira):
- Só pode votar se for brasileiro, tiver título de eleitor e tiver pelo menos 16 anos;
- Votação obrigatória entre 18 e 70 anos (inclusive).
- Votação facultativa entre 16-17 anos e acima de 70 anos.
*/

function avaliarVotacao(idade, temTitulo, isBrasileiro) {

    // Negado se algum requisito básico não for atendido
    if (!isBrasileiro || !temTitulo || idade < 16) {
        return 'Negado'
        /* 
        teste 1 = brasileiro (false), título (false), idade 15 = Negado
        teste 2 = brasileiro (true), título (false), idade 15 = Negado
        teste 3 = brasileiro (true), título (true), idade 15 = Negado
        teste 4 = brasileiro (false), título (false), idade 18 = Negado
        */
    }

    // Obrigatório: 18 a 70 anos
    if (idade >= 18 && idade <= 70) {
        return 'Obrigatório'
        /*
        teste 5 = brasileiro (true), título (true), idade 18 = Obrigatório
        teste 6 = brasileiro (true), título (true), idade 16 = Facultativo
        teste 7 = brasileiro (true), título (true), idade 75 = Facultativo
        */
    }

    // Facultativo: 16-17 ou > 70
    return 'Facultativo'
    
}

module.exports = { avaliarVotacao }