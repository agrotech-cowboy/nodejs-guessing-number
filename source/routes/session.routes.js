// Bibliotecas
const { Router } = require('express');

// Controladores
const Controller = require('../controllers/session.controller');

const router = Router();

// Endpoints
router.get('/', Controller.login);

module.exports = router;