# Toughts

Este projeto faz parte do curso **Crie aplicações completas com Node.js, Express, MongoDB, MySQL, React.js, arquitetura MVC e muito mais!** do professor Matheus Battisti. O **Toughts** é uma aplicação que permite aos usuários compartilhar pensamentos, utilizando uma stack completa com Node.js, Express, MySQL e Sequelize.

## 🚀 Tecnologias Utilizadas

- **Backend:** Node.js, Express, Sequelize, MySQL
- **Frontend:** Handlebars, Bootstrap
- **Autenticação:** Bcrypt.js, Express Session

## 📌 Funcionalidades

- Cadastro e login de usuários
- Criação, edição e exclusão de pensamentos
- Listagem de pensamentos públicos
- Gerenciamento de pensamentos do usuário logado
- Busca de pensamentos

## 📂 Estrutura do Projeto

```
Toughts/
│-- public/         # Arquivos estáticos (CSS, JS, imagens)
│-- views/          # Templates Handlebars
│-- config/         # Configuração do banco de dados
│-- controllers/    # Controladores da aplicação
│-- models/         # Modelos do banco de dados
│-- routes/         # Definição das rotas
│-- app.js          # Arquivo principal
```

## ⚙️ Como Executar

### 1️⃣ Pré-requisitos

- Node.js instalado
- MySQL instalado e rodando

### 2️⃣ Instalação

```bash
# Clone o repositório
git clone https://github.com//NatanaelAquino/Projeto_Toughts.git

# Acesse a pasta do projeto
cd toughts

# Instale as dependências
npm install
```

### 3️⃣ Configuração do Banco de Dados

Crie um banco de dados MySQL e configure as credenciais no arquivo `.env`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=toughts
DB_DIALECT=mysql
SECRET=session_secret
```

Rodar as migrations para criar as tabelas:
```bash
npm run migrate
```

### 4️⃣ Executando o Projeto

```bash
npm start
```
O servidor estará rodando em: `http://localhost:3000`

## 🛠 Melhorias Futuras

- Implementar um sistema de curtidas
- Criar API REST para consumo via frontend em React

## 📜 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso do Matheus Battisti.

