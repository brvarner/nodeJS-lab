let path = require('path')
let fs = require('fs')
let request = require('request')

let dataPath = path.join(__dirname, './popular-articles.json')

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err)

    let articles = []

    JSON.parse(body).data.children.forEach(item => {
        articles.push({ "title": item.data.title, "url": item.data.url, "author": item.data.author })
    })

    let articleStrings = JSON.stringify(articles)

    fs.writeFile(dataPath, articleStrings, err => { if (err) console.log(err) })
})