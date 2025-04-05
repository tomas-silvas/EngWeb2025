var express = require('express');
var router = express.Router();
var contrato = require('../controllers/contratos')

/* GET home page. */
router.get('/', function(req, res, next) {    
  if(req.query.entidade) {
    contrato.getContratosByEntidade(req.query.entidade)
      .then((result) => { 
        res.status(200).jsonp(result)

      }).catch((err) => {
        res.status(500).jsonp(err)
          .then((result) => { 
            res.status(200).jsonp(result)
          }).catch((err) => {
            res.status(500).jsonp(err)
          });
      });
  } else if (req.query.tipo) {
    contrato.getContratosByTipo(req.query.tipo)
      .then((result) => { 
        res.status(200).jsonp(result)

      }).catch((err) => {
        res.status(500).jsonp(err)
      });

  }
  else {
    contrato.getContratos()
      .then((result) => { 
        res.status(200).jsonp(result)

      }).catch((err) => {
        res.status(500).jsonp(err)
      });
    }
});

router.get('/entidades', function(req, res, next) {
  
  contrato.getEntidades()
    .then((result) => { 
      res.status(200).jsonp(result)
      
    }).catch((err) => {
      res.status(500).jsonp(err)
    });

});

router.get('/tipos', function(req, res, next) {
  
  contrato.getTipos()
    .then((result) => { 
      res.status(200).jsonp(result)
      
    }).catch((err) => {
      res.status(500).jsonp(err)
    });

});

router.get('/:id', function(req, res, next) {
  
  contrato.getContratoById(req.params.id)
    .then((result) => { 
      res.status(200).jsonp(result)
      
    }).catch((err) => {
      res.status(500).jsonp(err)
    });

});

router.post('/', function(req, res, next) { 
  contrato.insert(req.body)
    .then((result) => { 
      res.status(200).jsonp(result)
      
    }).catch((err) => {
      res.status(500).jsonp(err)
    });

});

router.put('/:id', function(req, res, next) { 
  contrato.update(req.params.id, req.body)
    .then((result) => { 
      res.status(200).jsonp(result)
      
    }).catch((err) => {
      res.status(500).jsonp(err)
    });

});

router.delete('/:id', function(req, res, next) { 
  contrato.delete(req.params.id)
    .then((result) => { 
      res.status(200).jsonp(result)    
    }).catch((err) => {
      res.status(500).jsonp(err)
    });

});


module.exports = router;