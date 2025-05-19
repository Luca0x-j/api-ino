const userService = require('../services/userService');

const cadastro = async (req, res) => {
    const { email, password } = req.query;// bory;

    try {
        const id = await userService.cadastroUser(email, password);

        if (!email || !password) {
          return res.status(400).json({ message: 'Email e senha são obrigatórios' });
        }

        res.status(201).json({ message: 'Usuário cadastrado com sucesso', id });
        } catch (error) {
          res.status(400).json({ message: 'Erro ao cadastrar usuário', error: error.message });
    }
};

const login = async (req, res) => {

  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  try {
    const user = await userService.loginUser(email, password);
    if (user) {
      const { password: _, ...userData } = user;
      res.json({ message: 'Login bem-sucedido', user: userData });
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