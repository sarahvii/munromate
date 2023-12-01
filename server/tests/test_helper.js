const Munro = require('../models/munro')

const initialMunros = [
  {
    "name": "Ben Nevis",
    "height": 1345,
    "near": "Fort William",
    "favourite": true,
    "description": "Ben Nevis (Beinn Nibheis) is the highest mountain in Scotland, the United Kingdom and the British Isles. The summit is 1,345 metres (4,413 ft)[1] above sea level and is the highest land in any direction for 739 kilometres (459 miles).[3][a] Ben Nevis stands at the western end of the Grampian Mountains in the Highland region of Lochaber, close to the town of Fort William.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/0/09/BenNevis2005.jpg"
  },
        
  {
    "name": "Ben Macdui",
    "height": 1309,
    "near": "Cairngorms",
    "favourite": false,
    "description": "Ben Macdui (Beinn MacDuibh) is the second-highest mountain in Scotland and all of the British Isles, after Ben Nevis, and the highest of the Cairngorm Mountains. The summit is 1,309 metres (4,295 ft) above sea level and it is classed as a Munro. Ben Macdui sits on the southwestern edge of the Cairngorm plateau, overlooking the Lairig Ghru pass to the west, and Loch Etchachan to the east. It lies on the boundary between the historic counties of Aberdeenshire and Banffshire.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Ben_Macdui_-_geograph.org.uk_-_3477292.jpg"
  }
]

const nonExistingId = async () => {
  const munro = new Munro({ name: 'willremovethissoon' })
  await munro.save()
  await munro.deleteOne()

  return munro._id.toString()
}

const munrosInDb = async () => {
  const munros = await Munro.find({})
  return munros.map(munro => munro.toJSON())
}

module.exports = {
  initialMunros, nonExistingId, munrosInDb
}