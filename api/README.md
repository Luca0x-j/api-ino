# Api do Projeto-Arduino

# Sistema de Cadastro, Login e medidor de Velocidade com Node.js 🚀


## Descrição
Este é um sistema simples de cadastro, login e Moto velocidade, desenvolvido com Node.js, Express e MySQL.

O objetivo e fornecer comunicação entre Backend e Banco de Dados, para armazena dados excutados pelo app.


## Funcionalidades

- Cadastro de usuários com email e senha
- Criptografia de senhas com bcrypt
- Login de usuário com email e senha
- Filtrador de velocidade do moto com speed
- Conexão com banco de dados MySQL


## Tecnologias Utilizadas

- Node.js
- Express
- MySQL2
- bcrypt
- dotenv


## Estrutura do Projeto

📁 api 
├── 📁 controllers  
├── 📁 models  
├── 📁 routes  
├── 📁 services  
└── app.js


## Como Rodar o Projeto
### Pré-requisitos
- Node.js instalado
- MySQL rodando

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/Luca0x-j/api-ino.git

2. Instale as dependências
npm install

3.Configure o arquivo .env

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco

4.Rode as migrações no MySQL (ou crie a estrutura do banco manualmente)

5.Inicie o projeto

npm start



## Autor
Desenvolvido por [Lucas Juliano](https://github.com/Luca0x-j)
## Licença
Este projeto está sob a licença MIT.
