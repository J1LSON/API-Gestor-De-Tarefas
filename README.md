# Documentação da API Tasker

## Visão Geral

Tasker é uma API para gestão de tarefas que permite aos usuários registrar-se, fazer login e gerenciar suas tarefas. Esta documentação fornece detalhes sobre os endpoints disponíveis, suas funcionalidades e como interagir com a API.

## Endpoints de Autenticação

### Registrar Usuário

**Endpoint:** `POST /register`

**Descrição:** Registra um novo usuário.

**Corpo da Requisição:**

- `name`: Nome do usuário (string)
- `email`: E-mail do usuário (string)
- `password`: Senha do usuário (string)

**Respostas:**

- **201 Criado**
  - Mensagem: "Usuário Registrado Com Sucesso"
  - Dados do usuário incluídos na resposta

- **400 Requisição Inválida**
  - Mensagem de erro: "Erro!"

### Login de Usuário

**Endpoint:** `POST /login`

**Descrição:** Faz login de um usuário existente e retorna um token JWT.

**Corpo da Requisição:**

- `email`: E-mail do usuário (string)
- `password`: Senha do usuário (string)

**Respostas:**

- **200 OK**
  - Token JWT retornado

- **401 Não Autorizado**
  - Mensagem de erro: "Email ou Password Inválidos!"

- **500 Erro Interno do Servidor**
  - Mensagem de erro: "Algo correu mal!"

## Endpoints de Tarefas

Todos os endpoints de tarefas requerem autenticação. Certifique-se de incluir um token JWT válido no cabeçalho da requisição.

### Criar Tarefa

**Endpoint:** `POST /tasks`

**Descrição:** Cria uma nova tarefa.

**Corpo da Requisição:**

- `title`: Título da tarefa (string)
- `description`: Descrição da tarefa (string)
- `priority`: Prioridade da tarefa (string)
- `dueDate`: Data de vencimento da tarefa (string, formato ISO 8601)

**Respostas:**

- **201 Criado**
  - Dados da tarefa criada

- **400 Requisição Inválida**
  - Mensagem de erro: "Falha ao criar Tarefa"

### Obter Tarefas

**Endpoint:** `GET /tasks`

**Descrição:** Recupera todas as tarefas do usuário autenticado.

**Respostas:**

- **200 OK**
  - Lista de tarefas do usuário

- **500 Erro Interno do Servidor**
  - Mensagem de erro: "Falha ao buscar tarefas"

### Atualizar Tarefa

**Endpoint:** `PUT /tasks/:id`

**Descrição:** Atualiza uma tarefa existente.

**Parâmetros da URL:**

- `id`: ID da tarefa a ser atualizada (string)

**Corpo da Requisição:**

- `title`: Título da tarefa (string, opcional)
- `description`: Descrição da tarefa (string, opcional)
- `priority`: Prioridade da tarefa (string, opcional)
- `dueDate`: Data de vencimento da tarefa (string, formato ISO 8601, opcional)

**Respostas:**

- **200 OK**
  - Dados da tarefa atualizada

- **400 Requisição Inválida**
  - Mensagem de erro: "Falha ao atualizar tarefa"

- **404 Não Encontrado**
  - Mensagem de erro: "Tarefa não encontrada"

### Deletar Tarefa

**Endpoint:** `DELETE /tasks/:id`

**Descrição:** Exclui uma tarefa existente.

**Parâmetros da URL:**

- `id`: ID da tarefa a ser excluída (string)

**Respostas:**

- **200 OK**
  - Mensagem: "Tarefa Eliminada com sucesso!"

- **404 Não Encontrado**
  - Mensagem de erro: "Tarefa não encontrada"

- **500 Erro Interno do Servidor**
  - Mensagem de erro: "Falha ao eliminar tarefa"
