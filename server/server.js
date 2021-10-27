let path = require('path')
let fs = require('fs')

let dataPath = path.join(__dirname, '../chirps.json')

let chirps = [{
    "username": "StonkInfluencer",
    "chirp": "Wow, we're still chirpin?"
}, {
    "username": "CoolFan07",
    "chirp": "I love that we're still chirpin!"
}, {
    "username": "WalkerTexasRanger",
    "chirp": "New Hat Day!"
}, {
    "username": "BinacaOverpass",
    "chirp": "Just bought a Bentley"
}, {
    "username": "The Dude",
    "chirp": "Roll Tide Roll!"
}]

let chirpStrings = JSON.stringify(chirps)

fs.writeFile(dataPath, chirpStrings, err => {if(err) console.log(err)})