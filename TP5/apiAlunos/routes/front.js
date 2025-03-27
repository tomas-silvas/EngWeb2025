var express = require('express');
var router = express.Router();
const axios = require('axios');
const apiURL = 'http://localhost:3000/alunos';

router.get('/', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    axios.get(apiURL)
      .then(resp => res.status(200).render("studentsListPage", { slist: resp.data, data: date }))
      .catch(erro => res.status(500).render("error", erro))
  });

router.get('/registo', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    res.status(200).render('studentsFormPage', {data: date})  
  });
  
router.post('/registo', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    var result = req.body
    axios.post(apiURL, result)
      .then(dados => {
        console.log(dados.data)
        res.status(201).redirect('/front')
  
      })
      .catch(erro => {
        res.status(500).render('error', {error: erro})
      })
  });


router.get('/edit/:id', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16);
    axios.get(`${apiURL}/${req.params.id}`)
        .then(resp => {
            res.status(200).render("studentFormEditPage", { aluno: resp.data, data: date });
        })
        .catch(erro => {
            res.status(500).render("error", { error: erro });
        });
});

router.post('/edit/:id', function(req, res, next) {
    var updatedAluno = req.body; 
    axios.put(`${apiURL}/${req.params.id}`, updatedAluno)
        .then(resp => {
            console.log("Aluno atualizado:", resp.data);
            res.status(200).redirect('/front'); 
        })
        .catch(erro => {
            console.error("Erro ao atualizar aluno:", erro);
            res.status(500).render("error", { error: erro });
        });
});

router.get('/delete/:id', function(req, res, next) {
    axios.delete(`${apiURL}/${req.params.id}`)
        .then(resp => {
            console.log("Aluno deletado:", resp.data);
            res.status(200).redirect('/front'); 
        })
        .catch(erro => {
            console.error("Erro ao deletar aluno:", erro);
            res.status(500).render("error", { error: erro });
        });
});




router.get('/:id', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    axios.get(`${apiURL}/${req.params.id}`)
      .then(resp => res.status(200).render("studentPage", { aluno: resp.data, data: date }))
      .catch(erro => res.status(500).render("error", erro))
  }
);

module.exports = router;