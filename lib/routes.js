const listings = require('./routes/listings')

function register (app) {
  app.get('/listings', listings)
}

module.exports = {
  register
}
