<h1 align="center">API To Do List</h1>

<p align="center"> A **API-ToDoList** é uma API REST simples para gerenciamento de tarefas, desenvolvida utilizando Node.js e SQLite. O objetivo é permitir a criação, atualização, listagem, e exclusão de tarefas, além de possibilitar a categorização do status das mesmas.</p>

<h4 align="center">Concluído</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Funcionalidades](#Funcionalidades)
   * [Estrutura do Projeto](#-Estrutura-do-Projeto)
      * [API To Do List](#-API-ToDoList)
   * [Pré Requisitos](#-Pré-requisitos)
      * [Backend (API)](#-Backend-(API))
   * [Testes da API](#-Para-testar-a-API,-siga-as-etapas-abaixo:)
   * [Tecnologias Utilizadas](#-Tecnologias-Utilizadas)
   * [Como contribuir no projeto](#-Como-contribuir-no-projeto)
   * [Autor](#-Autor)
   * [Licença](#-Licença)
<!--te-->

---

## Funcionalidades

- [x] Cadastro de novas tarefas com id, title, description, status e data
- [x] Mostrar todas as tarefas
- [x] Mostrar as tarefas de acordo com seu status
- [x] Atualizar tarefa já existente a partir do Id
- [x] Deletar tarefa a partir do Id

---
## Estrutura do Projeto

## API-ToDoList
    /API-ToDoList
    │
    ├── /controller
    │       └── tarefas.js
    ├── /src
    │   ├── /config
    │   │   └── configDB.js
    │   ├── /routes
    │   │   └── tarefasRoutes.js
    │   └── app.js
    │
    ├── /node_modules
    │
    ├── .gitignore
    ├── database.db
    ├── package.json
    ├── package-lock.json
    └── README.md

## Pré-requisitos

### Backend (API)

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [SQLite](https://sqlite.org/), [Express.js](https://expressjs.com/pt-br/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).


* Clonar o repositório:

```
git clone https://github.com/mariTrrs/API-ToDoList.git
```

* Instalar dependências e iniciar o servidor:

```
npm install
npm start
```

O servidor iniciará na porta:3000 - acesse <http://localhost:3000>

### Para testar a API, siga as etapas abaixo:

1. Utilize o Insomnia para enviar requisições HTTP

2. Para testar se a conexão da API está funcionando (GET/), envie uma requisição para:
```
GET/ <http://localhost:3000/>
```
Ele deve retornar: "API rodando".

3. Para criar uma nova tarefa (POST), envie uma requisição para:
POST <http://localhost:3000/tarefa>
Exemplo de corpo da requisição:
```
{
  "title": "Nova tarefa",
  "description": "Descrição da tarefa",
  "status": "Pendente"
}
```

4. Para atualizar uma tarefa (PUT), envie uma requisição para:
PUT <http://localhost:3000/tarefa>
Exemplo de corpo da requisição:
```
{
  "id": 1,
  "title": "Tarefa atualizada",
  "description": "Descrição atualizada",
  "status": "Concluída"
}
```

5. Para deletar uma tarefa (DELETE), envie uma requisição para:
DELETE <http://localhost:3000/tarefa>
Exemplo de corpo da requisição:
```
{
  "id": 1
}
```

6. Para testar a listagem de tarefas (GET), envie uma requisição para:
GET <http://localhost:3000/tarefas>

6. Para testar a listagem de tarefas (GET) para cada status, envie uma requisição para:
GET <http://localhost:3000/tarefasByStatus>
Exemplo de corpo da requisição:
```
{
	"status": "Pendente"
}
```

Pronto! Agora você pode testar todas as rotas da API.

### Tecnologias Utilizadas
* Node.js: Plataforma de desenvolvimento para construção da API.
* SQLite: Banco de dados utilizado para armazenar as tarefas.
* Express.js: Framework para construção das rotas e gerenciamento das requisições.
* JSDoc: Ferramenta para documentar o código.

### Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
5. Abra uma pull request.

### Autor
 Mariana Pacheco Torres

 ### Licença
Este projeto esta sobe a licença [MIT](./LICENSE).