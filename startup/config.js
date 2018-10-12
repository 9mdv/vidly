const config = require('config')
module.exports = function() {
  // set vidly_jwtPrivateKey=mySecretKey
  if (!config.get('jwtPrivateKey')) {
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.')
  }
}
