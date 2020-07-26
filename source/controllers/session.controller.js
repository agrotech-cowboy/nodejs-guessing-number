// Serviços
const {
    ErrorService,
    LogService,
    RestService
} = require('../services');

// Modelos
const { Session } = require('../database/models');

// Endpoints
async function login(request, response) {

    try {

        const { body } = request;

        LogService.info('Iniciando login no Number Guessing.');

        // TODO: Adicionar valor máximo do palpite ao environment

        // O motivo de 1001 é porque o jogo considera do valor 0 ao 1000, ao invés de 1 a 1000,
        // logo, é necessário adicionar um número a mais para considerar a partir do 0, caso
        // contrário, os valores possíveis iriam variar apenas entre 0 a 999.
        const expected = Math.floor(Math.random() * 1001);

        const session = await Session.create({ expected });
        const token = await session.generateToken();

        LogService.info('Login efetuado no Number Guessing.', { id: session.id, host: session.host });

        RestService.ok(response, { session, token });
    } catch (error) {
        return ErrorService.internalError(response, request.originalUrl, 'Ocorreu um erro ao realizar login no Number Guessing.', { message: error.message, stack: error.stack });
    }
}

module.exports = {
    login
};