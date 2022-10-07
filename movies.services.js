const moviesControllers = require('./movies.controller')

const getAllMovies = (req, res) => {
    moviesControllers.getAllMovies()
    // data es la informacion que devuleve el getAllMovies() si es exitosa
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    
}

const postMovie = (req, res) => {
    // const body = req.body
    const data = req.body
    if(data.name && data.genre && data.duration && data.releaseDate){
        moviesControllers.createMovie(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json({message: err.message })
            })
    }else {
        res.status(400).json({message: 'Missing data'})
    }
}

const getMovieById = (req, res) => {
    const id = req.params.id

    moviesControllers.getMovieById(id)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({message: err.message})
    })
} 

module.exports = {
    getAllMovies,
    getMovieById,
    postMovie
}
