var express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");

var mongoDB = 'mongodb://127.0.0.1:27017/EW2025';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', function() {
  console.log('Conexão com o MongoDB realizada com sucesso!');
});

var alunosRouter = require('./routes/alunos');  
var apiRouter = require('./routes/front');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/alunos', alunosRouter);
app.use('/front', apiRouter);

module.exports = app;
