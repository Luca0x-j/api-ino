const db = require('../models/db');
const bcrypt = require('bcrypt');

//Logica do Cadastro
const cadastroUser = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 20);
    const [result] = await db.query('INSERT INTO usuarios (email, password) VALUES (?, ?)', [email, hashedPassword]);
    return result.insertId;
};

//Logica do Login
const loginUser = async (email, password) => {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    const user = rows[0];

    if(!user) return null;
    const match = await bcrypt.compare(password, user.password);
    return match ? user : null;
}

//Logica da Velocidade
const salvarVelocidadeMoto = async (velocidade, id_usuario) => {
    await db.query('INSERT INTO speed (speed, id_usuario) VALUES (?, ?)', [velocidade, id_usuario]);
};

module.exports = {
    cadastroUser,
    loginUser,
    salvarVelocidadeMoto
}
