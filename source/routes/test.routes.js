// Bibliotecas
const { Router } = require('express');

// Controladores
const Controller = require('../controllers/test.controller');

const router = Router();

// Endpoints
router.get('/ping', Controller.ping);

module.exports = router;