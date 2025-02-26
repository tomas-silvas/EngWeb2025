# TP3: Gestão de Alunos

### Data: 26/02/2024
### Autor: Tomás Silva A104362
### Foto:
![Photo](../Photo.png)

---

### Resumo
Este programa implementa um servidor HTTP que serve várias páginas principais, relativas a uma API de dados em json-server, para a gestão de alunos:

- Uma página principal de lista de alunos, com links para a página de cada aluno individual.
- Uma página para registar novos alunos.
- Uma página para editar os dados de um aluno existente.
- Uma página para eliminar um aluno.

### Estrutura do Projeto

- [`alunos_server_skeleton.js`](alunos_server_skeleton.js): Implementação do servidor HTTP e das funções para gerar as páginas HTML.
- [`templates.js`](templates.js): Funções para gerar as páginas HTML.
- [`static.js`](static.js): Funções para servir recursos estáticos.
- [`public/`](public/): Diretório com recursos estáticos como imagens e CSS.