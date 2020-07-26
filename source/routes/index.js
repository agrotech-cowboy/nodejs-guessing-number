// Bibliotecas
const { Router } = require('express');

// Rotas
const test = require('./test.routes');
const session = require('./session.routes');
const guess = require('./guess.routes');

const router = Router();

// Endpoints
router.use('/test', test);
router.use('/session', session);
router.use('/guess', guess);

module.exports = router;