var Livro = require('../models/livro');

module.exports.list = () => {

    return Livro
        .find()
        .exec()
}

module.exports.getLivrosByCharacter = (character) => {
    return Livro
        .find({ characters: { $regex: new RegExp(character, 'i') } })
        .exec();
};

module.exports.getLivrosByGenre = (genre) => {
    return Livro
        .find({ genres: { $regex: new RegExp(genre, 'i') } }) 
        .exec();
};

module.exports.getGenres = () => {
    return Livro
        .distinct('genres') // Obtém gêneros únicos
        .then(genres => genres.sort()); // Ordena alfabeticamente
};

module.exports.getCharacters = () => {
    return Livro
        .distinct('characters') // Obtém personagens únicos
        .then(characters => characters.sort()); // Ordena alfabeticamente
};

module.exports.findById = id => {
    return Livro
        .findById(id)
        .exec()
}

module.exports.insert = (livro) => {
    if(Livro.find({_id: livro.id}).exec().length != 1){
        var newLivro = new Livro(livro);
        newLivro._id = livro.id;
        return newLivro.save();
    }
}

module.exports.update = (id, livro) => {
    return Livro.findByIdAndUpdate(id, livro).exec();
}

module.exports.delete = id => {
    return Livro.findByIdAndDelete(id).exec();
}
