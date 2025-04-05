# Ficha de Aferição: API de Dados e Front-End para Gestão de Livros

### Data: 01/04/2025  
### Autor: Tomás Silva A104362  

---

## Resumo

Este projeto implementa uma API de dados em `MongoDB` e um front-end para a gestão de livros. Ele permite listar, visualizar, filtrar e gerenciar informações sobre livros, incluindo autores, gêneros, personagens e outros detalhes.

As principais funcionalidades incluem:
- Listar todos os livros.
- Filtrar livros por personagem ou gênero.
- Visualizar detalhes de um livro específico.
- Listar gêneros e personagens únicos.
- Persistir dados no banco de dados MongoDB.

---

## Persistência de Dados

A persistência de dados foi implementada utilizando o **Mongoose**, uma biblioteca para modelagem de dados no MongoDB. Os dados dos livros são armazenados no banco de dados MongoDB com o seguinte formato:

```json
{
  "_id": "18144590-the-alchemist",
  "title": "The Alchemist",
  "series": "",
  "author": ["Paulo Coelho", "Alan R. Clarke", "James Noel Smith"],
  "rating": 3.88,
  "description": "Paulo Coelho's enchanting novel...",
  "language": "English",
  "isbn": "9780062315007",
  "genres": ["Fiction", "Classics", "Fantasy"],
  "characters": ["Santiago", "Alchemist", "Melchizedek"],
  "bookFormat": "Paperback",
  "edition": "25th Anniversary Edition",
  "pages": 182,
  "publisher": "HarperOne",
  "publishDate": "04/15/14",
  "firstPublishDate": "10/28/88",
  "awards": ["NBDB National Book Award Nominee for Translation (2015)"],
  "numRatings": 2107732,
  "ratingsByStars": [805221, 613564, 414410, 172160, 102377],
  "likedPercent": 87,
  "setting": ["Egypt", "Sahara Desert"],
  "coverImg": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865542l/18144590._SY475_.jpg",
  "bbeScore": 765587,
  "bbeVotes": 8008,
  "price": 13.22
}
```

Os campos como `author`, `genres`, `characters`, `awards`, e `ratingsByStars` foram convertidos de strings para listas para melhor manipulação e consistência.

---

## Setup da Base de Dados

A base de dados foi configurada utilizando o MongoDB em um container Docker. O setup foi realizado com os seguintes passos:

1. **Criar e iniciar o container MongoDB**:
   ```bash
   docker run --name mongodb -p 27017:27017 -d mongo
   ```

2. **Conectar ao MongoDB**:
   Certifique-se de que o MongoDB está rodando e acessível na porta `27017`.

3. **Importar os dados iniciais**:
   Utilize o comando `mongoimport` para carregar os dados iniciais no banco:
   ```bash
   mongoimport --db livrosDB --collection livros --file livros.json --jsonArray
   ```
---

## Instruções para Executar

1. **Instalar Dependências**:
   Navegue até o diretório do projeto e execute em ambas as diretorias ex1 e ex2:
   ```bash
   npm install
   ```

2. **Iniciar a API e a Interface**:
   Para iniciar a API e a Interface, execute:
   ```bash
   npm start
   ```

3. **Configurar o Banco de Dados**:
   Certifique-se de que o MongoDB está em execução e que os dados foram importados corretamente.

4. **Acessar no Navegador**:
   - Página inicial: [http://localhost:17001](http://localhost:17001)

---

## Estrutura das Rotas

### API de Livros (`routes/livros.js`)

- **GET `/books`**: Retorna a lista de livros.
- **GET `/books?character=EEEE`**: Retorna livros que possuem o personagem `EEEE`.
- **GET `/books?genre=AAA`**: Retorna livros associados ao gênero `AAA`.
- **GET `/books/genres`**: Retorna a lista de gêneros únicos.
- **GET `/books/characters`**: Retorna a lista de personagens únicos.

### Front-End (`routes/front.js`)

- **GET `/`**: Página inicial com a lista de livros.
- **GET `/:id`**: Página para visualizar os detalhes de um livro.

---

## Estrutura das Páginas

- **`views/bookPage.pug`**: Página para exibir os detalhes de um livro.
- **`views/booksListPage.pug`**: Página inicial com a lista de livros.
- **`views/layout.pug`**: Layout base para as páginas.

---

## Dependências

- **Node.js**: Ambiente de execução para o servidor.
- **Express**: Framework para criar o servidor HTTP.
- **Pug**: Motor de templates para renderizar as páginas HTML.
- **Mongoose**: Biblioteca para interagir com o banco de dados MongoDB.
