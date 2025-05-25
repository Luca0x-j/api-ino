const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login);//get
router.post('/cadastro', userController.cadastro);
router.post('/velocidade', userController.salvarVelocidade);

module.exports = router;