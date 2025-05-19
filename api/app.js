const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', userRoutes);

const PORT = 3300;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});