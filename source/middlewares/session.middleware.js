// Libraries
const jwt = require('jsonwebtoken');

// Serviços
const {
    ErrorService,
    RestService
} = require('../services');

// Modelos
const { Session } = require('../database/models');

async function authenticate(request, response, next) {

    try {   

        const header = request.header('Authorization');

        if (!header) {
            return ErrorService.unauthorized(response, request.originalUrl, 'O cabeçalho de autorização é obrigatório.', { property: 'authorization', expected: 'string' });
        }

        const token = header.replace('Bearer ', '');

        const data = jwt.verify(token, process.env.JWT_SECRET);

        const session = await Session.findByPk(data.id);

        if (!session) {
            return RestService.unauthorized(response, request.originalUrl, 'Não foi possível autorizar a requisição.', { property: 'authorization', expected: 'string' });
        }

        response.locals['session'] = session;
        response.locals['token'] = token;

        next();

    } catch (error) {
        return RestService.internalError(response, request.originalUrl, 'Não foi possível autorizar a requisição.', { message: error.message, stack: error.stack });
    }
}

module.exports = {
    authenticate
}