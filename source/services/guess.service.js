// Enumeráveis
const { ResultEnum } = require('../enums');

// TODO: Alterar localização, adicionar em um arquivo separada
const motivation = [
    'Continue tentando, você está cada vez mais próximo',
    'Não é este número, mas você pode dar quantos palpites quiser',
    'Parece que estamos progredindo, mais um pouco e você chega lá',
    'Mais algumas tentativas e vejo que teremos um vencedor'
];

/**
 * Verifica se o valor palpitado é equivalente a resposta, ou não.
 * 
 * @param {Number} guess Palpite
 * @param {Number} expected Valor esperado
 */
function calculate(guess, expected) {

    try {

        let response = {
            guess: guess
        }

        if (guess > 1000) {

            response.result = ResultEnum.LESS;
                        
            response.text = {
                message: 'Infelizmente eu não trabalho com números maiores que',
                highlight: '1000',
                motivation: 'Está com dúvidas? Clique no menu de instruções'
            };

        } else if (guess < expected) {

            response.result = ResultEnum.MORE;
                        
            response.text = {
                message: 'Eu estou pensando em um número',
                highlight: 'maior',
                motivation: motivation[Math.floor(Math.random() * motivation.length)]
            };
        } else if (guess > expected) {

            response.result = ResultEnum.LESS;
                        
            response.text = {
                message: 'Eu estou pensando em um número',
                highlight: 'menor',
                motivation: motivation[Math.floor(Math.random() * motivation.length)]
            };
        } else {
            response.result = ResultEnum.EQUAL;
                        
            response.text = {
                message: 'Parabéns! Você acertou',
                highlight: 'bem na mosca',
                motivation: 'Parece que alguém está lendo meus pensamentos...'
            };
        }

        return response;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    calculate
}