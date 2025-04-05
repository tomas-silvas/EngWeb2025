var mongoose = require("mongoose");

/*
var livroSchema = new mongoose.Schema({
    _id: String,
    title: String,
    series: String,
    author: [String], // Lista de autores
    rating: Number, // Alterado para Number
    description: String,
    language: String,
    isbn: String,
    genres: [String], // Lista de gêneros
    characters: [String], // Lista de personagens
    bookFormat: String,
    edition: String,
    pages: Number, // Alterado para Number
    publisher: String,
    publishDate: String,
    firstPublishDate: String,
    awards: [String], // Lista de prêmios
    numRatings: Number, // Alterado para Number
    ratingsByStars: [Number], // Alterado para lista de Numbers
    likedPercent: Number, // Alterado para Number
    setting: [String], // Lista de configurações
    coverImg: String,
    bbeScore: Number, // Alterado para Number
    bbeVotes: Number, // Alterado para Number
    price: Number // Alterado para Number
}, { versionKey: false });
*/

var livroSchema = new mongoose.Schema({
    _id: String,
    title: String,
    series: String,
    author: [String],
    rating: String,
    description: String,
    language: String,
    isbn: String,
    genres: [String],
    characters: [String],
    bookFormat: String,
    edition: String,
    pages: String,
    publisher: String,
    publishDate: String,
    firstPublishDate: String,
    awards: [String],
    numRatings: String,
    ratingsByStars: [String],
    likedPercent: String,
    setting: [String],
    coverImg: String,
    bbeScore: String,
    bbeVotes: String,
    price: String
}, { versionKey: false });


module.exports = mongoose.model('Livro', livroSchema, 'livros');