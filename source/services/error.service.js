// Serviços
const LogService = require('./log.service');
const RestService = require('./rest.service');

/**
 * Emite um erro de requisição inválida.
 * 
 * @param {Object} response Objeto de resposta
 * @param {String} url Caminho da requisição
 * @param {String} message Mensagem personalizada de erro
 * @param {Object} error Objeto de erro
 */
function invalidRequest(response, url, message, error) {

    // Loga o erro com o body da requisição
    LogService.error(message, url, error);

    // Emite o erro de requisição inválida
    RestService.badRequest(response, message, error);
}

/**
 * Emite um erro interno do servidor.
 * 
 * @param {Object} response Objeto de resposta
 * @param {String} url Caminho da requisição
 * @param {String} message Mensagem personalizada de erro
 * @param {Object} error Objeto de erro
 */
function internalError(response, url, message, error) {

    // Loga o erro com o body da requisição
    LogService.error(message, url, error);

    // Emite o erro de requisição inválida
    RestService.internalError(response, message, error);
}

/**
 * Emite um erro interno do servidor.
 * 
 * @param {Object} response Objeto de resposta
 * @param {String} url Caminho da requisição
 * @param {String} message Mensagem personalizada de erro
 */
function notFound(response, url, message) {

    // Loga o erro com o body da requisição
    LogService.error(message, url, {});

    // Emite o erro de requisição inválida
    RestService.notFound(response, message);
}

/**
 * Emite um erro de autenticação.
 * 
 * @param {Object} response Objeto de resposta
 * @param {String} url Caminho da requisição
 * @param {String} message Mensagem personalizada de erro
 * @param {Object} error Objeto de erro
 */
function unauthorized(response, url, message, error) {

    // Loga o erro com o body da requisição
    LogService.error(message, url, error);

    // Emite o erro de requisição inválida
    RestService.unauthorized(response, message, error);
}

module.exports = {
    invalidRequest,
    internalError,
    notFound,
    unauthorized
}