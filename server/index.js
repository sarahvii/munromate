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

app.get('/api/munros', (request, response) => {
    response.json(munros)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})