var express = require('express');
var router = express.Router();
var Aluno = require('../controllers/alunos')


router.get('/', function(req, res) {
    Aluno.list()
        .then(data => res.jsonp(data))
        .catch(erro => res.status(500).jsonp(erro))

});

router.post('/', function(req, res) {
    Aluno.insert(req.body)
        .then(data => res.status(201).jsonp(data))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/:id', function(req, res) {
    Aluno.findById(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.status(500).jsonp(erro))

});

router.put('/:id', function(req, res) {
    Aluno.update(req.params.id, req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.status(500).jsonp(erro))

});

router.delete('/:id', function(req, res) {
    Aluno.delete(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.status(500).jsonp(erro))

});



module.exports = router;