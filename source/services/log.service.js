// Bibliotecas
const filesystem = require('fs');
const path = require('path');

// Utilitários
const { DateUtil } = require('../utils');

/**
 * Escreve uma informação no arquivo de log.
 * 
 * @param {String} message Informação a ser escrita
 * @param {String} body Corpo da requisição
 */
function info(message, body) {

    write(`[${DateUtil.getDateTime()}][INFO]: ${message}`);

    if (body) {
        write(`[${DateUtil.getDateTime()}][INFO]: Body: ${JSON.stringify(body)}`);
    }

    write('');
}

/**
 * Escreve um alerta no arquivo de log.
 * 
 * @param {String} message Alerta a ser escrito
 */
function warn(message) {
    write(`[${DateUtil.getDateTime()}][WARN]: ${message}`);

    write('');
}

/**
 * Escreve um erro no arquivo de log.
 * 
 * @param {String} message Erro a ser escrito 
 * @param {String} path Endepoint do erro
 * @param {Object} error Erro da requisição
 */
function error(message, path, error) {

    write(`[${DateUtil.getDateTime()}][ERRO]: ${message}`);
    write(`[${DateUtil.getDateTime()}][ERRO]: Path: ${path}`);

    if (error.stack) {

        const stack = error.stack.split('\n');

        write(`[${DateUtil.getDateTime()}][ERRO]: Error: ${error.message}`);
        write(`[${DateUtil.getDateTime()}][ERRO]: Stack: ${stack[0]}`);

        for (let index = 1; index < stack.length; index++) {
            write(stack[index]);
        }
    } else {
        write(`[${DateUtil.getDateTime()}][ERRO]: Error: ${JSON.stringify(error)}`);
    }

    write('');
}

/**
 * Escreve uma nova linha no arquivo de log.
 * 
 * @param {String} message Mensagem a ser escrita no arquivo
 */
function write(message) {

    // A mensagem também deve ser exibida no console
    log(message);

    // É necessário verificar se a pasta de logs existe
    const directory = `${path.join(__dirname, '../../')}logs`;

    if (!filesystem.existsSync(directory)) {
        filesystem.mkdirSync(directory);
    }

    filesystem.appendFileSync(`${directory}\\${DateUtil.getDate()}.txt`, `${message}\n`, (error) => {

        if (error) {
            log(error);
        }
    });
}

/**
 * Escreve uma mensagem no terminal, apenas no modo de desenvolvimento.
 * 
 * @param {String} message Mensagem a ser escrita no terminal
 */
function log(message) {

    if (process.env.NODE_ENV !== 'production') {
        console.log(message);
    }
}

module.exports = {
    info,
    warn,
    error,
    log
}