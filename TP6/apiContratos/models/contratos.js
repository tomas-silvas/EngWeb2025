var mongoose = require("mongoose");

var ContratoSchema = new mongoose.Schema({
    _id : {type : Number, require : true},
    nAnuncio : String,
    tipoprocedimento : String,
    objectoContrato : String,
    dataPublicacao : String,
    dataCelebracaoContrato : String,
    precoContratual : Number,
    prazoExecucao : String,
    NIPC_entidade_comunicante : String,
    entidade_comunicante : String,
    fundamentacao : String
}, {versionKey: false});

module.exports = mongoose.model('Contrato', ContratoSchema, 'contratos');

