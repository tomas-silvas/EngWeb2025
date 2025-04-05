var express = require('express');
var router = express.Router();
const axios = require('axios');
const apiURL = 'http://localhost:16000/contratos';

router.get('/', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    axios.get(apiURL)
      .then(resp => res.status(200).render("contratosListPage", { slist: resp.data, data: date }))
      .catch(erro => res.status(500).render("error", erro))
  });

router.get('/entidade/:entidade', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16);
    axios.get(`${apiURL}?entidade=${req.params.entidade}`)
        .then(resp => {
            res.status(200).render("contratosListPage", { slist: resp.data, data: date });
        })
        .catch(erro => {
            res.status(500).render("error", { error: erro });
        });
});


router.get('/tipo/:tipo', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16);
    axios.get(`${apiURL}?tipo=${req.params.tipo}`)
        .then(resp => {
            res.status(200).render("contratosListPage", { slist: resp.data, data: date });
        })
        .catch(erro => {
            res.status(500).render("error", { error: erro });
        });
});


router.get('/edit/:id', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16);
    axios.get(`${apiURL}/${req.params.id}`)
        .then(resp => {
            res.status(200).render("contratoFormEditPage", { contrato: resp.data, data: date });
        })
        .catch(erro => {
            res.status(500).render("error", { error: erro });
        });
});

router.post('/edit/:id', function(req, res, next) {
    var updatedContrato = req.body; 
    axios.put(`${apiURL}/${req.params.id}`, updatedContrato)
        .then(resp => {
            console.log("Contrato atualizado:", resp.data);
            res.status(200).redirect('/front'); 
        })
        .catch(erro => {
            console.error("Erro ao atualizar contrato:", erro);
            res.status(500).render("error", { error: erro });
        });
});

router.get('/delete/:id', function(req, res, next) {
    axios.delete(`${apiURL}/${req.params.id}`)
        .then(resp => {
            console.log("Contrato deletado:", resp.data);
            res.status(200).redirect('/front'); 
        })
        .catch(erro => {
            console.error("Erro ao deletar contrato:", erro);
            res.status(500).render("error", { error: erro });
        });
});

router.get('/contrato/:id', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    axios.get(`${apiURL}/${req.params.id}`)
      .then(resp => res.status(200).render("contratoPage", { contrato: resp.data, data: date }))
      .catch(erro => res.status(500).render("error", erro))
});

module.exports = router;