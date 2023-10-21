const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
    try {
        const movies = await Movie.find()
        res.render('movies', {movies})
    }
    catch(err) {
        console.log(err)
    }
});

router.get('/movie/:id', async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await Movie.findById(movieId)
        res.render('movie', {movie})
    }
    catch(err) {
        console.log(err)
    }
});

module.exports = router;
