const userService = require('../services/userService');


//Cadastro
const cadastro = async (req, res) => {
    const { email, password } = req.body;// bory;

    console.log("Email recebido:", email);
    console.log("Password recebido:", password);

    if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
    }


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

//Login
const login = async (req, res) => {

  const { email, password } = req.query;

  console.log("Email recebido:", email);
  console.log("Password recebido:", password);

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

//Velocidade Motor
const salvarVelocidade = async (req, res) => {
  const { velocidade, id_usuario } = req.body;

  if (!velocidade || !id_usuario) {
    return res.status(400).json({ message: 'Velocidade é obrigatória' });
  }

  try {
    await userService.salvarVelocidadeMoto(velocidade, id_usuario);
    res.status(201).json({ message: 'Velocidade salva com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao salvar velocidade', error: error.message });
  }
};

module.exports = {
    cadastro,
    login,
    salvarVelocidade
}