// Serviços
const {
    ErrorService,
    GuessService,
    LogService,
    RestService
} = require('../services');

// Modelos
const { Guess } = require('../database/models');

// Endpoints
async function guess(request, response) {

    try {

        const { body } = request;
        const { session } = response.locals;

        LogService.info('Iniciando criação de palpite no Number Guessing.', { guess: body.guess });

        const guess = await Guess.create({ 
            value: body.guess,
            session: session.id
        });

        LogService.info('Palpite criado no Number Guessing.', { id: guess.id, guess: guess.value });

        const result = GuessService.calculate(guess.value, session.expected);

        LogService.info('Palpite calculado no Number Guessing.', { guess: result.guess, result: result.result });

        RestService.ok(response, result);
    } catch (error) {
        return ErrorService.internalError(response, request.originalUrl, 'Ocorreu um erro ao criar palpite no Number Guessing.', { message: error.message, stack: error.stack });
    }
}

module.exports = {
    guess
};