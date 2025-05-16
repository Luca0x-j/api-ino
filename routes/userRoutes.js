const express = require('express');
const router = express.Router();
const userController = require('../controlles/userController');

router.post('/login', userController.login);
router.get('/cadastro', userController.cadastro);

module.exports = router;