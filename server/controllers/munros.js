const munrosRouter = require('express').Router()
const Munro = require('../models/munro')

// get all munros
munrosRouter.get('/', (request, response) => {
    Munro.find({}).then(munros => {
        response.json(munros)
    })
})

// get individual resource
munrosRouter.get('/:id', (request, response, next) => {
    Munro.findById(request.params.id)
    .then(munro => {
        if (munro) {
        response.json(munro)
    } else {
        response.status(404).end()
        }
    })
    .catch(error => next(error))
})

// create new munro
munrosRouter.post('/', (request, response, next) => {
    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({error: 'name missing'})
    }

    const munro = new Munro({
        name: body.name,
        height: body.height,
        near: body.near,
        favourite: body.favourite || false,
        img: body.img,
        })

    munro.save().then(savedMunro => {
        response.json(savedMunro)
    })
    .catch(error => next(error))
})

// delete individual resource
munrosRouter.delete('/:id', (request, response, next) => {
    Munro.findByIdAndRemove(request.params.id)
        .then(result => {
            if (result) {
                response.status(204).end();
            } else {
                response.status(404).end();
            }
        })
    })

// update a munro
munrosRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const munro = {
        name: body.name,
        height: body.height,
        near: body.near,
        favourite: body.favourite || false,
    };

    Munro.findByIdAndUpdate(request.params.id, munro, { new: true })
    .then(updatedMunro => {
        if (updatedMunro) {
            response.json(updatedMunro);
        } else {
            response.status(404).end();
        }
    })
})

module.exports = munrosRouter
  