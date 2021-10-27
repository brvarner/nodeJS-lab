let path = require('path')
let fs = require('fs')
let rp = require('request-promise')

rp('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err)
        .then(body => {

            JSON.parse(body).data.children.forEach(item => {
                if (path.extname(item.data.url) == '.jpg' || path.extname(item.data.url) == '.png' || path.extname(item.data.url) == '.gif') {
                    const options = { uri: item.data.url, encoding: "base64" }
                    rp(options)
                        .then((img) => fs.writeFile(`./downloads/${item.data.id}${path.extname(item.data.url)}`, img, "base64", (err) => { console.log(err) }))
                }
            })
        })
        .catch(err => console.log(err))
})