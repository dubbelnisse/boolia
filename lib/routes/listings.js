const fetch = require('node-fetch')
const sha1 = require('sha1')
const moment = require('moment')
const nconf = require('nconf').env('__').file({
  file: 'config.json'
})

function randomString() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ''
    for (var i = 16; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))]
    return result
}

function listings (req, res) {
  var unix = moment().unix()
  var unique = randomString()
  var hash = sha1(nconf.get('callerId') + unix + nconf.get('privateKey') + unique)

  var url = 'https://api.booli.se/listings?objectType=fritidshus&center=59.36951,17.97762&dim=300000&maxSoldPrice=600000&limit=1000&maxListPrice=700000s&offset=0&callerId='+nconf.get('callerId')+'&time='+unix+'&unique='+unique+'&hash='+hash
  var options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  fetch(url, options)
    .then(response => response.json())
    .then(response => res.send(response))
    .catch(error => console.log(err))
}

module.exports = listings
