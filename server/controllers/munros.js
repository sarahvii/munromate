const munrosRouter = require('express').Router()
const Munro = require('../models/munro')
const mongoose = require('mongoose')

// get all munros
munrosRouter.get('/', async (request, response) => {
  const munros = await Munro.find({})
  response.json(munros)
});

// get individual resource
munrosRouter.get('/:id', async (request, response) => {
  const munro = await Munro.findById(request.params.id)
  if (munro) {
    response.json(munro)
  } else {
    response.status(404).end()
  }
})

// create new munro
munrosRouter.post('/', async (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ error: 'name missing' })
  }

  const munro = new Munro({
    name: body.name,
    height: body.height,
    near: body.near,
    favourite: body.favourite || false,
    description: body.description,
    img: body.img,
  })

  const savedMunro = await munro.save()
  response.status(201).json(savedMunro)
})

// delete individual munro
munrosRouter.delete('/:id', async (request, response) => {
  await Munro.findByIdAndRemove(request.params.id)
  response.status(204).end();
})  

// update a munro
munrosRouter.put('/:id', (request, response) => {
  const body = request.body
  
  const munro = new Munro({
    name: body.name,
    height: body.height,
    near: body.near,
    favourite: body.favourite || false,
    description: body.description,
    img: body.img,
  })

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
  