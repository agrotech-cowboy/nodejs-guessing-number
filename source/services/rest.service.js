/**
 * Retorna uma resposta 200 (OK).
 * 
 * @param {Object} response Objeto de resposta do servidor
 * @param {Object} content Conteúdo da resposta
 */
function ok(response, content = {}) {
    response.status(200);
    response.json(content);
}

/**
 * Retorna uma resposta 400 (BAD REQUEST).
 * 
 * @param {Object} response Objeto de resposta do servidor 
 * @param {String} type Tipo do erro 
 * @param {String} message Resumo do erro 
 * @param {Object} error Objeto de erro
 */
function badRequest(response, type, message, error = {}) {
    response
        .status(400)
        .json({ type, message, error });
}

/**
 * Retorna uma resposta 401 (UNAUTHORIZED).
 * 
 * @param {Object} response Objeto de resposta do servidor 
 * @param {String} type Tipo do erro 
 * @param {String} message Resumo do erro 
 * @param {Object} error Objeto de erro
 */
function unauthorized(response, type, message, error = {}) {
    response
        .status(401)
        .json({ type, message, error });
}

/**
 * Retorna uma resposta 404 (NOT FOUND).
 * 
 * @param {Object} response Objeto de resposta do servidor
 * @param {String} type Tipo do erro 
 * @param {String} message Resumo do erro 
 * @param {Object} error Objeto de erro
 */
function notFound(response, type, message, error = {}) {
    response
        .status(404)
        .json({ type, message, error });
}

/**
 * Retorna uma resposta 500 (INTERNAL SERVER ERROR).
 * 
 * @param {Object} response Objeto de resposta do servidor
 * @param {String} type Tipo do erro 
 * @param {String} message Resumo do erro 
 * @param {Object} error Objeto de erro
 */
function internalError(response, type, message, error = {}) {
    response
        .status(500)
        .json({ type, message, error });
}

module.exports = {
    ok,
    badRequest,
    unauthorized,
    notFound,
    internalError
}