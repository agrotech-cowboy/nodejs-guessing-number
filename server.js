// Bibliotecas
const cors = require('cors');
const express = require('express');
const http = require('http');
const parser = require('body-parser');

// Serviços
const { LogService } = require('./source/services');

// Constantes
const PORT = process.env.PORT || 1000;

// Rotas
const routes = require('./source/routes');

// Banco de dados
require('./source/database');

const application = express();

application
    .use(cors())
    .use(parser.json({ limit: '5mb' }))
    .use(parser.urlencoded({ limit: '5mb', extended: false }))
    .use('/api', routes);

const server = http.createServer(application);

server.listen(PORT, () => {
    LogService.info(`O servidor está rodando na porta ${PORT}.`);
});