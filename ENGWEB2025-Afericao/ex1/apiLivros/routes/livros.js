var express = require('express');
var router = express.Router();
var Livro = require('../controllers/livros')

router.get('/', function(req, res, next) {    
  if (req.query.character) {
      Livro.getLivrosByCharacter(req.query.character)
          .then((result) => { 
              res.status(200).jsonp(result);
          })
          .catch((err) => {
              res.status(500).jsonp(err);
          });
  } else if (req.query.genre) {
      Livro.getLivrosByGenre(req.query.genre)
          .then((result) => { 
              res.status(200).jsonp(result);
          })
          .catch((err) => {
              res.status(500).jsonp(err);
          });
  } else {
      Livro.list()
          .then((result) => { 
              res.status(200).jsonp(result);
          })
          .catch((err) => {
              res.status(500).jsonp(err);
          });
  }
});

router.get('/', function(req, res) {
    Livro.list()
        .then(data => res.jsonp(data))
        .catch(erro => res.status(500).jsonp(erro))

});

router.post('/', function(req, res) {
    Livro.insert(req.body)
        .then(data => res.status(201).jsonp(data))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/genres', function(req, res) {
    Livro.getGenres()
        .then(data => res.status(200).jsonp(data))
        .catch(err => res.status(500).jsonp(err));
});

router.get('/characters', function(req, res) {
    Livro.getCharacters()
        .then(data => res.status(200).jsonp(data))
        .catch(err => res.status(500).jsonp(err));
});

router.get('/:id', function(req, res) {
    Livro.findById(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.status(500).jsonp(erro))

});


router.put('/:id', function(req, res) {
    Livro.update(req.params.id, req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.status(500).jsonp(erro))

});

router.delete('/:id', function(req, res) {
    Livro.delete(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.status(500).jsonp(erro))

});



module.exports = router;