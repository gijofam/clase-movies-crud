const { UUIDV4, UUID } = require('sequelize');
const Movies = require('../models/movies.models')

const uuid = require('uuid')

const getAllMovies = async() => {
    // trae toda la tabla Movies (select * from movies)
    // este devuelve un array de objetos
    const data = await Movies.findAll()
    return data;
}

// getAllMovies()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

const createMovie = async(data) => {
    const newMovie = await Movies.create({
        id: uuid.v4(),
        name: data.name,
        genre: data.genre,
        duration: data.duration,
        releaseDate: data.releaseDate
    })
    
    return newMovie
}


// createMovie({
//     name: 'Pacific Rim',
//     genre: 'Action, SciFi',
//     duration: 120,
//     releaseDate: '2012/10/30'
// })
//     .then(res => console.log(res))
//     .catch( err => console.log(err))


    const getMovieById = async (id) => {
        // este devuelve un unico valor
        const data = await Movies.findOne({
            where: {
                id
            }
        });
        // select* from movies where id = id;
        return data
    }


module.exports = {
    getAllMovies,
    createMovie,
    getMovieById
}