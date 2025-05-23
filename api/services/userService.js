const db = require('../models/db');
const bcrypt = require('bcrypt');

const cadastroUser = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 20);
    const [result] = await db.query('INSERT INTO usuarios (email, password) VALUES (?, ?)', [email, hashedPassword]);
    return result.insertId;
};

const loginUser = async (email, password) => {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    const user = rows[0];

    if(!user) return null;
    const match = await bcrypt.compare(password, user.password);
    return match ? user : null;
}

module.exports = {
    cadastroUser,
    loginUser
}
