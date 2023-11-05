const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('dist'))

let munros = [
    {
      id: 1,
      name: "Ben Nevis",
      height: 1203,
      near: "Glasgow",
      favourite: false
    },
    {
      id: 2,
      name: "Cluny Hill",
      height: 123,
      near: "Forres",
      important: true
    },
    {
      id: 3,
      name: "Everest",
      height: 9867,
      near: "Kathmandu",
      important: false
    }
  ]

  if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
  }
  
  const password = process.argv[2]
  
  const url =
    `mongodb+srv://munromateuser:${password}@munromate.k8t7iak.mongodb.net/munroApp?retryWrites=true&w=majority`
  
  mongoose.set('strictQuery',false)
  mongoose.connect(url)
  
  const munroSchema = new mongoose.Schema({
    name: String,
    height: Number,
    near: String,
    important: Boolean
  })

  munroSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  const Munro = mongoose.model('Munro', munroSchema)



// const munro = new Munro({
//   name: 'Fantasy Munro',
//   height: 1000000,
//   near: 'The Moon',
//   important: true,
// })

// munro.save().then(result => {
//   console.log('munro saved!')
//   mongoose.connection.close()
// })

// Munro.find({}).then(result => {
//     result.forEach(munro => {
//       console.log(munro)
//     })
//     mongoose.connection.close()
//   })

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
    const id = Number(request.params.id)
    const munro = munros.find(munro => munro.id === id)

    if (munro) {
        response.json(munro)
    } else {
        response.status(404).end()
    }
})

// delete individual resource
app.delete('/api/munros/:id', (request, response) => {
    const id = Number(request.params.id)
    munros = munros.filter(munro => munro.id !== id)

    response.status(204).end()
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})