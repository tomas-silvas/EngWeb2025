var express = require('express');
var router = express.Router();
const axios = require('axios');
const apiURL = 'http://localhost:17000/books';

router.get('/', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    axios.get(apiURL)
      .then(resp => res.status(200).render("booksListPage", { books: resp.data, data: date }))
      .catch(erro => res.status(500).render("error", erro))
  });



router.get('/:id', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    axios.get(`${apiURL}/${req.params.id}`)
      .then(resp => res.status(200).render("bookPage", { book: resp.data, data: date }))
      .catch(erro => res.status(500).render("error", erro))
  }
);

router.get('/entidades/:idAutor', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16);
    axios.get(`${apiURL}?idAutor=${req.params.autor}`)
        .then(resp => {
            res.status(200).render("booksListPage", { slist: resp.data, data: date });
        })
        .catch(erro => {
            res.status(500).render("error", { error: erro });
        });
});

module.exports = router;