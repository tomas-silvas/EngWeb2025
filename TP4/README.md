# TP4: Gestão de Filmes

### Data: 24/03/2025
### Autor: Tomás Silva A104362
### Foto:
![Photo](../Photo.png)

---

### Resumo
Este programa implementa um servidor HTTP que serve várias páginas principais, relativas a uma API de dados em `json-server`, para a gestão de filmes:

- Uma página principal com a lista de filmes, com links para editar ou eliminar cada filme.
- Uma página para registar novos filmes.
- Uma página para editar os dados de um filme existente.
- Uma página para eliminar um filme.
- Uma página para listar filmes de um ator específico.

---

### Estrutura do Projeto

- index.js: Implementação das rotas do servidor HTTP e das funções para interagir com a API de filmes.
- views: Diretório com os ficheiros Pug para renderizar as páginas HTML.
  - `index.pug`: Página inicial.
  - `filmes.pug`: Página com a lista de filmes.
  - `edit.pug`: Página para editar os dados de um filme.
  - `ator.pug`: Página para listar filmes de um ator específico.
- public: Diretório com recursos estáticos como imagens e CSS.
- `cinema.json`: Ficheiro JSON com os dados dos filmes.

---

### Funcionalidades

1. **Listar Filmes**:
   - Exibe uma lista de todos os filmes disponíveis.
   - Cada filme tem opções para editar ou eliminar.

2. **Editar Filme**:
   - Permite editar os dados de um filme existente.
   - As alterações são salvas no ficheiro cinema.json.

3. **Eliminar Filme**:
   - Remove um filme da lista.

4. **Filtrar Filmes por Ator**:
   - Exibe uma lista de filmes em que um ator específico participou.

5. **Adicionar Novo Filme**:
   - Permite adicionar um novo filme à lista.

---

### Dependências

- **Node.js**: Ambiente de execução para o servidor.
- **Express**: Framework para criar o servidor HTTP.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **Pug**: Motor de templates para renderizar as páginas HTML.

---

### Como Executar

1. **Instalar Dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o Servidor**:
   ```bash
   npm start
   ```

3. **Acessar no Navegador**:
   - Página inicial: [http://localhost:2510](http://localhost:2510)

4. **Iniciar o `json-server`**:
   Certifique-se de que o `json-server` está a correr com o ficheiro cinema.json:
   ```bash
   json-server --watch data/cinema.json
   ```

---

### Estrutura das Rotas

- **GET `/`**: Página inicial.
- **GET `/filmes`**: Lista de filmes.
- **GET `/edit/:title`**: Página para editar um filme.
- **POST `/edit/:title`**: Atualiza os dados de um filme.
- **GET `/filmes/delete/:title`**: Elimina um filme.
- **GET `/ator/:nome`**: Lista de filmes de um ator específico.
