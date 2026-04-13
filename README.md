# COMO RODAR O PROJETO

## 1. Clone o repositório

## 2. Subir os containers (MySQL + MongoDB) - docker-compose up -d

## 3. Criar o banco e tabela (MySQL)

Entrar no container:

docker exec -it mysql_db mysql -u root -p

Senha:root

Executar:
CREATE DATABASE IF NOT EXISTS escola;
USE escola;

CREATE TABLE IF NOT EXISTS alunos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  idade INT
);

## 4. Instalar dependências - npm install

## 5. Rodar o servidor - node src/app.js

Servidor rodando em: http://localhost:3000

## 6. Testando a API NO Thunder Client

Criar aluno - POST /alunos

LINK: http://localhost:3000/alunos

Body:
{
  "nome": "Vitória",
  "idade": 20
}

LISTAR ALUNOS - GET /alunos

ATUALIZAR ALUNO - PUT /alunos/:id

Body:
{
  "nome": "Novo Nome",
  "idade": 25
}

Deletar aluno - DELETE /alunos/:id

PRODUTOS (MONGO DB)

Criar produto - POST /produtos

Body:
{
  "nome": "Teclado",
  "preco": 1500
}

Listar produtos - GET /produtos

ATUALIZAR PRODUTO - PUT /produtos/:id
- Usar o id retornado no GET

DELETAR PRODUTO - DELETE /produtos/:id

## 7 - Observações
O MySQL utiliza a porta 3311
O MongoDB utiliza a porta 27017
O MongoDB usa _id como identificador (não numérico)




   
