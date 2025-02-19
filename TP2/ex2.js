import { createServer } from 'http'
import axios from 'axios';
import { MainPage, AlunosPage, CursosPage, InstrumentosPage, AlunoPage } from './pages.js'
import { readFile } from 'fs'

createServer(function (req, res) {
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.write(MainPage(d))
        res.end()  
    }
    else if(req.url == '/alunos'){
        axios.get('http://localhost:3000/alunos')
            .then(function(aluno){
                var alunos = aluno.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(AlunosPage(alunos, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url == '/cursos'){
        axios.get('http://localhost:3000/cursos')
            .then(function(curso){
                var cursos = curso.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(CursosPage(cursos, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url == '/instrumentos'){
        axios.get('http://localhost:3000/instrumentos')
            .then(function(instrumento){
                var instrumentos = instrumento.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(InstrumentosPage(instrumentos, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/\/aluno\/[a-zA-Z%0-9]+$/)){
        var id = req.url.split("/")[2]
        id = id.replace('%20', " ")
        axios.get('http://localhost:3000/alunos?id=' + id)
            .then(response => {
                var alunos = response.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(AlunoPage(alunos, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/\/curso\/[a-zA-Z%0-9]+$/)){
        var curso = req.url.split("/")[2]
        curso = curso.replace('%20', " ")
        axios.get('http://localhost:3000/alunos?curso=' + curso)
            .then(response => {
                var alunos = response.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(AlunosPage(alunos, curso, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/\/instrumento\/[a-zA-Z%0-9]+$/)){
        var instrumento = req.url.split("/")[2]
        instrumento = instrumento.replace('%20', " ")
        axios.get('http://localhost:3000/alunos?instrumento=' + instrumento)
            .then(response => {
                var alunos = response.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(AlunosPage(alunos, instrumento, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/w3\.css$/)){
        readFile("w3.css", function(erro, dados){
            if(erro){
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na leitura do ficheiro: ' + erro + '</p>')
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/css'})
                res.end(dados)
            }
        })
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
        res.end('<p>Operação não suportada: ' + req.url + '</p>')
    }
}).listen(1234)

console.log('Servidor à escuta na porta 1234...')

