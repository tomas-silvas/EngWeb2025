import { createServer } from 'http'
import axios from 'axios'

function genMainPage(date) {
    return `
        <html>
        <head>
            <title>Página Principal</title>
            <style>
                .header {
                    background-color: #2196F3;
                    color: white;
                    padding: 15px;
                    text-align: center;
                }
                body {
                    font-family: Arial, sans-serif;
                }
                .link {
                    display: block;
                    margin: 20px 0;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <header class="header">
                <h1>Consultas</h1>
            </header>
            <p>Data: ${date}</p>
            <div class="link">
                <a href="/reps">Ver Lista de Reparações</a>
            </div>
        </body>
        </html>
    `;
}

function genReparacoesPage(data) {
    let reparacoes = JSON.parse(data);
    let page = `
        <html>
        <head>
            <title>Reparações</title>
            <style>
                .header {
                    background-color: #2196F3;
                    color: white;
                    padding: 15px;
                    text-align: center;
                }
                body {
                    font-family: Arial, sans-serif;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    background-color: #f2f2f2;
                    margin: 5px 0;
                    padding: 10px;
                    border: 1px solid #ddd;
                }
            </style>
        </head>
        <body>
            <header class="header">
                <h1>Lista de Reparações</h1>
            </header>
            <ul>
    `;

    reparacoes.forEach(rep => {
        page += `<li>${rep.nome} - ${rep.viatura.marca} ${rep.viatura.modelo} (${rep.viatura.matricula})</li>`;
    });

    page += `
            </ul>
        </body>
        </html>
    `;

    return page;
}

createServer(function (req, res) {
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
        res.write(genMainPage(d))
        res.end()

    } else if (req.url == '/reps') {
        axios.get('http://localhost:3000/reparacoes')
            .then(function (response) {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                res.write(genReparacoesPage(JSON.stringify(response.data)))
                res.end()
            }).catch(err => {
                console.log('Erro: ' + err)
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                res.write('<p>Erro na obtenção de dados</p>')
                res.end()
            })
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<p>Pedido não suportado: ' + req.method + " " + req.url + '</p>')
        res.end()
    }
}).listen(1234)

console.log("Servidor à escuta na porta 1234")