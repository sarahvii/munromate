const mongoose = require('mongoose')

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

Munro.find({}).then(result => {
  result.forEach(munro => {
    console.log(munro)
  })
  mongoose.connection.close()
})