export function MainPage(data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-green">
                    <h1>Consultas</h1>
                </header>

                <div class="w3-container">
                    <ul class="w3-ul">
                        <li>
                            <a href="/alunos">Lista de Alunos</a>
                        </li>
                        <li>
                            <a href="/cursos">Lista de Cursos</a>
                        </li>
                        <li>
                            <a href="/instrumentos">Lista de Instrumentos</a>
                        </li>
                    </ul>
                </div>
                
                <footer class="w3-container w3-green">
                    <h5>EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function AlunosPage(alunos, param, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-orange">
                    <h1>Lista de Alunos${param==null? '':' - ' + param}</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                        </tr>`

    alunos.forEach(aluno => {
    pagHTML += ` 
        <tr>
            <td><a href='/aluno/${aluno.id}'>${aluno.id}</a></td>
            <td>${aluno.nome}</td>
        </tr>
    `
    });

    pagHTML += `  
                    </table>
                </div>
                
                <footer class="w3-container w3-orange">
                    <h5>EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}


export function AlunoPage(aluno, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-orange">
                    <h1>Aluno</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Data de nascimento</th>
                            <th>Curso</th>
                            <th>Ano do Curso</th>
                            <th>Instrumento</th>
                        </tr>`
    aluno.forEach(aluno => {
        pagHTML += ` 
            <tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.dataNasc}</td>
                <td>${aluno.curso}</td>
                <td>${aluno.anoCurso}</td>
                <td>${aluno.instrumento}</td>
            </tr>
        `
    });

    pagHTML += `  
                    </table>
                </div>
                
                <footer class="w3-container w3-orange">
                    <h5>EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}


export function CursosPage(cursos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-orange">
                    <h1>Lista de Cursos</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Designação</th>
                            <th>Duração</th>
                            <th>Instrumento</th>
                        </tr>`
    cursos.forEach(curso => {
        pagHTML += ` 
            <tr>
                <td><a href='/curso/${curso.id}'>${curso.id}</a></td>
                <td>${curso.designacao}</td>
                <td>${curso.duracao}</td>
                <td>${curso.instrumento["#text"]}</td>
            </tr>
        `
    });

    pagHTML += `  
                    </table>
                </div>
                
                <footer class="w3-container w3-orange">
                    <h5>EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}



export function InstrumentosPage(instrumentos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-orange">
                    <h1>Lista de Instrumentos</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                        </tr>`
    instrumentos.forEach(instrumento => {
        pagHTML += ` 
            <tr>
                <td><a href='/instrumento/${instrumento["#text"]}'>${instrumento.id}</a></td>
                <td>${instrumento["#text"]}</td>
            </tr>
        `
    });

    pagHTML += `  
                    </table>
                </div>
                
                <footer class="w3-container w3-orange">
                    <h5>EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}


