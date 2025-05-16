const userService = require('../services/userService');

const cadastro = async (req, res) => {
    const { email, password } = req.body;

    try {
        const id = await userService.cadastroUser(email, password);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso', id });
    } catch (error) {
    res.status(400).json({ message: 'Erro ao cadastrar usuário', error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

  try {
    const user = await userService.loginUser(email, password);
    if (user) {
      res.json({ message: 'Login bem-sucedido', user });
    } else {
      res.status(401).json({ message: 'Email ou senha incorretos' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro no login', error: error.message });
  }
};

module.exports = {
    cadastro,
    login
}