const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const Munro = require('../models/munro')

beforeEach(async () => {
  await Munro.deleteMany({})
  await Munro.insertMany(helper.initialMunros)
})

// const munroObjects = helper.initialMunros
//   .map(munro => new Munro(munro))

// const promiseArray = munroObjects.map(munro => munro.save())
// await Promise.all(promiseArray)

describe('where there are initially some munros saved', () => {
  test('munros are returned as json', async () => {
    await api
      .get('/api/munros')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all munros are returned', async () => {
    const response = await api.get('/api/munros')
  
    expect(response.body).toHaveLength(helper.initialMunros.length)
  })

  test('a specific munro is within the returned munros', async () => {
    const response = await api.get('/api/munros')
  
    const contents = response.body.map(r => r.name)
    expect(contents).toContain(
      "Ben Macdui"
    )
  })
  test('munro has an id property', async () => {
    const munrosAtStart = await helper.munrosInDb();
    const munroToTest = munrosAtStart[0];
    
    expect(munroToTest.id).toBeDefined();
  });  
})

describe('viewing a specific munro', () => {
  test('succeeds with a valid id', async () => {
    const munrosAtStart = await helper.munrosInDb()
      
    const munroToView = munrosAtStart[0]
      
    const resultMunro = await api
      .get(`/api/munros/${munroToView.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      
    expect(resultMunro.body).toEqual(munroToView)
  })

  test('fails with statuscode 404 if munro does not exist', async () => {
    const validNonExistingId = await helper.nonExistingId()

    await api
      .get(`api/munros/${validNonExistingId}`)
      .expect(404)
  })
})

describe('addition of a new munro', () => {
  test('succeeds with valid data', async () => {
    const newMunro = {
      "name": "Braeriach",
      "height": 1296,
      "near": "Cairngorms",
      "favourite": false,
      "description": "Braeriach or Brae Riach (Am Bràigh Riabhach) is the third-highest mountain in Scotland and all of the British Isles, after Ben Nevis and Ben Macdui, rising 1,296 metres (4,252 ft) above sea level. It is in the Scottish Highlands and is the highest point in the western massif of the Cairngorms, separated from the central section by the Lairig Ghru pass. The summit is a crescent-shaped plateau, overlooking several corries.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Braeriach_and_An_Garbh_Choire_-_geograph.org.uk_-_278991.jpg"
    }
            
    await api
      .post('/api/munros')
      .send(newMunro)
      .expect(201)
      .expect('Content-Type', /application\/json/)
        
    const munrosAtEnd = await helper.munrosInDb()
    expect(munrosAtEnd).toHaveLength(helper.initialMunros.length + 1)
        
    const names = munrosAtEnd.map(n => n.name)
    expect(names).toContain(
      'Braeriach'
    )
  })

  test('munro with status code 400 if data invalid', async() => {
    const newMunro = {
      "height": 1291,
      "near": "Cairngorms",
      "favourite": false,
      "description": "Cairn Toul (Càrn an t-Sabhail) is the fourth-highest mountain in Scotland and all of the British Isles, after Ben Nevis, Ben Macdui and Braeriach. The summit is 1,291 metres (4,236 feet) above sea level. It is in the western massif of the Cairngorms, linked by a bealach at about 1125 m to Braeriach. The mountain towers above the Lairig Ghru pass.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/8/85/Cairn_Toul_-_geograph.org.uk_-_381800.jpg"
    }
      
    await api
      .post('/api/munros')
      .send(newMunro)
      .expect(400)
  
    const munrosAtEnd = await helper.munrosInDb()
    expect(munrosAtEnd).toHaveLength(helper.initialMunros.length)
  })

})

describe('deletion of a munro', () => {
  test('succeeds with status code 204 if id is valid', async () => {
    const munrosAtStart = await helper.munrosInDb()
    const munroToDelete = munrosAtStart[0]
      
    await api
      .delete(`/api/munros/${munroToDelete.id}`)
      .expect(204)
      
    const munrosAtEnd = await helper.munrosInDb()
      
    expect(munrosAtEnd).toHaveLength(
      helper.initialMunros.length - 1
    )
      
    const names = munrosAtEnd.map(r => r.name)

    expect(names).not.toContain(munroToDelete.name)
  })

})

afterAll(async () => {
  await mongoose.connection.close()
})