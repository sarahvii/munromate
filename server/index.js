const express = require('express')
const app = express()

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

app.get('/', (request, response) => {
    response.send('<h1>Hello Hiker!</h1>')
})

// get all munros
app.get('/api/munros', (request, response) => {
    response.json(munros)
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

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})