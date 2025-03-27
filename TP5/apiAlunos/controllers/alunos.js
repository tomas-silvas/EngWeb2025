var Aluno = require('../models/aluno');

module.exports.list = () => {

    return Aluno
        .find()
        .sort({nome:1})
        .exec()
}

module.exports.findById = id => {
    return Aluno
        .findById(id)
        .exec()
}

module.exports.insert = (aluno) => {
    if(Aluno.find({_id: aluno.id}).exec().length != 1){
        var newAluno = new Aluno(aluno);
        newAluno._id = aluno.id;
        return newAluno.save();
    }
}

module.exports.update = (id, aluno) => {
    return Aluno.findByIdAndUpdate(id, aluno).exec();
}

module.exports.delete = id => {
    return Aluno.findByIdAndDelete(id).exec();
}

module.exports.inverteTpc = (id, idTpc) => {
    return Aluno.finfOne({_id: aluno.id}).exec().then(aluno => {
        var tpc = `tpc${idTpc}`
        if (aluno[tpc]){
            aluno[tpc] = !aluno[tpc]
        } else {
            aluno[tpc] = true
        }

        return Aluno.findByIdAndUpdate(id, aluno).exec()   
    })
}