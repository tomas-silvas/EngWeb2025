var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', 
    { title: 'Olá turma de 2025' ,
      docente: 'jcr',
      instituicao: 'minho'
    });
});

router.get('/filmes', function(req, res) {
  axios.get('http://localhost:3000/filmes')
    .then(dados => {
      res.render('filmes', { lfilmes: dados.data, tit: "Lista de Filmes" });  
    })
    .catch(erro => {
      console.log('Erro na listagem de filmes: ' + erro);
      res.render('error', { error: erro });
    });
});

router.get('/edit/:title', function(req, res) {
  var title = req.params.title;
  axios.get('http://localhost:3000/filmes?title=' + title)
    .then(dados => {
        res.render('edit', { f: dados.data[0], tit: "Editar Filme" });
    })
    .catch(erro => {
      console.log('Erro ao buscar filme: ' + erro);
      res.render('error', { error: erro });
    });
});

router.post('/edit/:title', function(req, res) {
  var title = req.params.title;
  const updatedFilm = {
    title: req.body.title,
    year: req.body.year,
    cast: req.body.cast,
    genres: req.body.genres,
  };

  axios.put('http://localhost:3000/filmes/' + title, updatedFilm)
      .then(() => {
          res.redirect('/filmes'); // Redireciona para a lista de filmes após a edição
      })
      .catch(erro => {
          console.log('Erro ao editar filme: ' + erro);
          res.render('error', { error: erro });
      });
});


router.get('/filmes/delete/:title', function(req, res){
  const id = req.params.id;
  axios.delete('http://localhost:3000/filmes/title')
    .then(() => res.status(200).redirect('/filmes'))
    .catch(error => {
      console.log(error);
      res.render('error', {error: error})
    });
}) 

router.get('/ator/:')

router.get('/ator/:nome', function(req, res) {
  const nome = req.params.nome;
  
  console.log(nome);

  axios.get(`http://localhost:3000/filmes`)
    .then(resp => {
      const ator = resp.data.filter(filme => filme.cast && filme.cast.includes(nome));
      res.render('ator', {'lfilmes': resp.data.filter(filme => filme.cast && filme.cast.includes(nome))})
    })
    .catch(error => {
      console.log(error);
      res.render('error', {error: error})
    });
});









module.exports = router;
