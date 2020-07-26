// Bibliotecas
const { Router } = require('express');

// Controladores
const Controller = require('../controllers/guess.controller');

// Middlewares
const Middleware = require('../middlewares/session.middleware');

const router = Router();

// Endpoints
router.post('/', Middleware.authenticate, Controller.guess);

module.exports = router;