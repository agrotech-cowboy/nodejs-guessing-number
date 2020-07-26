// Serviços
const { 
    ErrorService, 
    LogService, 
    RestService 
} = require('../services');

// Endpoints
async function ping(request, response) {

    try {
        LogService.info('O controlador de testes foi acionado.');       
        RestService.ok(response, { result: 'Pong' });
    } catch (error) {
        return ErrorService.internalError(response, request.originalUrl, 'Ocorreu um erro testar o Number Guessing.', { message: error.message, stack: error.stack });
    }
}

module.exports = {
    ping
};