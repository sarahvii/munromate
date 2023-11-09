const mongoose = require('mongoose')

const munroSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 4,
        required: true
    },
    height: Number,
    near: String,
    favourite: Boolean,
    img: String
    })

munroSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
    })

module.exports = mongoose.model('Munro', munroSchema)

