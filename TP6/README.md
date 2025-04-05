
# TP6: API de dados e front-end para gestão de contratos

### Data: 05/04/2025  
### Autor: Tomás Silva A104362  

---

## Resumo

Este projeto serve várias páginas principais, relativas a uma API de dados em `MongoDB`, para a gestão de contratos:

- Uma página principal com a lista de contratos, com links para editar ou eliminar cada contrato.
- Uma página para registar novos contratos.
- Uma página para editar os dados de um contrato existente.
- Uma página para eliminar um contrato.
- Uma página para listar contratos por tipo de procedimento.
- Uma página para listar contratos por entidade comunicante.

---

## Estrutura do Projeto

- **`routes/contratos.js`**: Implementação das rotas para interagir com a API de contratos.
- **`routes/front.js`**: Implementação das rotas para renderizar as páginas Pug.
- **`controllers/contratos.js`**: Controlador com as funções para interagir com o banco de dados MongoDB.
- **`models/contratos.js`**: Modelo Mongoose para a coleção de contratos.
- **views**: Diretório com os ficheiros Pug para renderizar as páginas.
  - `contratosListPage.pug`: Página inicial com a lista de contratos.
  - `contratoFormEditPage.pug`: Página para editar os dados de um contrato.
  - `contratoPage.pug`: Página para visualizar os detalhes de um contrato.
  - `error.pug`: Página para exibir erros.
  - `layout.pug`: Layout base para as páginas.
- **public**: Diretório com recursos estáticos como CSS e imagens.

---

## Funcionalidades

1. **Listar Contratos**:
   - Exibe uma lista de todos os contratos disponíveis.
   - Cada contrato tem opções para editar ou eliminar.

2. **Editar Contrato**:
   - Permite editar os dados de um contrato existente.
   - As alterações são salvas no banco de dados MongoDB.

3. **Eliminar Contrato**:
   - Remove um contrato da lista.

4. **Adicionar Novo Contrato**:
   - Permite adicionar um novo contrato à lista.

5. **Visualizar Detalhes do Contrato**:
   - Exibe informações detalhadas de um contrato específico.

6. **Listar Contratos por Tipo**:
   - Exibe uma lista de contratos filtrados por tipo de procedimento.

7. **Listar Contratos por Entidade**:
   - Exibe uma lista de contratos filtrados por entidade comunicante.

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
   - Página inicial: [http://localhost:16000/front](http://localhost:16000/front)

---

## Estrutura das Rotas

### API de Contratos (`routes/contratos.js`)

- **GET `/contratos`**: Retorna a lista de contratos.
- **GET `/contratos/:id`**: Retorna os dados de um contrato específico.
- **POST `/contratos`**: Adiciona um novo contrato.
- **PUT `/contratos/:id`**: Atualiza os dados de um contrato.
- **DELETE `/contratos/:id`**: Remove um contrato.
- **GET `/contratos/entidades`**: Retorna a lista de entidades comunicantes.
- **GET `/contratos/tipos`**: Retorna a lista de tipos de procedimento.

### Front-End (`routes/front.js`)

- **GET `/front`**: Página inicial com a lista de contratos.
- **GET `/front/contrato/:id`**: Página para visualizar os detalhes de um contrato.
- **GET `/front/edit/:id`**: Página para editar os dados de um contrato.
- **POST `/front/edit/:id`**: Atualiza os dados de um contrato.
- **GET `/front/delete/:id`**: Elimina um contrato.
- **GET `/front/tipo/:tipo`**: Página para listar contratos por tipo de procedimento.
- **GET `/front/entidade/:entidade`**: Página para listar contratos por entidade comunicante.

---

## Estrutura dos Dados

Os dados dos contratos são armazenados no MongoDB com o seguinte formato:

```json
{
  "_id": 1,
  "nAnuncio": "12345",
  "tipoprocedimento": "Ajuste Direto",
  "objectoContrato": "Serviços de TI",
  "dataPublicacao": "2025-03-31",
  "dataCelebracaoContrato": "2025-04-01",
  "precoContratual": 10000,
  "prazoExecucao": "30 dias",
  "NIPC_entidade_comunicante": "123456789",
  "entidade_comunicante": "Empresa X",
  "fundamentacao": "Urgência"
}
```
