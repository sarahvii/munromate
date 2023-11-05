require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Munro = require('./models/munro')

app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>Hello Hiker!</h1>')
})

// get all munros
app.get('/api/munros', (request, response) => {
    Munro.find({}).then(munros => {
        response.json(munros)
    })

})

// get individual resource
app.get('/api/munros/:id', (request, response) => {
    Munro.findById(request.params.id).then(munro => {
        response.json(munro)
    })
})

// delete individual resource
app.delete('/api/munros/:id', (request, response) => {
    Munro.findByIdAndRemove(request.params.id)
        .then(result => {
            if (result) {
                response.status(204).end();
            } else {
                response.status(404).end();
            }
        })
    })

// create new munro
app.post('/api/munros', (request, response) => {
    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({error: 'name missing'})
    }

    const munro = new Munro({
        name: body.name,
        height: body.height,
        near: body.near,
        favourite: body.important || false,
        })

    munro.save().then(savedMunro => {
        response.json(savedMunro)
    })
})

// update a munro
app.put('/api/munros/:id', (request, response) => {
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

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})