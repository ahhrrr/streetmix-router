var config = require('config'),
    request = require('request')

module.exports = function(req, res, next) {

  console.log('Routing request to v1...')
  request({
    method: req.method,
    uri: config.routers.v1.baseuri + req.url,
    followRedirect: false
  }).pipe(res)

} // END function - module.exports
