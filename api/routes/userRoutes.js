const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.post('/cadastro', userController.cadastro);
// router.get('/cadastro', userController.cadastro , (req, res) => {
//   res.send('Esta rota aceita apenas POST para cadastro.');
// });

module.exports = router;