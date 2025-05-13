# 🛍 Loja API
Uma **API RESTful** desenvolvida em **Node.js** com **Express** e **MySQL**,
que permite realizar operações de cadastro, listagem, atualização e exclusão de
produtos, categorias e usuários. Projetada com boas práticas de organização de
código, uso de middlewares, validações e integração com ESLint + Prettier.
---
## 🚀 Funcionalidades
- 🔹 `GET /products` – Lista todos os produtos
- 🔹 `GET /categories` – Lista todas as categorias
- 🔹 `GET /users` – Lista todos os usuários
- 🔹 `POST /products` – Cadastra um novo produto
- 🔹 `PUT /products/:id` – Atualiza um produto existente
- 🔹 `DELETE /products/:id` – Remove um produto
- ✅ Validação de campos obrigatórios
- 🧪 Testes via REST Client no VSCode
---
## 🧱 Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [REST
Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
---
## 📦 Instalação e uso
```
bash
# Clone o repositório
git clone https://github.com/seu-usuario/loja-api.git
cd loja-api
# Instale as dependências
npm install
# Configure o ambiente
cp .env.example .env
# Edite o .env com as configurações do seu MySQL
# Crie o banco de dados e tabelas
mysql -u root -p < scripts/create_database.sql
mysql -u root -p loja < scripts/create_tables.sql
mysql -u root -p loja < scripts/seed_data.sql
# Inicie a aplicação
node server.js
```