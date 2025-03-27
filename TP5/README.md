# TP5: API de dados e front-end para gestão de alunos

### Data: 27/03/2025  
### Autor: Tomás Silva A104362  
### Foto:
![Photo](../Photo.png)

---

## Resumo

Este projeto serve várias páginas principais, relativas a uma API de dados em `MongoDB`, para a gestão de alunos:

- Uma página principal com a lista de alunos, com links para editar ou eliminar cada aluno.
- Uma página para registar novos alunos.
- Uma página para editar os dados de um aluno existente.
- Uma página para eliminar um aluno.

---

## Estrutura do Projeto

- **`routes/alunos.js`**: Implementação das rotas para interagir com a API de alunos.
- **`routes/front.js`**: Implementação das rotas para renderizar as páginas pug.
- **`controllers/alunos.js`**: Controlador com as funções para interagir com o banco de dados MongoDB.
- **`models/aluno.js`**: Modelo Mongoose para a coleção de alunos.
- **views**: Diretório com os ficheiros Pug para renderizar as páginas pug.
  - `studentsListPage.pug`: Página inicial com a lista de alunos.
  - `studentsFormPage.pug`: Página para registar novos alunos.
  - `studentFormEditPage.pug`: Página para editar os dados de um aluno.
  - `error.pug`: Página para exibir erros.
- **public**: Diretório com recursos estáticos como CSS e imagens.

---

## Funcionalidades

1. **Listar Alunos**:
   - Exibe uma lista de todos os alunos disponíveis.
   - Cada aluno tem opções para editar ou eliminar.

2. **Editar Aluno**:
   - Permite editar os dados de um aluno existente.
   - As alterações são salvas no banco de dados MongoDB.

3. **Eliminar Aluno**:
   - Remove um aluno da lista.

4. **Adicionar Novo Aluno**:
   - Permite adicionar um novo aluno à lista.

---

## Dependências

- **Node.js**: Ambiente de execução para o servidor.
- **Express**: Framework para criar o servidor HTTP.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **Pug**: Motor de templates para renderizar as páginas HTML.
- **Mongoose**: Biblioteca para interagir com o banco de dados MongoDB.

---

## Como Executar

1. **Instalar Dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o Servidor**:
   ```bash
   npm start
   ```

3. **Configurar o Banco de Dados**:
   Certifique-se de que o MongoDB está em execução e configurado corretamente.

4. **Acessar no Navegador**:
   - Página inicial: [http://localhost:3000/front](http://localhost:3000/front)

---

## Estrutura das Rotas

### API de Alunos (`routes/alunos.js`)

- **GET `/alunos`**: Retorna a lista de alunos.
- **POST `/alunos`**: Adiciona um novo aluno.
- **GET `/alunos/:id`**: Retorna os dados de um aluno específico.
- **PUT `/alunos/:id`**: Atualiza os dados de um aluno.
- **DELETE `/alunos/:id`**: Remove um aluno.

### Front-End (`routes/front.js`)

- **GET `/front`**: Página inicial com a lista de alunos.
- **GET `/front/registo`**: Página para registar um novo aluno.
- **POST `/front/registo`**: Adiciona um novo aluno.
- **GET `/front/edit/:id`**: Página para editar os dados de um aluno.
- **POST `/front/edit/:id`**: Atualiza os dados de um aluno.
- **GET `/front/delete/:id`**: Elimina um aluno.

---

## Estrutura dos Dados

Os dados dos alunos são armazenados no MongoDB com o seguinte formato:

```json
{
  "_id": "A12345",
  "nome": "João Silva",
  "git": "https://github.com/joaosilva",
  "tpc1": true,
  "tpc2": false,
  "tpc3": true
}
```